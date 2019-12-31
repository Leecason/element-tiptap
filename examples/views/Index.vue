<template>
  <el-container>
    <el-header class="header">
      <div class="header__left">
        <img
          src="~examples/assets/logo.png"
          class="logo"
        >
      </div>

      <div class="header__right">
        <router-link
          :to="{ name: 'Basic' }"
          v-slot="{ navigate, isExactActive }"
        >
          <span
            :class="{ 'router-link--active': isExactActive }"
            class="router-link"
            @click="navigate"
          >
            Basic
          </span>
        </router-link>

        <router-link
          :to="{ name: 'MenuBubble' }"
          v-slot="{ navigate, isActive }"
        >
          <span
            :class="{ 'router-link--active': isActive }"
            class="router-link"
            @click="navigate"
          >
            Menu Bubble
          </span>
        </router-link>

        <router-link
          :to="{ name: 'Table' }"
          v-slot="{ navigate, isActive }"
        >
          <span
            :class="{ 'router-link--active': isActive }"
            class="router-link"
            @click="navigate"
          >
            Table
          </span>
        </router-link>

        <router-link
          :to="{ name: 'Event' }"
          v-slot="{ navigate, isActive }"
        >
          <span
            :class="{ 'router-link--active': isActive }"
            class="router-link"
            @click="navigate"
          >
            Event
          </span>
        </router-link>

        <router-link
          :to="{ name: 'Output' }"
          v-slot="{ navigate, isActive }"
        >
          <span
            :class="{ 'router-link--active': isActive }"
            class="router-link"
            @click="navigate"
          >
            Output
          </span>
        </router-link>
      </div>
    </el-header>

    <el-main>
      <router-view />
    </el-main>

    <div class="badge">
      <a
        href="https://github.com/Leecason/element-tiptap"
        target="_blank"
        class="badge__inner"
      >
        <span>
          <v-icon name="brands/github" scale="2" />
        </span>
      </a>
    </div>
  </el-container>
</template>

<script>
import 'vue-awesome/icons/brands/github';

export default {
  name: 'index',
};
</script>

<style lang="scss">
.header {
  background: linear-gradient(135deg, rgb(0, 103, 245), rgb(13, 197, 231) 75%);
  display: flex;
  justify-content: space-between;
  height: 30vh !important;
  padding: 20px 18vw;

  &__left {
    align-items: flex-start;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    .logo {
      height: 60px;
      margin-bottom: 20px;
    }
  }

  &__right {
    align-items: flex-start;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;

    .router-link {
      color: #fff;
      cursor: pointer;
      font-weight: 700;
      margin: 15px;
      text-transform: uppercase;

      &--active {
        color: #303133;
      }
    }
  }
}

.el-main {
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 50px;
}

.badge {
  font-size: 14px;
  height: 150px;
  line-height: 1.3;
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;
  width: 150px;
  z-index: 100;

  &__inner {
    background: #409eff;
    color: #fff;
    cursor: pointer;
    display: block;
    left: -35%;
    padding: .5em 0;
    position: relative;
    transform: rotate(45deg);
    top: 20%;
    width: 200%;
  }
}
</style>
