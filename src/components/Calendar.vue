<template>
  <div>
    <DatePicker class="calendarDisplay" v-model="date"> </DatePicker>
    <input type="text" v-model="date" @input="updateValue" />
  </div>
</template>

<script>
  import DatePicker from 'vue2-datepicker';
  import 'vue2-datepicker/index.css';
  export default {
    name: 'calendar',
    components: {
      DatePicker,
    },
    data() {
      return {
        date: null,
      };
    },
    methods: {
      getData() {
        this.$emit('input', this.date);
      },
      updateValue(event) {
        console.log(event.target.value);
        this.$emit('input', event.target.value);
      },
    },
  };
</script>

<style>
  .calendarDisplay {
  }
</style>
