navigator.serviceWorker.register("/serviceworker.js")
    .then(function (registration) {}).catch(function (error) {
        console.log("failed: ", error);
    });




function valuePromise(value) {
    return new Promise((resolve, reject) => {
        resolve(value)
    });
}

function add(p1, p2) {
    return Promise.all([p1, p2]).then(values => {
        return new Promise((resolve, reject) => resolve(valuePromise(values[0] + values[1])));
    });
};

add(valuePromise(10), valuePromise(11)).then(value => {
    console.log("value: ", value);
});