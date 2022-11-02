<template>
  <main class="d-flex justify-content-between align-items-center">
    <div class="cover-text d-flex flex-column">
      <h1>
        ვაკანსიები, რომლებიც შეიძლება საინტერესო იყოს თქვენთვის ან თქვენი მეგობრებისთვის
      </h1>
      <div class="search d-flex flex-row align-items-end pb-1">
        <div>
          <label for="company">რას ეძებთ?</label>
          <input type="text" id="company" placeholder="კომპანია, სამსახური">
        </div>
        <div>
          <label for="place">სად?</label>
          <input type="text" id="place" placeholder="ადგილმდებარეობა">
        </div>
        <div>
          <input type="text" placeholder="ხელფასი  >">
        </div>
        <div>
          <button>ძებნა</button>
        </div>
      </div>
      <div class="categories">
        <a href="">გაყიდვები</a>
        <a href="">ადმინისტრატორი</a>
        <a href="">ვებ დეველოპერი</a>
        <a href="">UI/UX დიზაინერი</a>
        <a href="">გაყიდვების მენეჯერი</a>
      </div>
    </div>
    <div class="cover-image">
      <img src="../assets/images/office.png" alt="office">
    </div>
  </main>
</template>

<script>
export default {
  name: "CoverPage"
}
</script>

<style scoped>
@font-face {
  font-family: firago-regular;
  src: url("../assets/fonts/FiraGo/FiraGO-SemiBold.ttf");
}

@font-face {
  font-family: firago-light;
  src: url("../assets/fonts/FiraGo/FiraGO-Light.ttf");
}

input {
  outline: none;
}

main {
  padding: 0 64px 0 64px;
  height: 500px;
  width: 100%;
}

.cover-text {
  padding-top: 92px;
  height: 100%;
  width: auto;
}

.cover-text h1 {
  white-space: break-spaces;
  font-size: 26px;
  line-height: 52px;
  font-feature-settings: 'cpsp' on;
  color: #424242;
  font-family: firago-regular, serif;
}

.search {
  margin-top: 72px;
  width: 809px;
  height: auto;
}

.search div label{
  font-family: firago-book, serif;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 19px;
}

.search div input {
  border: none;
  padding: 14px 20px 14px 20px;
  gap: 10px;
  height: 56px;
  width: 100%;
  background: #EDEDED;
  border-radius: 10px;
  font-size: 16px;
}

.search div input::placeholder {
  font-family: firago-book, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: rgba(66, 66, 66, 0.5);
}


.search div:nth-of-type(1),
.search div:nth-of-type(2) {
  width: 279px;
}

.search div:nth-of-type(3) {
  width: 138px;
}

.search div:nth-of-type(2),
.search div:nth-of-type(3) {
  margin-left: 10px;
}

.search div:nth-of-type(4) button {
  padding: 14px 20px 14px 20px;
  height: 56px;
  margin-left: 10px;
  border: none;
  background: #FFDD04;
  border-radius: 10px;
  font-size: 16px;
  line-height: 28px;
}

.categories{
  margin-top: 30px;
}
.categories a{
  font-size: 14px;
  font-family: firago-book, serif;
  margin-right: 16px;
  color: rgba(66, 66, 66, 0.5);

}

@media screen and (max-width: 1440px) {
  .cover-text {
    max-width: 724px;
  }


}

</style>