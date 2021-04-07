import Pam from 'pam4-tracker'

export default ({ app }, inject) => {
  // TODO: fill these configs
  const config = {
    autoTracking: false,
    webPushPublicKey: '',
    baseApi: 'https://stgx.pams.ai',
    pusherAlias: '',
    trackingConsentMessageId: '1qHkMGcSLHcJxyqZXRq6ovIM8GV',
    contactingConsentMessageIds: ['1qZBgGUvpBI4heCPQzfocNyuY1D', '1qZCeSoXiawAYwTz5mmop5YyJWf'],
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
