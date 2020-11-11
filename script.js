
//EX.1

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
            let completeList = document.getElementById("complete-list")
            let element = document.createElement("li")
            completeList.appendChild(element)
            element.innerHTML = "ID: " + data.id + " | Name: " + data.name + " | Username: " + data.username + " | Email: " + data.email
        });

        /* users.forEach((data) => {
            let appendMe2 = document.querySelector("#appendMe2")
            let element2 = document.createElement("li")
            appendMe2.appendChild(element2)
            element2.innerHTML = data.name
        }); */
        
    

    }

    catch (error) { }
}


const filterUsers = () => {
    let selectValue = document.getElementById('fieldSelect').value
    console.log(selectValue)
    let inputValue = document.getElementById('filterInput').value
    let filteredUsers = users.filter(user => user[selectValue].includes(inputValue))
    filteredUsers.forEach((user) => {
        let filUsList = document.getElementById('filtered-users')
        let element = document.createElement("li")
        filUsList.appendChild(element)
        element.innerHTML = user
        console.log(filteredUsers)
    })
}
        

/* const onlyAddresses = () => {
    return users.map(user => {
        let totalAddress = Object.keys(user.address).map(propName => Object.value[propName])
        console.log(totalAddress)
        return {
            user: user.name,
            address: totalAddress
        }
    })
} */

const onlyNames = () => {
    let names = users.map((user) => user.name);
    names.forEach((name) => {
            let namesList = document.getElementById("only-names")
            let element = document.createElement("li")
            namesList.appendChild(element)
            element.innerHTML = name
        });
   // console.log(names)

} 

/* const stringAddresses = users.map((user) => user.address);

let concatAddresses = stringAddresses.map((addressPortion) => {
  let str = "";
  delete addressPortion.geo;
  Object.keys(addressPortion).forEach((key, index) => {
    str = str.concat(Object.values(addressPortion)[index]).concat(" ");
  });
  return str;
});
console.log(concatAddresses); */

const onlyAddresses = () => {
    const stringAddresses = users.map((user) => user.address);
    stringAddresses.forEach(address => {
        let concatAddresses = address.map((addressPortion) => { //n.b stringAddresses.map.....
            let str = "";
            delete addressPortion.geo;
            Object.keys(addressPortion).forEach((key, index) => {
                str = str.concat(Object.values(addressPortion)[index]).concat(" ");
            });
            return str;
        });
        console.log(concatAddresses);
    })
    
}
