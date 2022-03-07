export default function(context) {
    if (process.client) {
        window.pam && window.pam.track('page_view', {})
            .then((res) => {
                // response
            })
            .catch((err) => {
                // handle error
            });
    }
}