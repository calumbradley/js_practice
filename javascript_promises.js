let promise = new Promise((resolve, reject) => {
    let a = 1 + 2
    if (a == 2) {
        resolve('The promise was resolved')
    }
    else {reject('The promise was rejected')}
})

promise.then((message) => { console.log('this is in the then statement' + message) })
promise.catch((message) => { console.log('this is in the catch statement' + message) })