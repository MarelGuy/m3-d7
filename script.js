window.onload = async () => {
    //let userId = new URLSearchParams(document.location.search).get("id");

    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "GET"
            }
        );

        let users = await response.json();
        console.log(users)

        users.forEach(element => {
            console.log(element.name)
        });
        
    }

    catch (error) { }
}