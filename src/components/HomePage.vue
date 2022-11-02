<template>
  <cover-page></cover-page>
  <category-page></category-page>
  <section class="trainings">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h4 class="h4">ტრენინგები</h4>
        </div>
        <div class="col-6 col-md-3">
          <a href="#" class="training">
            ეროვნული გამოცდები
          </a>
        </div>
        <div href="#" class="col-6 col-md-3">
          <a class="training">
            სკოლის საგნები
          </a>
        </div>
        <div href="#" class="col-6 col-md-3">
          <a class="training">
            ინგლისური
          </a>
        </div>
        <div href="#" class="col-6 col-md-3">
          <a class="training">
            სხვა უცხო ენები
          </a>
        </div>
        <div href="#" class="col-6 col-md-3">
          <a class="training">
            მარკეტინგი
          </a>
        </div>
        <div href="#" class="col-6 col-md-3">
          <a class="training">
            კომპიუტერული ტექნოლოგია
          </a>
        </div>
        <div href="#" class="col-6 col-md-3">
          <a class="training">
            უნარ-ჩვევები
          </a>
        </div>
        <div href="#" class="col-6 col-md-3">
          <div class="training">
            სხვადასხვა
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import CategoryPage from "@/components/CategoryPage";
import CoverPage from "@/components/CoverPage";
export default {
  name: "HomePage",
  components: {
    CoverPage,
    CategoryPage,
  },
}
</script>

<style scoped>
@font-face {
  font-family: firago;
  src: url("../assets/fonts/FiraGo/FiraGO-Bold.ttf");
}

:root {
  --First-Color: #424242;
}

.training {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 74px;
  border: 1px solid rgba(66, 66, 66, 0.1);
  border-radius: 10px;
  font-family: firago, sans-serif;
  line-height: 21px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  text-transform: lowercase;
  font-feature-settings: 'case' on;
  transition: 0.3s;
  color: var(--First-Color);
  text-decoration: none;
}


.training:hover {
  color: var(--First-Color);
}

h4 {
  font-family: firago, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  font-feature-settings: 'case' on;
  color: #424424;
  margin-bottom: 10px;
}

.row {
  gap: calc(var(--bs-gutter-x) * 1) 0;
}

@media (max-width: 768px) {
  .row {
    gap: 10px 0;
  }

  h4 {
    margin-bottom: 26px;
  }

  .trainings .container .row .col-6:nth-of-type(1),
  .trainings .container .row .col-6:nth-of-type(3),
  .trainings .container .row .col-6:nth-of-type(5),
  .trainings .container .row .col-6:nth-of-type(7) {
    padding-left: 5px;
  }

  .trainings .container .row .col-6:nth-of-type(2),
  .trainings .container .row .col-6:nth-of-type(4),
  .trainings .container .row .col-6:nth-of-type(6),
  .trainings .container .row .col-6:nth-of-type(8) {
    padding-right: 5px;
  }

  .training {
    font-size: 14px;
    line-height: 17px;
  }
}

</style>