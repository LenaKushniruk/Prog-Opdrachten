class App
{
    runApplication()
    {
        console.log("hello world");
        let arr = ["Billie Eilish", "Dua Lipa", "Maneskin", "Calvin Harris", "Lizzo", "K-Pop"];
        console.log(arr)
        let headers = document.getElementsByClassName("bandName");
        headers[0].innerHTML = "M&M";
        headers[1].innerHTML = "BTS";
        headers[2].innerHTML = "Bob Marley";
    }
}

let app = new App();
app.runApplication();