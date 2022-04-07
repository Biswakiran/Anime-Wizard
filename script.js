async function anime(){
    const url =" https://api.jikan.moe/v3/search/anime?q="+textvalue;
    const response = await fetch(url);
    const users = await response.json();
    return users;
  }
  
    const moviename=document.querySelector("#bot");
    var textvalue='';
    var result='';

    moviename.addEventListener("click",function(event){
      event.preventDefault();
    //   window.location.href="http://127.0.0.1:5500/file.html"
    textvalue=document.querySelector("#searchanime").value;
    console.log(textvalue);
    let a = anime();
    a.then(data =>{ 
      console.log(data.results);
      const image=data.results
      .map(user =>{


       
return `
<div class="col">
    <div class="card h-100">
      <img src="${ user.image_url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${"Title:-"+user.title}</h5>
        <h4 class="card-text">${"Rating:-"+user.score}</h4>
        <h4 class="card-text">${"Eepisode:-"+user.episodes}</h4>
       
      </div>
    </div>
`;

      })
     $("#search").html(image);
  })
})


  async function news(){
    const url ="https://api.jikan.moe/v3/anime/1/news";
    const response = await fetch(url);
    const users = await response.json();
    return users;
  }

  let b=news();
  b.then(data=>{
    console.log(data.articles);
    const news=data.articles
    .map(user =>{
       return `
       <div class="user liftup ">
        <p><ul ><li >${user.author_name}said${user.intro}</li></ul></p>
        </div>
       `;
    })
     $("#display").html(news);
  })


  (function($){
    "use strict";
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
  })	
  (jQuery);

  function myFunction() {
var element = document.body;
element.classList.toggle("dark-theme");
}

const signs = document.querySelectorAll('x-sign')
const randomIn = (min, max) => (
Math.floor(Math.random() * (max - min + 1) + min)
)

const mixupInterval = el => {
const ms = randomIn(2000, 4000)
el.style.setProperty('--interval', `${ms}ms`)
}

signs.forEach(el => {
mixupInterval(el)
el.addEventListener('webkitAnimationIteration', () => {
 mixupInterval(el)
})
})