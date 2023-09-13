<script>
import axios from 'axios';
const endpoint = 'http://127.0.0.1:8000/api/contact-message';
const emptyForm = { email: '', subject: '', message: '' };
export default {
    data: () => ({ form: emptyForm }),
    methods: {
        sendForm() {
            axios.post(endpoint, this.form)
                .then(() => { this.form = emptyForm })
                .catch(err => { console.error(err) })
        }
    }
};
</script>

<template>
    <div class="container">
        <h2 class="my-5">Contattaci</h2>
        <form @submit.prevent="sendForm">
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="name@example.com"
                    v-model.trim="form.email">
                <label for="email">Email <sup class="text-danger">*</sup></label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="subject" v-model.trim="form.subject">
                <label for="subject">Oggetto della Mail <sup class="text-danger">*</sup></label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" id="message" name="message" rows="5" style="height: 150px"
                    v-model.trim="form.message"></textarea>
                <label for="message">Contenuto <sup class="text-danger">*</sup></label>
            </div>
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary">Invia</button>
            </div>
        </form>
    </div>
</template>
    
<style scoped></style>