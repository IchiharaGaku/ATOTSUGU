<template>
  <div id="app">
    <Header class="header"></Header>
    <Nuxt class="main" />
  </div>
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
