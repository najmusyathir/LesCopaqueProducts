
fetch("./products.json")

.then(function (response){
    return response.json();
})

.then (

    function (products){
    let prodContainer = document.getElementById("prodContainer");
    let productsList = products.products;

    let prodItem = "";
    
    for (let product of productsList){

        let prodImgs = "";
        for(let img of product.img){
            prodImgs+=`<img src="${img}">`
        }

        prodItem += `
        <div class="grid_item"><div class="img_container">
        ${prodImgs}
        </div>
        <h3>${product.prod_name}</h3>
    </div>`;
    }
    prodContainer.innerHTML = prodItem;
}



)
