<template>
  <div class="page-container">
    <div class="thankyou-text">
      <h1 class="title is-1">THANK YOU</h1>
      <h2 class="title is-4">for your order</h2>
      <hr class="new1">
      <p>We are going to deliver your items soon!</p>
    </div>
  </div>
</template>

<script>

export default {
	name: 'thankyou',
  
  data () {
    return {
    };
  },
}
</script>

<style lang="scss" scoped>
  .page-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    
    height: calc(100vh - 150px);
    margin-top: 50px;
    background-image: url("../../static/thankyou-banner-01.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
  .thankyou-text {
    background-color: #00b2febe;
    padding: 20px 40px;
    color: #FFFFFF !important;
    border-radius: 12px;
  }
  
  .title {
    color: #FFFFFF !important;   
  }
  
  hr.new1 {
  border-top: 1px solid #FFFFFF;
  }
</style>


