<script>
export default {
    props: { project: Object },
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
        <div class="card-footer">
            <a :href="project.link">{{ project.link }}</a>
        </div>
    </div>
</template>
<style></style>