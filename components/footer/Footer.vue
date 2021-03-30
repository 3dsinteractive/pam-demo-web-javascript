<template>
  <div class="footer">
    <div class="columns container">
      <div class="column">
        <p>Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.</p>
      </div>
      <div class="column has-text-right">
        <p>Adapted from Vuemmerce</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VmFooter',
}
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 50px;
    background: #0081cb;
    color: #FFFFFF;
    //  padding: 50px calc((100vw - 1140px) / 2) 100px;
  }
  .container {
    max-width: 1140px !important;
    margin: auto;
  }
</style>
