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
        loginKey: 'customer'
    }

    const pam = new Pam(config)

    inject('pam', pam)
}