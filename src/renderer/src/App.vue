<template>
  <div id="app">
    <div class="titlebar-area">
      <span class="titlebar-text">Electron 42 + Vue 3 + Vite</span>
    </div>
    <div class="content">
      <p>Welcome to your Electron app!</p>
      <button @click="count++">Count is: {{ count }}</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'App',
  setup() {
    const count = ref(0)
    return { count }
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
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}
</style>
