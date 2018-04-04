<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Step 1</router-link> |
      <router-link to="/2">Step 2</router-link>
    </div>
    <section class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  
}
</script>

