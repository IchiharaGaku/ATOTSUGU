'use strict';
const { createLogger, format, transports } = require('winston');

const silent = process.env.DISABLE_LOGGER ? true : false;

exports = module.exports = createLogger({
    level: 'info',
    format: format.combine(format.colorize({ all: true }), format.printf(_printf)),
    silent,
    transports: [
      new transports.Console()
    ]
});

function _printf(info) {
    let { level, message, req = {} } = info;

    let ipaddr = getIp(req) || '-';
    let userId = getUserId(req.session) || '-';

    return `${ipaddr} ${userId} [${level}] ${message}`;
}

function getIp(req) {
    if (req.headers && req.headers['x-forwarded-for']) {
        return req.headers['x-forwarded-for'];
    }
    if (req.connection && req.connection.remoteAddress) {
        return req.connection.remoteAddress;
    }
    if (req.connection && req.connection.socket && req.connection.socket.remoteAddress) {
        return req.connection.socket.remoteAddress;
    }
    if (req.socket && req.socket.remoteAddress) {
        return req.socket.remoteAddress;
    }
    return null;
}

function getUserId(session) {
    let { userId } = session || {};
    if (userId != null) return userId;
    return null;
}

exports.internal = {
    _printf,
    getIp,
    getUserId
};
