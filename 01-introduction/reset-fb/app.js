async function read() {
    const response = await fetch("/data/users.json");
    const data = await response.json();
    console.log(data);
    return data;
}

async function reset(endpoint) {
    const data = await read();
    console.log(data);
    const usersAsJson = JSON.stringify(data.users);
    console.log(usersAsJson);

    const response = await fetch(`${endpoint}/users.json`, {
        method: "PUT",
        body: usersAsJson
    });
    console.log(response);
}

// reset("https://race-dat-v1-default-rtdb.europe-west1.firebasedatabase.app");
// reset("https://race-dat-v2-default-rtdb.europe-west1.firebasedatabase.app");
