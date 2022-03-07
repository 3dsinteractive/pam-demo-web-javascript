export default function(context) {
    if (context.app.context.app.$cookies.get('isUserLoggedIn') && context.app.context.app.$cookies.get('setUserName')) {
        window.pam && window.pam.consentManager.setLoginState(true)
        context.store.commit('isUserLoggedIn', context.app.context.app.$cookies.get('isUserLoggedIn'));
        context.store.commit('setUserName', context.app.context.app.$cookies.get('setUserName'));
    } else {
        window.pam && window.pam.consentManager.setLoginState(false)
    }
}