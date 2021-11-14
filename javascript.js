//Navbar
  //Nav left
  function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  //Navbar animation
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("topnav").style.top = "0";
    } else {
      document.getElementById("topnav").style.top = "-15vh";
    }
    prevScrollpos = currentScrollPos;
  }
  //Search
  function search() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("menu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
//Header
  //Header animation
    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("slide");
      var dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
//View Count
  const countEl = document.getElementById('count');

  updateVisitCount();

  function updateVisitCount() {
    fetch('https://api.countapi.xyz/hit/kesign.github.ioplace/visits')
    .then(res => res.json())
    .then(res => {
      countEl.innerHTML = res.value;
    })
  }