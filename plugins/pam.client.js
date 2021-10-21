import Pam from '@3dsinteractive/pamsdk'

export default ({ app }, inject) => {
    // TODO: fill these configs
    const config = {
        autoTracking: true,
        webPushPublicKey: '',
        baseApi: 'https://stgx.pams.ai',
        pusherAlias: '',
        trackingConsentMessageId: '1qHkMGcSLHcJxyqZXRq6ovIM8GV',
        contactingConsentMessageIds: ['1qZBgGUvpBI4heCPQzfocNyuY1D', '1qZCeSoXiawAYwTz5mmop5YyJWf'],
        publicDBAlias: 'boodabest-public',
        loginDBAlias: 'boodabest-login',
        loginKey: 'customer',
        disableInstantPopupUI: false,
        // enableFacebookTracking: false,
    }

    const pam = new Pam(config)

    inject('pam', pam)
}