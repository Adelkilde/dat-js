"use strict";

const endpoint = "https://post-rest-api-default-rtdb.firebaseio.com";

window.addEventListener("load", initApp);

function initApp() {
    console.log("app.js is running 🎉");
    getPosts();
}

async function getPosts() {
    const res = await fetch(`${endpoint}/posts.json`);
    const data = await res.json();
    const posts = preparePostData(data);
    // const posts = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
    return posts;
}

function preparePostData(dataObject) {
    const postArray = [];
    for (const key in dataObject) {
        const post = dataObject[key];
        post.id = key;
        postArray.push(post);
    }

    console.log(postArray);
    return postArray;
}
