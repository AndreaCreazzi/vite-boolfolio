<script>
import ProjectCard from './ProjectCard.vue';
export default {
    props: { projects: Array },
    components: { ProjectCard }
}
</script>
<template>
    <section id="project-list">
        <h2>Il miei Progetti</h2>
        <div v-if="projects.length">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <h3 v-else>Non ci sono Progetti</h3>
    </section>
</template>
<style></style>