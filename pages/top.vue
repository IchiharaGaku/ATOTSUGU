<template>
  <div>
    <v-card
      class="mx-auto mt-5"
      max-width="500"
      max-height="400"
      v-for="business in businesses"
      :key="business"
      to="business/show"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
        height="200px"
      ></v-img>

      <v-card-title>
        林業を行ってくれる方！（タイトル）
      </v-card-title>

      <v-card-subtitle>
        林業（業界）
      </v-card-subtitle>

        <v-spacer></v-spacer>

      <v-card-text class="v-card-text">
        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'afterLogin',
  data () {
      return {
        businesses: [1,2,3]
      }
    },
  methods: {

  },
}
</script>


<style lang="scss" scoped>
  .v-card-text {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

</style>
