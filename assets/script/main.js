// CustomerVoices Section
$(document).ready(function(){
  $('.customer-voice__slider').slick({
    infinite: true,
    slidesToShow: 3,  // PC版で3枚表示
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  // SP版で1枚表示
          slidesToScroll: 1,
        }
      }
    ]
  });
});

// Q&A
$(document).ready(function() {
  $('.qa__answer').hide();
});

$('.qa__item').on('click', function() {
  var answerBox = $(this).closest('.qa__item').find('.qa__answer');
  answerBox.slideToggle();

  var icon = $(this).closest('.qa__item').find('.bi-caret-down-fill, .bi-caret-up-fill');
  if (icon.hasClass('bi-caret-down-fill')) {
    icon.removeClass('bi-caret-down-fill').addClass('bi-caret-up-fill');
  } else {
    icon.removeClass('bi-caret-up-fill').addClass('bi-caret-down-fill');
  }
});

  document.addEventListener("DOMContentLoaded", function () {
    const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < smoothScrollTrigger.length; i++) {
      smoothScrollTrigger[i].addEventListener('click', function (e) {
        e.preventDefault();
        let href = this.getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));

        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        const target = rect + offset;
        const s = document.documentElement.style;
        s.scrollBehavior = 'smooth';

        window.scrollTo({
          top: target,
          behavior: 'smooth'
        });

        setTimeout(() => {
          s.scrollBehavior = 'auto';
        }, 1000);
      });
    }
  });

// CustomerVoices Section
  $(document).ready(function(){
    $('.customer-voice__slider').slick({
      infinite: true,
      slidesToShow: 1,  // SP版で1枚表示
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      centerMode: true,  // SP版で中央表示とサイドに少し表示
      centerPadding: '30px',  // 左右に少し表示
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,  // PC版で3枚表示
            slidesToScroll: 1,
            centerMode: false
          }
        }
      ]
    });
  });
