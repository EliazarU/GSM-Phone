root.innerHTML += `
<form id="add-product">
   <label for="name">Name:</label>
   <input type="text" name="name" id="name"/>
   <label for="price">Price:</label>
   <input type="number" name="price" id="price"/>
   <input type="submit"/>
</form>
`

function addFromFunctionality() {
   const form = document.querySelector('#add-product');
   // Adaugam un eventListener pentru eventul de submit.
   form.addEventListener('submit', function(event) {
      // ESENTIAL! Cand broswserul apeleaza functia la submit. ii paseaza ca parametru
      console.log(event)
      //By default, la submiterea formularului pagina este incarcata. Trebuie sa preve
       event.preventDefault();
       //event.target = element de HTML de la care s-a declarat evenimentul (aici -)
       // Form-ul contine in interiorul lui input-uri, iar acesta pot fi identificate pe
       const phoneName = event.target.name.value;  
       const phonePrice = Number(event.target.price.value);
       //Cream un nou telefon si il adaugam in vectorul de produse.
       const newPhone = {
            name: phoneName,
            price: phonePrice 
        };
       // PAS1: Extragem produsele din localStorage  
       const localStorageProducts = getProducts();
       // PAS2: Modificam produsele
       localStorageProducts.push(newPhone);
       // PAS3: Adaugam produsele modificate in localStorage
       setProducts(localStorageProducts);


       //Prntru a vedea lista de produse actulizata, o afisam din nou pe ecran.
       renderProductList(localStorageProducts);
    })
}

// Intarziem adaugarea functionalitatii formularului (vezi video pentru explicatie).
window.addEventListener('load', addFromFunctionality);