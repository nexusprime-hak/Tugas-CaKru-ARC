const axios = require('axios').default

axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) {
        console.log(response.data[getRandomInt(99)].body + "\n");
    })
    .catch(function (error) {
        console.log(`${error}\n`);
    })
    .finally(function () {
        console.log("GET requests finished");
    })

console.log("Today's daily quote is:\n")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}