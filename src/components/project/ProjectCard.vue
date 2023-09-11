<script>
export default {
    props: { project: Object },
    computed: {
        projectDate() {
            const date = new Date(this.project.created_at);
            let day = date.getDate();
            let month = date.getMonth();
            const year = date.getFullYear();
            const hours = date.getHours();
            const minute = date.getMinutes();
            const seconds = date.getSeconds();
            day = day < 10 ? '0' + day : day;
            month = month < 10 ? '0' + month : month;
            const projectDate = `${day}/${month}/${year} alle ${hours}:${minute}:${seconds}`;
            return projectDate;
        }
    }
}
</script>
<template>
    <div class="card my-3">
        <div class="card-header">
            <h1>{{ project.title }}</h1>
        </div>
        <div class="card-body">
            <p>{{ project.description }}</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
            <a :href="project.link">{{ project.link }}</a>
            <p>Pubblicato il: <time>{{ projectDate }}</time></p>
        </div>
    </div>
</template>
<style></style>