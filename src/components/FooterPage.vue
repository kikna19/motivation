<template>
  <footer class="footer">
    <div class="container-fluid content d-flex align-items-center justify-content-start flex-column">
      <div class="top-text">
        <span>
          გამოიწერე, მიიღე ყველა ვაკანსიის შეტყობინება და დაეხმარე შენს მეგობრებს დასაქმებაში.
        </span>
      </div>
      <div class="row email">
        <input type="text" placeholder="ელ. ფოსტა">
        <button class="btn">
        <span>
          გამოწერა
        </span>
        </button>
      </div>
      <div class="row icons justify-content-between">
        <button class="btn">
          <img
              alt="facebook"
              src="../assets/images/facebook-app-symbol2.png">
        </button>
        <button class="btn">
          <img
              alt="linkedin"
              src="../assets/images/linkedin2.png">
        </button>
        <button class="btn">
          <img
              alt="youtube"
              src="../assets/images/youtube2.png">
        </button>
        <button class="btn">
          <img
              alt="tiktok"
              src="../assets/images/tik-tok2.png">
        </button>
      </div>

      <div class="row bottom-text">
        <span>© 2022 ყველა უფლება დაცულია</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
}
</script>

<style scoped>

@font-face {
  font-family: firago;
  src: url("../assets/fonts/FiraGo/FiraGO-Regular.ttf");
}

.footer {
  margin-top: 106px;
  padding: 74px 44px 74px 44px;
  background: #31319D;
}
.email,
.icons,
.bottom-text {
  margin-top: 60px;
}

.top-text {
  height: 33px;
}


.top-text span {
  font-family: firago, serif;
  font-style: normal;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  text-align: center;
  color: white;
}

.email {
  width: 673px;
  height: 56px;
  gap: 16px;
}

.email input {
  height: 100%;
  width: calc(100% - 200px);
  border-radius: 10px;
  border: none;
  outline: none;
  background: #EDEDED;
  padding-left: 27px;
}

.email input::placeholder {
  font-family: firago, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  color: #424242;
}

.email button {
  height: 100%;
  width: 184px;
  border-radius: 10px;
  background: #FFDD04;
  border: none;
}

.email button:hover {
  background: #FFDD04;
}

.email button span {
  width: 78px;
  height: 19px;
  font-family: firago, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #222222;
}


.icons {
  width: 308px;
  height: 50px;
}

.icons button {
  text-align: center;
  background: #EDEDED;
  height: 50px;
  width: 50px;
  border-radius: 100%;
  border: none;
}

.icons button:hover {
  background: #EDEDED;
}

.bottom-text {
  align-items: center;
  text-align: center;
  height: 58px;
}

.bottom-text span {
  font-family: firago, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.5);
}
@media (max-width: 1050px) {

  .content {
    height: auto;
    width: auto;
    padding: 0;
    margin: 0;
  }

  .top-text {
    text-align: center;
    margin: 0;
    padding: 0;
    width: 100%;
    height: auto;
    border: none;
  }

  .top-text span {
    font-size: 18px;
    line-height: 31px;
    text-align: center;
  }

  .email button {
    width: 173px;
  }

  .email button span {
    font-size: 17px;
    line-height: 17px;
  }

  .icons {
    margin-top: 70px;
    width: 320px;
    height: auto;
  }

  .icons button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 52px;
    width: 52px;
    padding: 0;
  }

  .icons button img {
    height: 25px;
    width: 25px;
  }

  .bottom-text {
    margin-top: 55px;
    height: 49px;
    width: 100%;
  }

  .bottom-text span {
    font-size: 19px;
    line-height: 17px;
  }
}
@media (max-width: 950px) {
  .footer {
    height: 550px;
    padding-left: 120px;
    padding-right: 120px;
  }


  .email {
    margin: 60px 0 0 0;
    width: 100%;
    height: 55px;
  }

  .email input {
    width: calc(100% - 194px);
    font-size: 17px;
    line-height: 17px;
  }

  .bottom-text span {
    font-size: 18px;
  }
}



@media (max-width: 850px) {
  .footer {
    height: 500px;
    padding: 79px 90px 14px 90px;
  }

  .top-text span {
    font-size: 18px;
    line-height: 29px;
    text-align: center;
  }

  .email {
    margin: 50px 0 0 0;
    height: 52px;
  }

  .email input {
    width: calc(100% - 174px);
  }

  .email button {
    width: 153px;
  }


  .icons {
    margin-top: 60px;
  }

  .bottom-text {
    margin-top: 55px;
    height: 49px;
    width: 100%;
  }

}

@media (max-width: 750px) {
  .footer {
    height: 450px;
    padding: 59px 70px 14px 70px;
  }


  .top-text span {
    font-size: 17px;
    line-height: 28px;
  }

  .email {
    height: 49px;
  }

  .email input {
    width: calc(100% - 154px);
    font-size: 17px;
  }

  .email input::placeholder {
    font-size: 17px;
  }

  .email button {
    width: 133px;
  }

  .email button span {
    font-size: 17px;
  }

  .icons {
    margin-top: 60px;
    width: 280px;
    height: auto;
  }

  .icons button {
    height: 47px;
    width: 47px;
  }

  .icons button img {
    height: 23px;
    width: 23px;
  }

  .bottom-text {
    margin-top: 47px;
    height: 41px;
  }

  .bottom-text span {
    font-size: 17px;
  }
}



@media (max-width: 650px) {
  .footer {
    height: 400px;
    padding-left: 40px;
    padding-right: 40px;
  }

  .top-text span {
    font-size: 16px;
    line-height: 25px;
  }

  .email {
    height: 46px;
  }

  .email input {
    width: calc(100% - 134px);
    font-size: 17px;
  }

  .email input::placeholder {
    font-size: 16px;
  }

  .email button {
    width: 113px;
  }

  .email button span {
    font-size: 16px;
  }

  .icons {
    margin-top: 50px;
    width: 250px;
  }

  .icons button {
    height: 42px;
    width: 42px;
  }

  .icons button img {
    height: 20px;
    width: 20px;
  }

  .bottom-text {
    margin-top: 42px;
    height: 36px;
  }

  .bottom-text span {
    font-size: 16px;
  }
}



@media (max-width: 550px) {
  .footer {
    height: 370px;
    padding-left: 35px;
    padding-right: 35px;
  }


  .top-text span {
    font-size: 15px;
  }

  .email {
    height: 43px;
  }

  .email input {
    width: calc(100% - 124px);
    font-size: 15px;
  }

  .email input::placeholder {
    font-size: 15px;
  }

  .email button {
    width: 103px;
  }

  .email button span {
    font-size: 15px;
  }

  .icons {
    margin-top: 45px;
    width: 220px;
    height: auto;
  }

  .icons button {
    height: 37px;
    width: 37px;
  }

  .icons button img {
    height: 18px;
    width: 18px;
  }

  .bottom-text {
    margin-top: 33px;
  }

  .bottom-text span {
    font-size: 15px;
  }
}


@media (max-width: 435px) {
  .footer{
    height: auto;
    padding-left: 30px;
    padding-right: 30px;
  }

  .top-text span {
    font-size: 14px;
    line-height: 21px;
  }

  .email {
    margin-top: 40px;
    height: 38px;
  }

  .email input {
    font-size: 14px;
  }

  .email input::placeholder {
    font-size: 14px;
  }


  .email button span {
    font-size: 14px;
  }

  .icons {
    margin-top: 40px;
    width: 176px;
  }

  .icons button {
    height: 32px;
    width: 32px;
  }

  .icons button img {
    height: 16px;
    width: 16px;
  }

  .bottom-text {
    margin-top: 25px;
    height: 30px;
  }

  .bottom-text span {
    font-size: 14px;
  }
}

@media (max-width: 400px) {
  .top-text span {
    font-size: 13px;
    line-height: 22px;
  }

  .email input {
    width: calc(100% - 114px);
    font-size: 13px;
  }

  .email input::placeholder {
    font-size: 13px;
  }

  .email button {
    width: 93px;
  }

  .email button span {
    font-size: 13px;
  }

}

@media (max-width: 361px) {
  .footer {
    padding: 39px 20px 14px 20px;
  }
}


</style>