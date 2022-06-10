<template>
  <div class="structure-box">
    <div
      v-for="(structures, index) in sortedStructure"
      :key="index"
      class="structure-item"
      @click="pushStructure(structures)"
    >
      {{ structures.full_name + ' | ' + '#' + structures.idClient }}
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapGetters({
        sortedStructure: 'fake/sorted_table',
      }),
    },
    methods: {
      ...mapActions({
        getStructure: 'fake/gettingFake',
      }),
      pushStructure(structures) {
        this.$emit('pushStructure', structures);
      },
    },
    mounted() {
      let fakePage = { is_fake: 1 };
      this.getStructure(fakePage);
    },
  };
</script>

<style lang="scss" scoped>
  .structure {
    &-box {
      position: absolute;
      background: #141414;
      border: 1px solid #1d1d1d;
      box-sizing: border-box;
      border-radius: 0 0 8px 8px;
      padding: 16px;
      max-width: 277px;
      width: 100%;
      margin-top: 83px;
    }
    &-item {
      font-weight: 400;
      font-size: 14px;
      padding-top: 16px;
      padding-bottom: 16px;
      border-bottom: 1px solid #1d1d1d;
      line-height: 24px;
      cursor: pointer;
      &:first-child {
        padding-top: 0;
      }
      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }
</style>
