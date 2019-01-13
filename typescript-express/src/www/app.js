navigator.serviceWorker.register("/serviceworker.js")
    .then(function (registration) {
    }).catch(function (error) {
        console.log("failed: ", error);
    });