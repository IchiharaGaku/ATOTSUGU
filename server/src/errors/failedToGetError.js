module.exports = class FailedToGetError extends require('./baseError') {
    constructor(message) {
      // Providing default message and overriding status code.
      super('failed to get ' + (message || 'something'), 400);
    }
  };
  