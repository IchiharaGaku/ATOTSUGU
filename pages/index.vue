<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-express
      </h1>
      <div>
        {{ test }}
        <div class="links">
          <a
            href="/users"
            class="button--green"
          >
            Users List
          </a>
        </div>
      </div>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <table>
      <tr>
        <th>ID</th>
        <th>年齢</th>
        <th>性別</th>
        <th>自己紹介</th>
        <th>業種</th>
        <th>事業名</th>
        <th>想定年商</th>
        <th>メール</th>
        <th>パスワード</th>
      </tr>
      <tr v-for="item in owners" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.gender }}</td>
        <td>{{ item.self_introduce }}</td>
        <td>{{ item.business_type }}</td>
        <td>{{ item.business_name }}</td>
        <td>{{ item.assumed_salalry }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.password }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import getUsersGql from '~/apollo/queries/getUsers.gql'
import getOwnersGql from '~/apollo/queries/getOwners.gql'

export default {
  async asyncData ({ $http }) {
    const test = await $http.$get('/api/test')
    return {
      test
    }
  },
  data () {
    return {
      users: [],
      owners: []
    }
  },
  apollo: {
    users: {
      query: getUsersGql
    },
    owners: {
      query: getOwnersGql
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
