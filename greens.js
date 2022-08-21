fetch ('http://localhost:5000/products')
.then(function (response) {
    return response.json();
    })
    .then(function (data) {
    console.log( data);
    let allProducts = document.getElementById("products");
    data.forEach (item => {
        let listItem = document.createElement("li")
        listItem.innerText = `${item.name}`
        allProducts.appendChild(listItem)
    })
    })
    .catch(function (error) {
    console.log("error", error);
    });

fetch ('http://localhost:5000/products/fruits')
.then(function (response) {
    return response.json();
     })
    .then(function (data) {
    console.log( data);
    let allFruits = document.getElementById('fruList');
    data.forEach (item => {
        let fruitItem = document.createElement('li')
        fruitItem.innerText = `${item.name}`
        allFruits.appendChild(fruitItem)
        })
        })
    .catch(function (error) {
    console.log('error', error);
    });

fetch ('http://localhost:5000/products/vegetables')
.then(function (response) {
    return response.json();
        })
    .then(function (data) {
    console.log( data);
    let allVegs = document.getElementById('vegList');
    data.forEach (item => {
        let vegItem = document.createElement('li')
        vegItem.innerText = `${item.name}`
        allVegs.appendChild(vegItem)
        })
        })
    .catch(function (error) {
    console.log('error', error);
    });