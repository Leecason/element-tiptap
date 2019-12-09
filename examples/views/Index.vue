<template>
  <el-container>
    <el-header class="header">
      <div class="header__left">
        <img
          src="~examples/assets/logo.png"
          class="logo"
        >

        <a
          href="https://github.com/Leecason/el-tiptap"
          target="_blank"
          class="github-link"
        >
          <font-awesome-icon :icon="['fab', 'github']" size="2x" />
        </a>
      </div>

      <div class="header__right">
        <router-link
          :to="{ name: 'Basic' }"
          v-slot="{ navigate, isExactActive }"
          class="action"
        >
          <el-button
            :type="isExactActive ? 'primary' : ''"
            @click="navigate"
          >
            Basic
          </el-button>
        </router-link>

        <router-link
          :to="{ name: 'MenuBubble' }"
          v-slot="{ navigate, isActive, isExactActive }"
          class="action"
        >
          <el-button
            :type="isActive ? 'primary' : ''"
            @click="navigate"
          >
            Menu Bubble
          </el-button>
        </router-link>

        <router-link
          :to="{ name: 'Output' }"
          v-slot="{ navigate, isActive, isExactActive }"
          class="action"
        >
          <el-button
            :type="isActive ? 'primary' : ''"
            @click="navigate"
          >
            Output
          </el-button>
        </router-link>
      </div>
    </el-header>

    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

export default {
  name: 'index',
};
</script>

<style lang="scss">
.el-container {

}

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

    .github-link {
      color: #fff;
      transition: color .3s ease-in-out;
      margin-top: 20px;

      &:hover {
        color: #409EFF;
      }
    }
  }

  &__right {
    align-items: flex-start;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;

    .action {
      margin: 10px;
    }
  }
}

.el-main {
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding: 50px;
}
</style>
