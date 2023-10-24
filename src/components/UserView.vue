<template>
    <main>
        <h1>Пользователь ID {{ id }}</h1>
        <section>
            <router-link :to="{ name: 'home' }">
                На главную
            </router-link>
        </section>
    </main>
</template>
  
<script>
export default {
    props: ['id'], 

    mounted() {
        console.log('User ID:', this.id);
    }
};
</script>