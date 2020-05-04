import "regenerator-runtime";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'popper.js'
import "./styles/style.css";

$(window).scroll(function(){
  var scroll = this.scrollY;
  if (scroll >= 500) {
    $('#nav-fixed').fadeIn(500);
    $('#overview h2').fadeIn(1000)
    $('.fade-over1').slideUp(1000)
  } else {
    $('#nav-fixed').fadeOut(500);
  }
  if (scroll >= 600) {
    $('#overview p').fadeIn(1000);
    $('.fade-over2').slideUp(1000)
  }
  if (scroll >= 1200) {
    $('#search h2').fadeIn(1000);
    $('.fade-s1').slideUp(1000)
  }
  if (scroll >= 1350) {
    $('#search form').fadeIn(1000);
    $('.fade-s2').slideUp(1000)
  }
  if (scroll >= 2000) {
    $('#about-us h2').fadeIn(1000);
    $('.fade-about1').slideUp(1000);
  }
  if (scroll >= 2150) {
    $('#about-us p').fadeIn(1000);
    $('.fade-about2').slideUp(1000)
  }
});