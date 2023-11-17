root.innerHTML += `
<button id="sort-by-price">Sort by price</button>
`;

function sortProducts(sortType) {
    switch(sortType) {
        // Cazul in care e apasat butonul de sortare dupa pret
        case 'SORT_BY_PRICE':
            function compare(phone1, phone2) {
                if (phone1,price < phone2,price) {
                    return -1;
                }
                if (phone1.price > phone2.price) {
                    return 1;
                }
                return 0;
                // Varianta prescurtata: return phone1.price - phone2.price;
            }
            console.log('sort by price');
            //PAS1: Luam produsele din localStorage
            const localStorageProducts = getProducts();
            //PAS2: Sa modificam produsele
            localStorageProducts.sort(compare);
            //console.log(localStorageProducts);
            //PAS3: Afisam produsele pe ecran
            renderProductList(localStorageProducts);
            //PAS4: Punem produsele in localStorage
            setProducts(localStorageProducts);

            break;
        case 'SORT_BY_NAME':
            console.log('sort by name');

            break;
        default:
    }
}

function addSortingFunctionality() {
    // Cand se face click pe butonul de sortare dupa pret, se apleaza functia de sortare.
    const sortByPriceButton = document.querySelector('#sort-by-price');
    sortByPriceButton.addEventListener('click', function() {
        sortProducts('SORT_BY_PRICE')
    })
}

window.addEventListener('load', addSortingFunctionality);
