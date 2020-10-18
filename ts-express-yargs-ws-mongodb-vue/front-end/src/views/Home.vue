<template>
  <div>
    <h2>{{ title }}</h2>
    <a href="javascript:void(0)" @click="goHello()">Go Hello</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Home.vue",
    };
  },
  methods: {
    goHello() {
      this.$router.push("/hello");
    },
  },
};
</script>