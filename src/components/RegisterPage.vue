<template>
  <section class="d-flex justify-content-between align-items-start">
    <div>
      <img src="./../assets/images/register.png" alt="register">
    </div>
    <div class="log-in d-flex flex-column">
      <h3>შესვლა</h3>
      <label for="email">სახელი და გვარი</label>
      <input type="text" id="email" placeholder="სახელი და გვარი">
      <label for="email">მობილური</label>
      <input type="text" id="email" placeholder="xxx xx xx xx">
      <label for="email">ელ.ფოსტა</label>
      <input type="text" id="email" placeholder="Motivation@Gmail.Com">
      <label for="email">პაროლი</label>
      <input type="text" id="email" placeholder="პაროლი">
      <label for="password">გაიმეორეთ პაროლი</label>
      <input type="text" id="password" placeholder="გაიმეორეთ პაროლი">
      <div class="register d-flex flex-row justify-content-center">
        <span>გაქვთ ანგარიში?</span>
        <router-link to="login">
          <a>შესვლა</a>
        </router-link>
      </div>
      <button>რეგისტრაცია</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "RegisterPage"
}
</script>

<style scoped>

@font-face {
  font-family: firago-regular;
  src: url("../assets/fonts/FiraGo/FiraGO-Regular.ttf");
}

@font-face {
  font-family: firago-bold;
  src: url("../assets/fonts/FiraGo/FiraGO-Bold.ttf");
}

section {
  height: 830px;
  padding: 0 64px 0 21px;
}

.log-in {
  margin-top: 57px;
  width: auto;
}

.log-in h3 {
  width: 100%;
  text-align: center;
  font-family: firago-bold, serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  font-feature-settings: 'case' on;
  color: #424242;
}

.log-in label {
  font-family: firago-regular, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #424242;
  margin-top: 32px;
}

.log-in input {
  outline: none;
  margin-top: 10px;
  border: none;
  height: 56px;
  width: 472px;
  border-radius: 10px;
  padding: 0 32px 0 32px;
  gap: 10px;
  background: #EDEDED;
}

.log-in .register {
  margin-top: 32px;
  font-family: firago-regular, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #424242;
}

.log-in .register a {
  text-decoration: none;
  margin-left: 16px;
  color: #31319D;
}

.log-in button {
  margin-top: 22px;
  height: 56px;
  width: 472px;
  background: #FFDD04;
  border-radius: 10px;
  border: none;
  font-family: firago-regular, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #424242;
}

</style>