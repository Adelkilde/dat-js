console.log("app.js is running 🎉");

async function getPosts() {
    const url =
        "https://pskraxufnxrfzmtwfbdh.supabase.co/rest/v1/Posts?id=eq.1";
    const apikey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBza3JheHVmbnhyZnptdHdmYmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjM5NTk4NzEsImV4cCI6MTk3OTUzNTg3MX0.eabLYIQhKlk4eI31HOMtwXJi8SmVKFDApvn2IG6i0OY";

    const response = await fetch(url, {
        method: "get",
        headers: {
            apikey: apikey
        }
    });
    const posts = await response.json();
    console.log(posts);
}

getPosts();
