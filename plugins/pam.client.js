import Pam from 'pam4-tracker'

export default ({ app }, inject) => {
  // TODO: fill these configs
  const config = {
    autoTracking: false,
    webPushPublicKey: '',
    baseApi: 'https://stgx.pams.ai',
    pusherAlias: '',
    consentMessageId: '1qHkMGcSLHcJxyqZXRq6ovIM8GV',
    publicDBAlias: 'boodabest-public',
    loginDBAlias: 'boodabest-login',
  }

  const pam = new Pam(config)

  inject('pam', pam)

  app.router.afterEach((to, from) => {
    pam.send('page_view', '', {})
      .then((res) => {
        // response
      })
      .catch((err) => {
        // handle error
      })
  })

  window.onNuxtReady(() => {
    pam.consentManager.setLoginState(false)
  })
}
