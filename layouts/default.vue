<template>
  <div>
    <VmHeader></VmHeader>
    <main>
      <nuxt/>
      <VmLoginModal></VmLoginModal>
      <VmRegistrationModal></VmRegistrationModal>
      <VmCartModal></VmCartModal>
    </main>
    <VmFooter></VmFooter>
  </div>
</template>

<script>
import VmHeader from '@/components/header/Header';
import VmFooter from '@/components/footer/Footer';
import VmLoginModal from '@/components/modal/Login';
import VmRegistrationModal from '@/components/modal/Registration';
import VmCartModal from '@/components/modal/Cart';

export default {
  components: {
    VmHeader,
    VmFooter,
    VmLoginModal,
    VmRegistrationModal,
    VmCartModal
  },
  middleware: ['auth','pam']
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>