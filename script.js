const res=window.fetch('https://dummyjson.com/products');
res.then((data)=>{
    const obj=data.json();

    obj.then((js)=>{
        renderUI(js);
    })
    .catch((err)=>{
       console.log('cannnot parse json');
    });
})

.catch((err)=>{
   console.log('error occured',err);
})

function renderUI(data){
    const product=data.products;

    const firsttitle=product[0].title;
    const firstThumb=product[0].thumbnail;
    const price=product[0].price;
    const category=product[0].category;
    const description=product[0].description;
    console.log(firsttitle,firstThumb,category,price);
    const parent=document.getElementById('root');
    const title=document.createElement('h4');
    title.innerText=firsttitle;
    
    parent.appendChild(title);
    const image=document.createElement('img');
    image.src=firstThumb;
    parent.appendChild(image);

    const cards = document.getElementById('root');
    cards.innerHTML = `
        <div class="card">
            <h2>Product Details</h2>
            <p>Product title:  ${firsttitle}</p>
            <img src="${firstThumb}" alt="Product Image"> 
            <p> Description:${description}</p>
            <p>Category: ${category}</p>
            <p>price: ${price}</p>
        </div>`
    ;
    cards.style.display = 'block';
}