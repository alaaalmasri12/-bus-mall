'use script';
var totalview = 0;
var totalclicks=0;
votes=[];
views=[];
var products =
  [

    "bag.jpg",
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



console.log(products);
var leftproduct = document.getElementById("leftproduct");
var centerproduct = document.getElementById("centerproduct");
var rightproduct = document.getElementById("rightproduct");
var imagesection = document.querySelector(".products-container");
leftproduct.src = `assets/${products[0]}`;
leftproduct.alt = products[0].split(".",1);
leftproduct.title = products[0].split(".",1);
centerproduct.src = `assets/${products[1]}`;
centerproduct.alt = products[1].split(".",1);
centerproduct.title = products[1].split(".",1);
rightproduct.setAttribute('src', `assets/${products[2]}`);
rightproduct.setAttribute('alt', products[2]);
rightproduct.setAttribute('title', products[2]);
function Productitem(ProductName, imagePath, clicks, views) {
  this.ProductName = ProductName;
  this.imagePath = `assets/${this.ProductName}`;
  this.views =0;
  this.clicks =0;
  this.numberofdisplay = 0;
  products.all.push(this);
}
products.all = [];
for (var i = 0; i < products.length; i++) {
  new Productitem(products[i]);
}
var leftp, centerp, rightp;
function render() {
  totalview++;
  leftp = products.all[randomnumber(0, products.all.length - 1)];

  centerp = products.all[randomnumber(0, products.all.length - 1)];

  rightp = products.all[randomnumber(0, products.all.length - 1)];
  while ((leftp === rightp) || (leftp === centerp) || (centerp === rightp) || (centerp === leftp)) {
    console.log("code is executed");
    render();

  }

  leftproduct.setAttribute('src', leftp.imagePath);
  leftproduct.setAttribute('alt', leftp.ProductName);
  leftproduct.setAttribute('title', leftp.ProductName);
  centerproduct.setAttribute('src', centerp.imagePath);
  centerproduct.setAttribute('alt', centerp.ProductName);
  centerproduct.setAttribute('title', centerp.ProductName);
  rightproduct.setAttribute('src', rightp.imagePath);
  rightproduct.setAttribute('alt', rightp.name);
  rightproduct.setAttribute('title', rightp.name);
}
render();
imagesection.addEventListener("click", handleClickOnProduct);
function handleClickOnProduct(event) {

  if (totalview < 25) {
    if (event.target.id !== 'products-container') {
      if (event.target.id === 'leftproduct') {
        leftp.clicks++;


      } else if (event.target.id === 'centerproduct') {
        centerp.clicks++;

      }
      else if (event.target.id === 'rightproduct') {
        rightp.clicks++;

      }
      totalclicks++;
      leftp.views++;
      centerp.views++;
      rightp.views++;




      render();
    }
  } else {
    console.log('more than 25 clicks');

    imagesection.removeEventListener('click', handleClickOnProduct);
    display();
    displaychart()


  }
}
function display() {


  var ulE1 = document.getElementById('summary');
  for (var i = 0; i < products.all.length; i++) {
    var liE1 = document.createElement('li');
    liE1.classList.add("list");
      votes.push(products.all[i].clicks);
      views.push(products.all[i].views);
      console.log(votes[i]);
    console.log(views[i]);
    liE1.textContent = `${products.all[i].ProductName} has ${products.all[i].clicks} clicks and ${products.all[i].views} views`;
    ulE1.appendChild(liE1);
  }
}
function randomnumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function play() {
  console.log("it entered the play function")
  var audio = document.getElementById("audio");
  audio.play();
}




function displaychart() {
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: products,
      datasets: [{
        label: '# of Votes' + `${totalclicks}`,
        data: votes,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',

        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',

        ],
        borderWidth: 1

      }, {
        label: 'total of views'+ `${totalview}`,
        data: views,

      },
      ],
      //one for clicks and one for views
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  });
}

var sounds = [
  new Audio("/audio/Blinding_Lights.mp3"),
  new Audio("/sounds/Halsey-Graveyard.mp3"),
];
 
url = 'audio/Halsey-Graveyard.mp3';
const myAudio = new Audio(url);

var btn = document.getElementById('btn');
btn.addEventListener('click', function () {
  PlayFunc(myAudio, 3);
});

function PlayFunc(target, RepeatCount) {
  var soundFunc = function () {
    RepeatCount--;
    target.currentTime = 0;
    if (RepeatCount > 0) {
      target.play();
    }
    else {
      target.stop();
      target.removeEventListener('ended', soundFunc);
    }

  }
  target.addEventListener('ended', soundFunc)
  target.play();
}
