'use script';

var products=
[
    
  "bag.jpg" ,
  "banana.jpg",
  "bathroom.jpg",
  "boots.jpg",
  "breakfast.jpg",
  "bubblegum.jpg",
  "chair.jpg",
  "cthulhu.jpg",
  "dog-duck.jpg",
  "dragon.jpg",
  "pen.jpg",
  "pet-sweep.jpg",
  "scissors.jpg",
  "shark.jpg",
  "sweep.png",
  "tauntaun.jpg",
  "unicorn.jpg",
  "usb.gif",
  "water-can.jpg",
  "wine-glass.jpg"
]
var usedImages = {};
var usedImagesCount = 0;
console.log(products);
var leftproduct=document.getElementById("leftproduct");
var centerproduct=document.getElementById("centerproduct");
var rightproduct=document.getElementById("rightproduct");
var imagesection=document.querySelector(".products-container");
leftproduct.src=`assets/${products[0]}`;
leftproduct.alt=products[0];
leftproduct.title=products[0];
centerproduct.src=`assets/${products[1]}`;
centerproduct.alt=products[1];
centerproduct.title=products[1];
rightproduct.setAttribute('src',`assets/${products[2]}`);
rightproduct.setAttribute('alt',products[2]);
rightproduct.setAttribute('title',products[2]);
function Product(ProductName,imagePath,clicks,views)
{
  this.ProductName=ProductName;
  this.imagePath=`assets/${this.ProductName}`;
  this.views=0;
  this.clicks=0;
  this.numberofdisplay=0;
  products.all.push(this);
}
products.all =[];
for(var i =0; i<products.length; i++) {
  new Product(products[i]);
}
var leftp,centerp,rightp;
function render()
{
  leftp= products.all[randomnumber(0,products.all.length-1)];
  console.log(leftp);

  centerp = products.all[randomnumber(0,products.all.length-1)];
  console.log(centerp);

  rightp = products.all[randomnumber(0,products.all.length-1)];
  console.log(rightp);
  leftproduct.setAttribute('src',leftp.imagePath);
  leftproduct.setAttribute('alt',leftp.ProductName);
  leftproduct.setAttribute('title',leftp.ProductName);
  centerproduct.setAttribute('src',centerp.imagePath);
  centerproduct.setAttribute('alt',centerp.ProductName);
  centerproduct.setAttribute('title',centerp.ProductName);
  rightproduct.setAttribute('src',rightp.imagePath);
  rightproduct.setAttribute('alt',rightp.name);
  rightproduct.setAttribute('title',rightp.name);
}
render();
imagesection.addEventListener("click",handleClickOnProduct);
var totalclicks=0;
function handleClickOnProduct(event)
{
  if(totalclicks <25 ) {
    if(event.target.id !== 'products-container') {
      if(event.target.id === 'leftproduct') {
        leftp.clicks++;
      } else if(event.target.id === 'centerproduct') {
        centerp.clicks++;
      }
      else if(event.target.id === 'rightproduct') {
        rightp.clicks++;
      }
      totalclicks++;
      leftp.views++;
      rightp.views++;
      while(leftp === rightp||leftproduct ===centerp ||centerp===rightp ||centerp === leftp)
      {
        console.log("code is executed");
        render();

      }
      render();
    }
  }  else {
    console.log('more than 25 clicks');
    imagesection.removeEventListener('click',handleClickOnProduct);
    display();
  }
}
function display()
{  

  var ulE1 = document.getElementById('summary');
  for (var i =0; i<products.all.length ; i++) {
    var liE1 = document.createElement('li');
    liE1.classList.add("list");
    liE1.textContent = `${products.all[i].ProductName} has ${products.all[i].clicks} clicks and ${products.all[i].views} views`;
    ulE1.appendChild(liE1);
  }
}
function randomnumber(min,max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
'use script';

var products=
[
    
    "bag.jpg" ,
    "banana.jpg",
    "bathroom.jpg",
    "boots.jpg",
    "breakfast.jpg",
    "bubblegum.jpg",
    "chair.jpg",
    "cthulhu.jpg",
    "dog-duck.jpg",
    "dragon.jpg",
    "pen.jpg",
    "pet-sweep.jpg",
    "scissors.jpg",
    "shark.jpg",
    "sweep.png",
    "tauntaun.jpg",
    "unicorn.jpg",
    "usb.gif",
    "water-can.jpg",
    "wine-glass.jpg"
]
var usedImages = {};
var usedImagesCount = 0;
console.log(products);
var leftproduct=document.getElementById("leftproduct");
var centerproduct=document.getElementById("centerproduct");
var rightproduct=document.getElementById("rightproduct");
var imagesection=document.querySelector(".products-container");
leftproduct.src=`assets/${products[0]}`;
leftproduct.alt=products[0];
leftproduct.title=products[0];
centerproduct.src=`assets/${products[1]}`;
centerproduct.alt=products[1];
centerproduct.title=products[1];
rightproduct.setAttribute('src',`assets/${products[2]}`);
rightproduct.setAttribute('alt',products[2]);
rightproduct.setAttribute('title',products[2]);
function Product(ProductName,imagePath,clicks,views)
{
    this.ProductName=ProductName;
    this.imagePath=`assets/${this.ProductName}`;
    this.views=0;
    this.clicks=0;
    this.numberofdisplay=0;
    products.all.push(this);
}
products.all =[];
for(var i =0; i<products.length; i++) {
    new Product(products[i]);
  }
  var leftp,centerp,rightp;
  function render()
  {
    leftp= products.all[randomnumber(0,products.all.length-1)];
    console.log(leftp);

    centerp = products.all[randomnumber(0,products.all.length-1)];
    console.log(centerp);

    rightp = products.all[randomnumber(0,products.all.length-1)];
    console.log(rightp);
    leftproduct.setAttribute('src',leftp.imagePath);
    leftproduct.setAttribute('alt',leftp.ProductName);
    leftproduct.setAttribute('title',leftp.ProductName);
    centerproduct.setAttribute('src',centerp.imagePath);
    centerproduct.setAttribute('alt',centerp.ProductName);
    centerproduct.setAttribute('title',centerp.ProductName);
    rightproduct.setAttribute('src',rightp.imagePath);
    rightproduct.setAttribute('alt',rightp.name);
    rightproduct.setAttribute('title',rightp.name);
  }
  render();
  imagesection.addEventListener("click",handleClickOnProduct);
  var totalclicks=0;
  function handleClickOnProduct(event)
  {
    if(totalclicks <25 ) {
        if(event.target.id !== 'products-container') {
          if(event.target.id === 'leftproduct') {
            leftp.clicks++;
          } else if(event.target.id === 'centerproduct') {
            centerp.clicks++;
          }
          else if(event.target.id === 'rightproduct') {
            rightp.clicks++;
          }
          totalclicks++;
          leftp.views++;
          rightp.views++;
          render();
        }
      }  else {
        console.log('more than 25 clicks');
        imagesection.removeEventListener('click',handleClickOnProduct);
        display();
      }
  }
function display()
{
    var ulE1 = document.getElementById('summary');
  for (var i =0; i<products.all.length ; i++) {
    var liE1 = document.createElement('li');
    liE1.textContent = `${products.all[i].ProductName} has ${products.all[i].clicks} clicks and ${products.all[i].views} views`;
    ulE1.appendChild(liE1);
}
}
function randomnumber(min,max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
