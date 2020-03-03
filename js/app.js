'use script';
var totalview = 0;
var totalclicks = 0;
votes = [];
views = [];
var usedimages = [];
var player = prompt("do you want to use player in ur web page").toLowerCase();
if (player === "yes") {
  document.getElementById("player").style.display = "block";
}
else {
  document.getElementById("player").style.display = "none";

}
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
  products.all = [];
  for (var i = 0; i < products.length; i++) {
    new Productitem(products[i]);
  }
function savetrackvalue() {
 localStorage.setItem('total', totalview);

}
function trackvalue() {
  localStorage.getItem('total');

}
function updateproducts() //store object to jason
{
  var product = JSON.stringify(products.all);
  localStorage.setItem('products', product);
  console.log(product);
}
function getproducts() {
  var product = localStorage.getItem('products');
  if(product) {
    products.all = JSON.parse(product);
    console.log(products.all);

  }
}
getproducts();
console.log(products);
var leftproduct = document.getElementById("leftproduct");
var centerproduct = document.getElementById("centerproduct");
var rightproduct = document.getElementById("rightproduct");
var imagesection = document.querySelector(".products-container");
leftproduct.src = `assets/${products[0]}`;
leftproduct.alt = products[0].split(".", 1);
leftproduct.title = products[0].split(".", 1);
centerproduct.src = `assets/${products[1]}`;
centerproduct.alt = products[1].split(".", 1);
centerproduct.title = products[1].split(".", 1);
rightproduct.setAttribute('src', `assets/${products[2]}`);
rightproduct.setAttribute('alt', products[2]);
rightproduct.setAttribute('title', products[2]);
function Productitem(ProductName, imagePath, clicks, views) {
  this.ProductName = ProductName;
  this.imagePath = `assets/${this.ProductName}`;
  this.views = 0;
  this.clicks = 0;
  this.numberofdisplay = 0;
  products.all.push(this);
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
  while (usedimages.includes(leftp) || usedimages.includes(centerp) || usedimages.includes(rightp)) {
    rend
  }
  usedimages = [];
  usedimages.push(leftp.ProductName);
  usedimages.push(centerp.ProductName);
  usedimages.push(rightp.ProductName);

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
  savetrackvalue()
  trackvalue();
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
    displaychart();
    updateproducts();



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
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',

          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',



        ],
        borderColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',


        ],
        borderWidth: 1

      }, {
        label: 'total of views' + `${totalview}`,
        data: views,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',

          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 99, 132, 0.2)',



        ],

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

// var Song = function(artist, audio) {
//   this.artist = artist;
//     this.audio = audio;
//     return this;
//   };

//   Song.prototype = {
//       playSound: function() {
//       var audio = document.createElement('audio');
//       audio.src = this.audio;
//       audio.play();

var songs = ['Blinding_Lights.mp3', 'Halsey-Graveyard.mp3'];
var song = new Audio();
var currentSong = 0;
window.onload = playsong;
function playsong() {
  song.src = "audio/" + songs[currentSong];
  song.play();
}
function playorstopsong() {
  if (song.paused) {
    song.play();
    document.getElementById("plays").setAttribute("name", "pause-circle-outline");
  }
  else {
    song.pause();
    document.getElementById("plays").setAttribute("name", "play-outline");

  }
}
document.getElementById("play").addEventListener("click", playorstopsong);
document.getElementById("next").addEventListener("click", next);
document.getElementById("pre").addEventListener("click", prev);
document.getElementById("play").addEventListener("dblclick", function () {
  song.pause();
});


function next() {
  currentSong++;
  if (currentSong > 2) {
    currentSong = 0
  }
  playsong();
}
function prev() {
  currentSong--;
  if (currentSong < 0) {
    currentSong = 2;
  }
  playsong();
}
