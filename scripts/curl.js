let type = document.querySelector("#type");
let threea = document.querySelector("#threea");
let  threeb = document.querySelector("#threeb");
let curls = document.querySelectorAll(".curls")
let list = document.querySelectorAll(".list")
let sections = document.querySelectorAll("section")
let water = document.querySelectorAll(".cut")
let myporosity = document.querySelectorAll(".myporosity")
let change = document.querySelector("h2")
let snd = document.querySelector("#myAudio")
let click = document.querySelector("#click")

function hideAllSections(){
  sections.forEach(function(el){
    el.style.display='none';
  });
}
function hideAllCurls(){
  curls.forEach(function(el){
    el.style.display='none';
  });
}
function hideAllPorosity(){
  myporosity.forEach(function(el){
    el.style.display='none';
  });
}




hideAllSections();






list.forEach(function(el) {
  el.onclick = (e) => {
    // hide all the divs to ensure that only one will be open
    hideAllSections();
    click.play();

    switch (e.target.getAttribute('id')) {
      case 'type':
        document.querySelector('#curlpattern')
        	.style.display = 'block';
          document.querySelector("#changingheader").textContent="WHAT IS MY HAIR TYPE?";
          document.querySelector("h2").textContent="Hair types and curl patterns can differ from head to head. Here are a few to get you started!";
        break;
      case 'por':
        document.querySelector('#porosity')
        	.style.display = 'block';
          document.querySelector("#changingheader").textContent="WHAT IS MY HAIR'S POROSITY?";
            document.querySelector("h2").textContent="Porosity is determined by how well your hair can absorb and maintain mositure.";
          hideAllPorosity();
        break;
      case 'den':
        document.querySelector('#hairdensity')
        .style.display = 'block';
        document.querySelector("#changingheader").textContent="WHAT IS MY HAIR'S DENSITY?";
          document.querySelector("h2").textContent="Hair density is determined by the closeness of the folicle on the scalp.";
        break;
        case 'ing':
          document.querySelector('#ingredients')
          .style.display = 'block';
          document.querySelector("#changingheader").textContent="WHAT ARE GOOD INGREDIENTS TO USE IN MY HAIR?";
            document.querySelector("h2").textContent="Here are some great ingredients to use for DIY hair masks!";
          break;
    } // end of switch


  } // end of function for clicking

}); // end of forEach()

water.forEach(function(el){
  el.onclick = (e) =>{
      snd.play();
    hideAllPorosity();
    switch (e.target.getAttribute("id")){
      case 'lowdrop':
      document.querySelector('#lowporosity')
        .style.display = 'block';
      break;
        case 'meddrop':
        document.querySelector('#medporosity')
          .style.display = 'block';
        break;
        case 'highdrop':
        document.querySelector('#highporosity')
          .style.display = 'block';
        break;
    }
  }
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  click.play();
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
