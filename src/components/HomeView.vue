<template>
    <main>
        <h1>Главная</h1>
        <section>
            <ul>
                <li>
                    <router-link :to="{ name: 'settings' }">
                        Настройки
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'user', params: { id: 79 } }">
                        Пользователь 79
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'admin' }">Админисратор</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'public' }">Публик</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'logined' }">Юзер</router-link>
                </li>
            </ul>
        </section>
        <button @click="getAdmin">Админисратор</button>
        <button @click="getUser">Пользователь</button>
        <br>
        <hr>
        <form @submit.prevent="submitForm">
            <label for="email">Email:</label>
            <input type="text" id="email" autocomplete="email" v-model="email" required>
            <span v-show="errors.messageEmail" class="error">{{ errors.messageEmail }}</span>
            <p>Значення введення: {{ email }}</p>
            <button type="submit">Відправити</button>
        </form>
        <hr>
        <label for="text-input">Текстове поле:</label>
        <input type="text" id="text-input" v-model="textValue" />
        <p>Значення текстового поля: {{ textValue }}</p>

        <label for="number-input">Числове поле:</label>
        <input type="number" id="number-input" v-model.number="numberValue" />
        <p>Значення числового поля: {{ numberValue }}</p>

        <label for="checkbox-input">Чекбокс:</label>
        <input type="checkbox" id="checkbox-input" v-model="checkboxValue" />
        <p>Стан чекбоксу: {{ checkboxValue }}</p>
        <button @click="updateModel">Оновити значення моделі</button>
        <hr>
        <input type="number" id="counter" v-model="counterValue">
        <button @click="decrement">Зменшити</button>
        <button @click="increment">Збільшити</button>
        <hr>
        <input type="text" id="isActive" v-model="isActive">
        <span v-if="isActive">Hello,World!</span>
        <span v-else>Hello,Guys!</span>
        <button @click="update">Change</button>
        <hr>
        <input type="text" id="changeclass" v-model="changeClass">
        <span :class="changeClass ? 'first' : 'second'">Hello,World!</span>
        <button @click="change">Change</button>
        <hr>


    </main>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            errors: {
                messageEmail: ''
            },
            textValue: '',
            numberValue: 0,
            checkboxValue: false,
            counterValue: 0,
            isActive: false,
            changeClass: false
        }
    },
    methods: {
        getAdmin() {
            this.$route.meta.role = 'admin';
        },
        getUser() {
            this.$route.meta.role = 'user';
        },
        submitForm() {
            this.errors = {
                messageEmail: this.validateEmail(this.email) ? '' : 'Введіть коректне значення'
            }
            if (this.errors.messageEmail === '') {
                console.log('Дані були успішно відправлені:', this.email);
            }
        },
        validateEmail(email) {
            const symbol = /^\S{5,}@\S+\.\S+$/;
            return symbol.test(email);
        },
        updateModel() {
            this.textValue = 'Hello World!';
            this.numberValue = 7;
            this.checkboxValue = true;
        },
        increment() {
            this.counterValue++
        },
        decrement() {
            this.counterValue--
        },
        update() {
            this.isActive = !this.isActive
        },
        change() {
            this.changeClass = !this.changeClass
        }
    }
}
</script>

<style>
.first {
    color: brown;
}

.second {
    color: blue;
}
</style>