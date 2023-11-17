const root = document.querySelector('#root');
const products = [
    {
        name: 'Iphone 15',
        price: 5500
    },
    {
        name: 'Smasung S23',
        price: 4000
    },
    {
        name: 'Huawei P40',
        price: 3980
    }
    
];

// Functie folosita pentru a extrage produsele din localStorage
function getProducts() {
    // Extragem valoarea corespunzatoare cheii "products" 
    const localStorageProducts = localStorage.getItem("products");
    // Transformam produsele din string in vector de obiecte.
    const parsedLocalStorageProducts = JSON.parse(localStorageProducts);
    // Returnam produsele.
    return parsedLocalStorageProducts
}

// Functie folosita pentru a aduga produsele in localStorage
function setProducts(products) {
    // Parametru primit este transformat in sir de caracter.
    const stringifyProducts = JSON.stringify(products);
    // Setam valoarea corespunzatoare in localStorage.
    localStorage.setItem("products", stringifyProducts);
}

// Daca nu avem produsele in localStorage. atunci le adugam.
if (localStorage.getItem('products') === null) {
    setProducts(products);
}

function startRendering() {
    // Produsele afisiate pe ecran sunt preluate din localStorage
    const localStorageProducts = getProducts();
    renderProductList(localStorageProducts);
}

window.addEventListener('load', startRendering);