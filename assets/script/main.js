// CustomerVoices Section
$(document).ready(function(){
  $('.customer--voice__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true, // スマホでも中央配置
          centerPadding: '40px' // スマホでも左右のスライドを表示
        }
      }
    ]
  });
});
