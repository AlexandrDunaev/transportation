$(document).ready(function () {
   $('.bxslider').bxSlider({
      autoStart: true,
      speed: 800,
      mode: 'fade',
      auto: true,
      pause: 4000,
      touchEnabled: false
   });
});

window.addEventListener('DOMContentLoaded', function () {
   document.querySelector('#burger').addEventListener('click', function () {
      document.querySelector('#burger').classList.toggle('active'),
         document.querySelector('#burger-menu').classList.toggle('is-active')
   })
});