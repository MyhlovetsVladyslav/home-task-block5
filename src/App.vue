<template>
  <div>
    <router-view />
    <CustomSelect :options="['Option 1', 'Option 2', 'Option 3']" v-model="selectedOption" />
    <p>Вибрано: {{ selectedOption }}</p>
  </div>
</template>

<script>
import CustomSelect from './components/CustomSelect.vue';
export default {
  components: {
    CustomSelect
  },
  data() {
    return {
      selectedOption: ''
    };
  }
}
</script>

<style></style>
