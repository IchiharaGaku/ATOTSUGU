<template>
  <div>
    <v-card
      class="mx-auto"
      max-width="600"
    >
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ business.title }}</v-card-title>
      </v-img>
      <h3>
        <v-icon>mdi-account-circle</v-icon>
        廣瀬大輝
      </h3>


      <h2>
        なにをやっているか
      </h2>
        {{ business.contents_what}}
      <h2>
        なぜやっているか
      </h2>
        {{ business.contents_why}}
      <h2>
        どうやっているか
      </h2>
        {{ business.contents_how}}
      <h2>
        こんなことやります
      </h2>
        {{ business.contents_will}}
      <h2>
        住所
      </h2>
        {{ business.address }}

      
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'afterLogin',
  data() {
    return {
      business: 
      {
        title: 'Top 10 Australian beaches',
        contents_what: '〜〜〜〜〜これをやりましょう',
        contents_why: '〜〜〜だからやりましょう',
        contents_how: '~~~~こうやってやりましょう',
        contents_will: '~~~~~~~これをやってほしいです',
        address: '神奈川県横浜市'

      },
    }
  },

}
</script>


<style lang="scss" scoped>

</style>