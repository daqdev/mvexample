<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import MainLayout from './layouts/MainLayout.vue'
</script>

<template>

<main-layout/>


  <!-- <header>
    <div class="wrapper">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main> -->
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
