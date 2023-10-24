<template>
    <div class="container mt-4">
        <select class="form-select" v-model="selectedOption">
            <option value="" disabled>Select an option</option>
            <option v-for="option in options" :key="option">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        options: {
            type: Array,
            required: true
        },
        modelValue: {
            type: String
        }
    },
    data() {
        return {
            selectedOption: this.modelValue
        };
    },
    watch: {
        selectedOption(newValue) {
            this.$emit('update:modelValue', newValue);
        }
    }
}
</script>

<style scoped>

</style>
