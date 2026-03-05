// DATABASE
let users = JSON.parse(localStorage.getItem("users")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// PRODUCTS DATABASE
let products = [

{name:"Headphones",price:20,img:"https://via.placeholder.com/150"},
{name:"Phone Case",price:8,img:"https://via.placeholder.com/150"},
{name:"Keyboard",price:30,img:"https://via.placeholder.com/150"},
{name:"Mouse",price:15,img:"https://via.placeholder.com/150"},
{name:"Charger",price:12,img:"https://via.placeholder.com/150"},
{name:"Powerbank",price:25,img:"https://via.placeholder.com/150"},
{name:"USB Cable",price:5,img:"https://via.placeholder.com/150"},
{name:"Tablet",price:150,img:"https://via.placeholder.com/150"},
{name:"Laptop",price:600,img:"https://via.placeholder.com/150"},
{name:"Smart Watch",price:90,img:"https://via.placeholder.com/150"}

];

updateCart();
displayProducts();


// REGISTER
function register(){

let username=document.getElementById("regUser").value;
let password=document.getElementById("regPass").value;

let user={username,password};

users.push(user);

localStorage.setItem("users",JSON.stringify(users));

alert("Account Created!");

showLogin();

}


// LOGIN
function login(){

let username=document.getElementById("loginUser").value;
let password=document.getElementById("loginPass").value;

let found=users.find(u=>u.username===username && u.password===password);

if(found){

document.getElementById("loginBox").style.display="none";
document.getElementById("registerBox").style.display="none";
document.getElementById("shop").style.display="block";

}else{

alert("Wrong Username or Password");

}

}


// LOGOUT
function logout(){

location.reload();

}


// SHOW PAGES
function showLogin(){

document.getElementById("registerBox").style.display="none";
document.getElementById("loginBox").style.display="block";

}

function showRegister(){

document.getElementById("loginBox").style.display="none";
document.getElementById("registerBox").style.display="block";

}


// DISPLAY PRODUCTS
function displayProducts(){

let container=document.getElementById("productList");

container.innerHTML="";

products.forEach((p,i)=>{

container.innerHTML+=`

<div class="product">

<img src="${p.img}">
<h3>${p.name}</h3>
<p>$${p.price}</p>

<button onclick="addToCart(${i})">Add To Cart</button>

</div>

`;

});

}


// ADD TO CART
function addToCart(index){

cart.push(products[index]);

localStorage.setItem("cart",JSON.stringify(cart));

updateCart();

alert("Added to cart");

}


// UPDATE CART
function updateCart(){

let count=document.getElementById("cartCount");

if(count){
count.innerText=cart.length;
}

}


// SHOW CART
function showCart(){

document.getElementById("shop").style.display="none";
document.getElementById("cartPage").style.display="block";

let list=document.getElementById("cartItems");

list.innerHTML="";

cart.forEach((item,i)=>{

list.innerHTML+=`

<li>
${item.name} - $${item.price}

<button onclick="removeCart(${i})">Remove</button>

</li>

`;

});

}


// REMOVE FROM CART
function removeCart(index){

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

showCart();
updateCart();

}


// BACK TO SHOP
function backToShop(){

document.getElementById("cartPage").style.display="none";
document.getElementById("shop").style.display="block";

}


// SEARCH
function searchProduct(){

let input=document.getElementById("search").value.toLowerCase();

let productDivs=document.querySelectorAll(".product");

productDivs.forEach(div=>{

let text=div.innerText.toLowerCase();

if(text.includes(input)){
div.style.display="block";
}else{
div.style.display="none";
}

});

}