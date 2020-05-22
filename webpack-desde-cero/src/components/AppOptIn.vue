<template>
  <div class="optin">
    <form>
      <label for="email">Email</label>
      <input
        id="email"
        type="email"
      >
      <input
        type="submit"
        value="Send"
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "AppOptin",
};
</script>

<style lang="scss" scoped>
.optin {
  border: 1px solid;
  form {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input[type="email"] {
      margin: 0.5rem 0;
    }
    input[type="submit"] {
      color: white;
      background-color: black;
    }
  }
}
</style>