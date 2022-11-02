<template>
  <section class="d-flex flex-column align-items-start">
    <h3>კატეგორიები</h3>
    <div class="categories d-flex flex-row flex-wrap">
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-1.png" alt="group-1">
        <h2>ნახევარი განაკვეთი</h2>
        <span>(120 ვაკანსია)</span>
      </div>
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-2.png" alt="group-2">
        <h2>სრული განაკვეთი</h2>
        <span>(110 ვაკანსია)</span>
      </div>
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-3.png" alt="group-3">
        <h2>მოიცავს ტრენინგს</h2>
        <span>(110 ვაკანსია)</span>
      </div>
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-4.png" alt="group-4">
        <h2>გამოცდილების გარეშე</h2>
        <span>(120 ვაკანსია)</span>
      </div>
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-5.png" alt="group-5">
        <h2>სტაჟირება</h2>
        <span>(120 ვაკანსია)</span>
      </div>
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-6.png" alt="group-6">
        <h2>ერთი გასაუბრება</h2>
        <span>(120 ვაკანსია)</span>
      </div>
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-7.png" alt="group-7">
        <h2>სტუდენტებისთვის</h2>
        <span>(120 ვაკანსია)</span>
      </div>
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-8.png" alt="group-8">
        <h2>სწრაფად დაწყება</h2>
        <span>(120 ვაკანსია)</span>
      </div>
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-9.png" alt="group-9">
        <h2>დისტანციური</h2>
        <span>(120 ვაკანსია)</span>
      </div>
      <div class="category d-flex align-items-center flex-column justify-content-start">
        <img src=".././assets/images/Group-10.png" alt="group-10">
        <h2>CV-ის გარეშე</h2>
        <span>(120 ვაკანსია)</span>
      </div>
    </div>
  </section>
  <home-page></home-page>
</template>

<script>
import HomePage from "@/components/HomePage";

export default {
  name: "CategoryPage",
  components:{
    HomePage
  }
}
</script>

<style scoped>

section {
  margin: 106px 64px 106px 64px;
}

h3 {
  font-family: 'FiraGO', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  text-transform: lowercase;
  font-feature-settings: 'case' on;
  color: #424242;
}

.categories .category:nth-of-type(2),
.categories .category:nth-of-type(3),
.categories .category:nth-of-type(4),
.categories .category:nth-of-type(5),
.categories .category:nth-of-type(7),
.categories .category:nth-of-type(8),
.categories .category:nth-of-type(9),
.categories .category:nth-of-type(10) {
  margin-left: 31px;
}

.categories .category {
  margin-top: 31px;
}

.category {
  border: 1px solid rgba(66, 66, 66, 0.1);
  border-radius: 10px;
  height: 190px;
  width: 237px;
  padding-top: 26px;

}

.category h2 {
  font-family: 'FiraGO', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  font-feature-settings: 'case' on;
  color: #424242;
  margin-top: 20px;
}


.category span {
  font-family: 'FiraGO', serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: rgba(66, 66, 66, 0.5);
}
</style>