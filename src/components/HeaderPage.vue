<template>
  <header class="d-flex align-items-center justify-content-between">
    <h1>
      Davit Kenchadze
    </h1>
    <div class="nav-items">
      <a nohref>ვაკანსიის განთავსება</a>
      <a nohref>მოლაპარაკებების ომი</a>
      <a nohref>ფასები</a>
      <router-link to="login">
        <a>
          <button class="bg-warning">შესვლა</button>
        </a>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderPage"
}
</script>

<style scoped>
@font-face {
  font-family: firago-regular;
  src: url("../assets/fonts/FiraGo/FiraGO-SemiBold.ttf");
}

header {
  padding: 0 64px 0 64px;
  height: 82px;
  width: 100%;
  border-bottom: 1px solid #F2F2F2;
}


h1 {
  font-family: firago-regular, serif;
  font-size: 24px;
}

.nav-items a {
  cursor: pointer;
}

.nav-items a:nth-of-type(1),
.nav-items a:nth-of-type(2),
.nav-items a:nth-of-type(3) {
  margin-right: 30px;
  font-size: 16px;
  font-family: firago-regular, serif;
}

.nav-items a button {
  border: none;
  background: #FFDD04;
  border-radius: 10px;
  font-size: 14px;
  font-family: firago-regular, serif;
  padding: 7px 19px 7px 19px;
}

</style>