<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects';
import Appheader from './components/Appheader.vue';
import ProjectList from './components/project/ProjectList.vue';
export default {
  components: { Appheader, ProjectList },
  data: () => ({ projects: [] }),
  methods: {
    fetchProject() {
      axios.get(endpoint).then(res => { this.projects = res.data })
    }
  },
  created() {
    this.fetchProject()
  }
};
</script>

<template>
  <Appheader />
  <main class="container my-3">
    <ProjectList :projects="projects" />
  </main>
</template>

<style scoped></style>
