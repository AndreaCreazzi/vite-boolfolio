<script>
import axios from 'axios'
import ProjectCard from '../components/project/ProjectCard.vue';
const apiBaseUri = 'http://127.0.0.1:8000/api/projects/';
export default {
    components: { ProjectCard },
    data: () => ({
        project: null
    }),
    methods: {
        getProject() {
            const endpoint = apiBaseUri + this.$route.params.id;
            axios.get(endpoint)
                .then(res => { this.project = res.data })
                .catch(err => { this.$router.push({ name: 'not-found' }) })
        }
    },
    created() {
        this.getProject();
    }
};
</script>

<template>
    <section class="container py-4">
        <h2 class="py-4">Pagina del Progetto</h2>
        <ProjectCard v-if="project" :project="project" :isDetail="true" />
    </section>
</template>

<style scoped></style>