<template>
  <li>
    <router-link class-active="sidebar__link-active" :to="{ name: link.name }">
      <img
        :src="require(`@/assets/img/sidebar_${link.name}.png`)"
        :alt="`sidebar_${link.name}`"
        class="sidebar__icon"
      />

      <div class="sidebar__name">{{ link.name }}</div>
    </router-link>
    <div class="sidebar__link-hide">
      <div
        v-for="(children, index) in link.children"
        :key="index"
        class="sidebar__link_children"
      >
        <router-link
          class-active="sidebar__children-active"
          :to="{ name: children.name }"
        >
          <div>{{ children.name }}</div>
        </router-link>
      </div>
    </div>
  </li>
</template>
<script>
  export default {
    data() {
      return {
        showChildren: false,
      };
    },
    props: {
      link: Object,
    },
  };
</script>
<style lang="scss" scoped>
  .sidebar__link-hide {
    transform: translateY(-80px);
    height: 0;
    z-index: -10;
  }
  .sidebar__link {
    font-size: 14px;
    display: flex;
    flex-direction: column;
    color: #fff;
    list-style: none;
    margin-bottom: 8px;
    width: 100%;
    @media screen and (max-width: $desktop) and (min-width: $table) {
      width: 56px;
    }
    a {
      font-size: 14px;
      padding: 12px 0;
      color: #fff;
      text-decoration: none;
      display: flex;
      align-items: center;
      @media screen and (max-width: $desktop) and (min-width: $table) {
        div {
          display: none;
        }
        margin: 5px 0;
        width: 100%;
      }
    }

    .sidebar__link_children {
      @media screen and (max-width: $table) {
        display: none;
      }
      padding-left: 60px;
      .router-link-exact-active,
      .router-link-active {
        background: inherit;
        color: #36a503;
      }
    }
    .router-link-exact-active,
    .router-link-active {
      background: #36a503;
      border-radius: 12px;
      width: 100%;
      & + .sidebar__link-hide {
        transform: translateY(0);
        z-index: 1;
        transition: 0.4s;
        height: auto;
        @media screen and (max-width: $desktop) and (min-width: $mobile) {
          height: 0;
        }
      }
    }
  }
  .sidebar__icon {
    display: flex;
    margin: 0 18px;
  }
  .sidebar__name {
    @media screen and (max-width: $table) {
      display: block !important;
    }
  }
</style>
