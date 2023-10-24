<template>
    <main>
        <h1>Настройки</h1>
        <button @click="changeValue">Авторизуватись</button>
        <section>
            <button @click="router.push({ name: 'settings-profile' })">
                Открыть настройки профиля
            </button>
        </section>
        <section>
            <router-view />
        </section>
        <footer>
            <router-link :to="{ name: 'home' }">
                На главную
            </router-link>
        </footer>
    </main>
</template>
<script>
export default {
    methods: {
        changeValue() {
            this.$route.meta.isAuthenticated = true;
        }
    }
};
</script>
<script setup>
import {
    useRouter
} from 'vue-router'
const router = useRouter()
</script>