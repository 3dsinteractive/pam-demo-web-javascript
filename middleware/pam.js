export default function(context) {
    context.app.$pam.send('page_view', '', {})
        .then((res) => {
            // response
        })
        .catch((err) => {
            // handle error
        });
}