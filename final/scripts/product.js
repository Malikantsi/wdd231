const products = './data/product.json';
const cards = document.querySelector('#cards');

async function getProductsData() {
    try {
        const response = await fetch(products);
        const data = await response.json();
        displayProductsData(data);
    } catch (error) {
        // console.log("Failed to fetch product data" + cards);
        cards.innerHTML = `<span style=color:red; font-size:50pt; display:block; text-align:center>
            <strong>Something went wrong! Failed to fetch product data </<strong></span>`;
    }
}
getProductsData();

function displayProductsData(products) {

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card'; // class, not id
        card.innerHTML = `
        <h2>${product.name}</h2>        
        <img src="${product.photo}" alt="${product.name}" loading"=lazy">        
        <p><strong>${product.price}</strong><br/>${product.description}</p>
        <button>Customise</button>`;
        cards.appendChild(card);
    });
}

