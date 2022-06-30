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

$(function () {
   $("#accordion").accordion({
      heightStyle: "content"
   });
});

document.addEventListener('DOMContentLoaded', function () {
   document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
      tabsBtn.addEventListener('click', function (event) {
         const path = event.currentTarget.dataset.path

         document.querySelectorAll(".tabs-item").forEach(function (tabContent) {
            tabContent.classList.remove("tabs-item--active")
         })

         document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active')

      })
   })
});

