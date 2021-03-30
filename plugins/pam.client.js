import Pam from 'pam4-tracker'

export default ({ app }, inject) => {
  // TODO: fill these configs
  const config = {
    autoTracking: false,
    webPushPublicKey: '',
    baseApi: '',
    pusherAlias: '',
    consentMessageId: '',
    publicDBAlias: '',
    loginDBAlias: '',
  }

  const pam = new Pam(config)

  inject('pam', pam)

  app.router.afterEach(() => {
    pam.send('page_view', '', {})
      .then((res) => {
        // response
      })
      .catch((err) => {
        // handle error
      })
  })
}
