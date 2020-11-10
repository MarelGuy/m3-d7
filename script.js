let users = []

window.onload = async () => {
    //let userId = new URLSearchParams(document.location.search).get("id");

    try {
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/users",
            {
                method: "GET"
            }
        );

        users = await response.json();
        console.table(users)

        users.forEach((data) => {
            let appendMe = document.querySelector("#appendMe")
            let element = document.createElement("li")
            appendMe.appendChild(element)
            element.innerHTML = "ID: " + data.id + " | Name: " + data.name + " | Username: " + data.username + " | Email: " + data.email
        });

        users.forEach((data) => {
            let appendMe2 = document.querySelector("#appendMe2")
            let element2 = document.createElement("li")
            appendMe2.appendChild(element2)
            element2.innerHTML = data.name
        });
        console.log(onlyNames())

    }

    catch (error) { }
}


const filterUsers = () => {
    let selectValue = document.getElementById('fieldSelect').value
    console.log(selectValue)
    let inputValue = document.getElementById('filterInput').value
    let filteredUsers = users.filter(user => user[selectValue].includes(inputValue))
    console.log(filteredUsers)
}

const onlyNames = () => {
    return users.map(user => {
        let totalAddress = Object.keys(user.address).map(propName => Object.value[propName])
        console.log(totalAddress)
        return {
            user: user.name,
            address: totalAddress
        }
    })
}
