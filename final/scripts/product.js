const products = './data/product.json';
const cards = document.querySelector('#cards');

async function getProductsData() {
    const response = await fetch(products);
    const data = await response.json();

    displayProductsData(data);

}
getProductsData();

function displayProductsData(products) {
    const cards = document.querySelector('#cards');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card'; // class, not id
        card.innerHTML = `
        <h2>${product.name}</h2>        
        <img src="${product.photo}" alt="${product.name}" loading"=lazy">        
        <p>${product.price}</p>
        <button>Customise</button>`;
        cards.appendChild(card);
    });
}