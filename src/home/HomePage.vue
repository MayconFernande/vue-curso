<template>
  <div class="home">
    <div>
      <img
        class="robot"
        src="@/assets/robot-home-copy.png"
        aria-hidden="true"
        alt="Robot"
      >
    </div>
    <div class="get-started">
      <router-link to="/build">
        Get started
      </router-link> building your first robot!
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomePage',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
    text-align: center;
}

.robot {
  height: 500px;
}

.get-started {
    padding-top: 20px;
    font-size: 32px;
}
</style>
