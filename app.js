/*
fetch('https://acme-users-api-rev.herokuapp.com/api/products')
  .then( response => response.json())
  .then( products => console.log(products));
  */

const loadProducts = async()=> {
  const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/products');
  const products = await response.json();
  const container = document.querySelector('#products');
  const divs = products.map((product)=> {
    return `
      <div>
        <h1>${ product.name }</h1>
        <p>${ product.description }</p>
      </div>
    `;
  }).join('');
  container.innerHTML = divs;
};

loadProducts();
