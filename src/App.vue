<template>
  <section style="background:#efefe9;">
    <div class="container">
      <div class="board">
        <!-- Navigation Area (Circular Tabs) -->
        <navbar></navbar>
        <!-- End Navigation Area (Circular Tabs) -->

        <!-- Content Area -->
        <div class="tab-content">
          <!-- Routed view  -->
          <router-view></router-view>
        </div>
        <!-- End Content Area -->
      </div>

      <!-- For Debugging: show our formData as it is being typed -->
      <pre>{{etat}}</pre>
    </div>
  </section>
</template>

<script>
import Navbar from "./components/navbar/Navbar";

export default {
  name: "app",
  components: {
    Navbar
  },
  computed: {
    etat: {
      get() {
        return this.$store.state;
      }
    }
  }
};
</script>

<style>

</style>
