const slideShow=document.getElementById("slideShow");
var images=['image1.jpg','image2.jpg','image3.jpg'];

var currentValue=0;

setInterval(function(){
  currentValue=(currentValue+1)%images.length;
  slideShow.src=images[currentValue];
},3000);


// const left=document.querySelector('.left-arrow');
// const right=document.querySelector('.right-arrow');
// var index=0;
// right.addEventListener('click',()=>{
//     index=(index+1)%images.length;
//     slideShow.src=images[index];
// })
// var left_index=images.length;

// left.addEventListener('click',()=>{
    
//      if(left_index){
//      left_index=(left_index-1)%images.length;
//      slideShow.src=images[left_index];
//      }
// })




function changebg(){
    var nav=document.getElementById("nav");
    var scrollValue=window.scrollY;
    if(scrollValue>=50){
      nav.classList.add('active');
  
    }else{
      nav.classList.remove('active');
    }
  }
  
  window.addEventListener('scroll',changebg);


  var textchange=['Discover true <br> personalization.','New Amazing<br>Stuffs Here.','Get upto 30% off<br>New Arrivals'];
  const head=document.getElementById("heading");

  var text_index=0;
  setInterval(function(){
    text_index=(text_index+1)%textchange.length;
    head.innerHTML=textchange[text_index]; 
  },3000);


var hits=document.getElementById("hits");
var women_new_collection=document.getElementById("women-new-collection");
var women_latest_collection=document.getElementById("latest-women-collection");
var womenDress=document.getElementById("womenDress");

function slideHits(){
   hits.classList.add('active-hits');
   women_new_collection.classList.remove('active-new');
   women_latest_collection.classList.remove('active-latest');
}
function slideNew(){
  hits.classList.remove('active-hits');
  women_latest_collection.classList.remove('active-latest');
  women_new_collection.classList.add('active-new');
}
function slideLatest(){
  hits.classList.remove('active-hits');
  women_new_collection.classList.remove('active-new');
  women_latest_collection.classList.add('active-latest');
}



// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '9f89cfed05msh072a5a0f4e868a3p1dc93bjsn5aa914e2183a',
// 		'X-RapidAPI-Host': 'real-time-product-search.p.rapidapi.com'
// 	}
// };

// fetch('https://real-time-product-search.p.rapidapi.com/search?q=Nike%20shoes&country=us&language=en', options)
// 	.then(response => response.json())
// 	.then(response => {
//     const imageUrl = response.data.id;

//     const img = document.createElement('img');
//     img.src = imageUrl;
//     console.log(imageUrl);
//     const container = document.getElementById('hit-box');
//     container.appendChild(img);
//   })
// 	.catch(err => console.error(err));