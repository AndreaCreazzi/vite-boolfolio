<script>
import AppHome from './pages/AppHome.vue';
import ProjectShow from './pages/ProjectShow.vue'
import Appheader from './components/Appheader.vue';
export default {
  components: { Appheader, AppHome, ProjectShow },
};
</script>

<template>
  <Appheader />
  <RouterView />
</template>

<style scoped></style>
