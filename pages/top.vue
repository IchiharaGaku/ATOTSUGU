<template>
  <div>
    <v-card
      class="mx-auto mt-5"
      max-width="500"
      max-height="400"
      v-for="business in businesses"
      :key="business"
      to="business/:id"
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
        災害を予防し、自然のをバランスを守り、資源を活かす。木の伐採・運搬、管理、雨の日の多い夏の期間は丹波山村の公園の清掃など
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'afterLogin',
  data () {
      return {
        businesses: [{id: 1}, {id: 2}, {id: 3}]
      }
    },
  methods: {
    toBusinessShow() {
      
    }
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
