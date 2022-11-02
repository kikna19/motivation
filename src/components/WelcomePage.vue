<template>
  <div class="container-fluid d-flex justify-content-center vh-100">
    <div class="card align-items-center m-auto">
      <img
          class="card-img-top"
          alt="image"
          src="../assets/images/Ellipse104.png">
      <div class="card-body d-flex flex-column  align-items-center">
        <p class="card-text">
          ჩვენ ვეხმარებით ადამიანებს დასაქმებაში და მეტი შემოსავლების მიღებაში
        </p>
        <router-link to="home" class="link">
          <button type="button" class="btn">
            შემდეგი
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WelcomePage",
}
</script>


<style scoped>

@font-face {
  font-family: 'firago';
  src: url("../assets/fonts/FiraGo/FiraGO-Medium.ttf")
}

.card {
  margin-top: 72px;
  width: auto;
  border: none;
  padding: 0;
}

.card-img-top {
  width: 400px;
  height: 400px;
  object-fit: cover;
}


.card-body {
  padding: 0;
  margin-top: 64px;
}

.card-text {
  width: 546px;
  height: auto;
  font-family: firago, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  font-feature-settings: 'case' on;
  color: #424242;
  margin: 0;
}

.btn {
  height: 60px;
  width: 442px;
  border-radius: 20px;
  background: #FFDD04;
  font-family: firago, sans-serif;
  margin-top: 52px;
  border: none;
  font-weight: 600;
}


.btn:hover {
  background: #FFDD04 !important;
  color: black !important;
}


@media (max-width: 650px) {
  .card-img-top {
    width: 390px;
    height: 390px;
  }

  .card-body {
    margin-top: 68px;
    padding: 0;
    width: 500px;
  }

  .card-text {
    font-size: 22px;
    line-height: 30px;
    width: 100%;
  }

  .btn {
    margin-top: 45px;
  }

}


@media (max-width: 600px) {
  .card-img-top {
    width: 385px;
    height: 385px;
  }

  .card-body {
    width: 450px;
  }

  .btn {
    height: 60px;
    width: 400px;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
  }

}


@media (max-width: 550px) {
  .card-img-top {
    width: 375px;
    height: 375px;
  }

  .card-body {
    width: 430px;
  }

  .card-text {
    font-size: 23px;
  }


}


@media (max-width: 500px) {
  .card-img-top {
    width: 350px;
    height: 350px;
  }

  .card-body {
    width: 390px;
  }

  .card-text {
    font-size: 19px;
    line-height: 27px;
  }

  .btn {
    height: 55px;
    width: 370px;
    font-size: 17px;
  }
}

@media (max-width: 428px) {
  .card-img-top {
    width: 328px;
    height: 328px;
  }

  .card-body {
    width: 368px;
  }

  .card-text {
    font-size: 18px;
    line-height: 28px;
  }

  .btn {
    width: 368px;
    font-size: 16px;
  }

}

@media (max-width: 400px) {
  .card-img-top {
    width: 318px;
    height: 318px;
  }

  .card-body {
    width: 348px;
  }


  .btn {
    width: 348px;
    font-size: 15px;
  }

}

@media (max-width: 380px) {
  .card-img-top {
    width: 300px;
    height: 300px;
  }

  .card-body {
    width: 328px;
  }

  .btn {
    height: 50px;
    width: 318px;
  }

}

@media (max-width: 350px) {
  .card-img-top {
    width: 280px;
    height: 280px;
  }

  .card-body {
    width: 318px;
  }

  .card-text {
    font-size: 17px;
  }

  .btn {
    width: 280px;
  }

}
@media (max-width: 310px) {
  .card-img-top {
    width: 260px;
    height: 260px;
  }

  .card-body {
    width: 288px;
  }

  .card-text {
    font-size: 16px;
  }

  .btn {
    width: 260px;
  }

}

</style>