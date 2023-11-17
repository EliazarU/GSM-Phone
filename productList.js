root.innerHTML += `
   <h2>Telephones:</h2>
   <ul id="product-list"></ul>
`;

function renderProductList(products){
    const ul = document.querySelector('#product-list');
    ul.innerHTML = '';

    products.forEach(function (product) {
        const phone = new Product(product.name, product.price);
        phone.renderProduct();

    });
}


