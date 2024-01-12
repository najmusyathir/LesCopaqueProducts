
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
        let prodDescs = "";
        for(let img of product.img){
            prodImgs+=`
            <div class="img_idvd">
                <img src="${img}">
            </div>    
            `
        }
        for(let desc of product.desc){
            prodDescs+=`<p>- ${desc}</p>`
        }

        prodItem += `
        <div class="grid_item" onclick="showDetails(${product.id})">
        <img src="${product.img[0]}" alt="img-${product.id}">
        <h4>${product.prod_name}</h4>
        </div>

        <div class="prod_details_bkg" id="details${product.id}" >
        
            <div class="prod_details">
                <img class="ic_close" src="./assets/ic_x.svg" alt="close icon" onclick="hideDetails(${product.id})">

                <div class="img_container">
                    <div class="img_carousel">${prodImgs}</div>
                </div>

                <div class="details_container">
                    <h4>${product.prod_name}</h4>
                    ${prodDescs}
                </div>

            </div>

        </div>
    
    `;
    }
    
    prodContainer.innerHTML = prodItem;
}
)

function showDetails(productId) {
    let detailsElement = document.getElementById(`details${productId}`);
    if (detailsElement) {
      detailsElement.style.display = "flex";
    }
  }
  
function hideDetails(productId) {
    let detailsElement = document.getElementById(`details${productId}`);
    if (detailsElement) {
      detailsElement.style.display = "none";
    }
  }

  function scrollCarousel(direction) {
    const carousel = document.querySelector('.img_carousel');
    let scrollAmount = 600;

    if (direction === 'left') {
        carousel.scrollLeft -= scrollAmount;
        console.log("left scroll");
    } else if (direction === 'right') {
        carousel.scrollLeft += scrollAmount;
        console.log("right scroll");
    }
}

