<template>
    <v-app id="app">
      <v-app-var>
        <Header class="header"></Header>
      </v-app-var>
      <v-main>
        <Nuxt class="main" />
      </v-main>
    </v-app>
</template>

<style lang="scss">


#app {
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    background-color: $base_background_color;
    display: grid;
    grid-template:
    "header" 64px
    "main"   auto
    /* "footer" 20px */
    /100%;



}


</style>
