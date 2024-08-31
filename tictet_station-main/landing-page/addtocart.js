const product = [
    {
        id: 0,
        image: '',
        title: 'Policy Implementation Masterclass',
        price: 14000,
    },
    {
        id: 1,
        image: '',
        title: 'Corporate Sales Manangement',
        price: 11459,
    },
    {
        id: 2,
        image: '',
        title: 'Marketing Masterclasses',
        price: 3999,
    },
    {
        id: 3,
        image: '',
        title: 'Corporate Financial Management',
        price: 4512,
    },
    {
        id: 4,
        image: '',
        title: 'Public Sector Tickets',
        price: 5000,
    },
    {
        id: 5,
        image: '',
        title: 'Management Executives Tickets',
        price: 4000,
    },
    {
        id: 6,
        image: '',
        title: 'Entrepreneural Talks',
        price: 55000,
    },
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "R "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "R "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}