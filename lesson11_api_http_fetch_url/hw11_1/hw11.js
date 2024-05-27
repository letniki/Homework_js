// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


let cartsBlock=document.getElementById('carts');

fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then((response)=>{
        let carts=response.carts;

        for (const cart of carts) {
            let divCartContainer=document.createElement('div');
            let divCartDescription=document.createElement('div');
            divCartDescription.innerText=` Cart Id: ${cart.id}. Total:${cart.total}$. Discounted total: ${cart.discountedTotal}$ User Id: ${cart.userId}. Total Products: ${cart.totalProducts}. Quantity: ${cart.totalQuantity}. This cart contains:`;
            let divProductsContainer=document.createElement('div');
            let products=cart.products;
            for (const product of products) {
                let productDiv=document.createElement('div');
                let productDiscountDiv=document.createElement('div');
                let productImageContainer=document.createElement('div');
                let image=document.createElement('img');
                image.src=`${product.thumbnail}`;
                productDiv.innerText=`Product ID: ${product.id}. Product Name: ${product.title}. Price: ${product.price}$ Quantity: ${product.quantity}. Total:${product.total}$.`;
                productDiscountDiv.innerText=`Discount percentage:${product.discountPercentage}%  Discounted total:${product.discountedTotal}$`
                productImageContainer.appendChild(image);
                divProductsContainer.append(productDiv,productDiscountDiv,productImageContainer);
            }
            divCartContainer.append(divCartDescription, divProductsContainer);
            cartsBlock.appendChild(divCartContainer);
            divCartContainer.classList.add('cart');
        }
    })

