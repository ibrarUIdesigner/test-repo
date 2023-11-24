

let row = document.getElementById("rowContainer")
let productsCotainer = document.getElementById("product")
const getProducts = (url)=>{

    
    return new Promise((resolve,reject)=>{
        fetch(url).then(response=>{
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
        }).then(data=>{
            resolve(data)
        }).catch(err=>{
            reject(err)
        })
    })
}

const apiEndpoint ="https://dummyjson.com/products"
getProducts(apiEndpoint).then((products)=>{

    
    products.products.forEach(element => {
       row.append(<div class="product">element.title</div>)
    });
    console.log(products);
}).catch(error=>{
    console.log(error);
});