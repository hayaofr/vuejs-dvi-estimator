<template>
  <div class="text-center border border-light p-5">
    <p class="h4 mb-4">Basic Details</p>

    <div class="form-row mb-4">
      <div class="col">
        <!-- First name -->
        <input
          type="text"
          id="firstname"
          name="firstname"
          class="form-control"
          placeholder="First name"
          v-model="firstname"
        >
      </div>
      <div class="col">
        <!-- Last name -->
        <input
          type="text"
          id="lastname"
          name="lastname"
          class="form-control"
          placeholder="Last name"
          v-model="lastname"
        >
      </div>
    </div>

    <!-- Email -->
    <input
      type="email"
      id="useremail"
      name="email"
      class="form-control mb-4"
      placeholder="E-mail"
      v-model="email"
    >

    <!-- Password -->
    <input
      type="password"
      id="password"
      name="password"
      class="form-control"
      placeholder="Password"
      v-model="password"
      aria-describedby="defaultRegisterFormPasswordHelpBlock"
    >
    <small
      id="defaultRegisterFormPasswordHelpBlock"
      class="form-text text-muted mb-4"
    >At least 8 characters and 1 digit</small>

    <!-- Gender -->
    <select class="browser-default custom-select mb-4" name="gender" v-model="gender">
      <option value disabled selected>Choose gender</option>
      <option value="1">Male</option>
      <option value="2">Female</option>
    </select>

    <input
      type="text"
      id="phone"
      name="phone"
      class="form-control mb-4"
      placeholder="Phone"
      v-model="phone"
    >

    <input
      type="date"
      id="birthdate"
      name="birthdate"
      class="form-control mb-4"
      placeholder="Birth date"
      v-model="birthdate"
    >

    <vue-winwheel :segments="options"/>

    <buttons></buttons>
  </div>
</template>
 
<script>
import Buttons from "./Buttons.vue";

export default {
  
  components: {
    Buttons
  },
  computed: {
    firstname: {
      get() {
        return this.$store.state.firstname;
      },
      set(value) {
        this.$store.commit("setFirstname", value);
      }
    },
    lastname: {
      get() {
        return this.$store.state.lastname;
      },
      set(value) {
        this.$store.commit("setLastname", value);
      }
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      }
    },
    password: {
      get() {
        return this.$store.state.password;
      },
      set(value) {
        this.$store.commit("setPassword", value);
      }
    },
    gender: {
      get() {
        return this.$store.state.gender;
      },
      set(value) {
        this.$store.commit("setGender", value);
      }
    },
    phone: {
      get() {
        return this.$store.state.phone;
      },
      set(value) {
        this.$store.commit("setPhone", value);
      }
    },
    birthdate: {
      get() {
        return this.$store.state.birthdate;
      },
      set(value) {
        this.$store.commit("setBirthdate", value);
      }
    }
  }
};
</script>
