<template>
  <div id="app">
    <div class="titlebar-area">
      <span class="titlebar-text">Electron 42 + Vue 3 + Vite</span>
    </div>
    <div class="content">
      <div class="info-panel">
        <p>Electron 版本: {{ versions.electron }}</p>
        <p>Node.js 版本: {{ versions.node }}</p>
        <p>Chrome 版本: {{ versions.chrome }}</p>
        <p>操作系统: {{ platform }}</p>
      </div>
      <p>Welcome to your Electron app!</p>
      <button @click="count++">Count is: {{ count }}</button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'App',
  setup() {
    const count = ref(0)
    const versions = ref({ electron: '', node: '', chrome: '' })
    const platform = ref('')

    onMounted(() => {
      if (window.electronAPI) {
        versions.value = window.electronAPI.versions
        platform.value = window.electronAPI.platform
      }
    })

    return { count, versions, platform }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.titlebar-area {
  height: 32px;
  width: 100%;
  -webkit-app-region: drag;
  display: flex;
  align-items: center;
  padding-left: 12px;
  background: #ffffff;
}

.titlebar-text {
  color: #000000;
  font-size: 13px;
  user-select: none;
}

.content {
  flex:1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.info-panel {
  background: #f5f5f5;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px 25px;
  margin-bottom: 20px;
  text-align: left;
  min-width: 300px;
}

.info-panel p {
  margin: 8px 0;
  font-size: 14px;
  color: #333;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
