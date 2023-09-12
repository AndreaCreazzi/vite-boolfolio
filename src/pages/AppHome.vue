<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/projects';
import ProjectList from '../components/project/ProjectList.vue';
export default {
    components: { ProjectList },
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
    <main class="container">
        <ProjectList :projects="projects" />
    </main>
</template>

<style scoped></style>