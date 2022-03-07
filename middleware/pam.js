export default function(context) {
    window.pam && window.pam.track('page_view', {})
        .then((res) => {
            // response
        })
        .catch((err) => {
            // handle error
        });
}