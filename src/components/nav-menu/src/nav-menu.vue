<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/shu.svg" alt="logo" />
      <span v-if="!collapse" class="title">松鼠技术社区</span>
    </div>
    <el-menu default-active="2" class="el-menu-vertical" :collapse="collapse">
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- <i v-if="item.icon" :class="item.icon"></i> -->
              <el-icon><location /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item-group>
                <el-menu-item :index="subitem.id + ''">
                  <!-- <i v-if="subitem.icon" :class="subitem.icon"></i> -->
                  <el-icon><location /></el-icon>
                  <span>{{ subitem.name }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <!-- <i v-if="item.icon" :class="item.icon"></i> -->
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Location } from '@element-plus/icons-vue'
import { useStore } from '@/store'
export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)
    return {
      userMenus
    }
  },
  components: {
    Location
  }
})
</script>

<style lang="less" scoped>
.nav-menu {
  height: 100%;
  background-color: orange;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 6px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #b28354 !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
