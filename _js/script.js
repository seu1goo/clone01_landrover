$(function () {
  //fixMore-START
  $('.moreBtn .dot').on('click', function () {
    $('.moreBtn').css({
      background: '#0c121c',
      transform: 'translate(-50%, -50%), scale(1.2)'
    });
    $(this).fadeOut();
    $('.fixList, .close').fadeIn();
  });

  $('.moreBtn .close').on('click',function () {
    $('.moreBtn').css({
      background: '#005a2b',
      transform: 'translate(-50%, -50%), scale(1)'
    });
    $(this).stop().fadeOut();
    $('.fixList').fadeOut();
    $('.dot').fadeIn();
  });
  //fixMore-END

  //header-START
  if ($(window).width() > 1024) {
    $('.gnb > .gnbVehicles > a').click(function () {
      $(this).next('.sub').slideDown();
    });

    $('.subGnbVehicles > li').each(function () {
      var target = $(this);;
      var index = target.index();

      $('.subPro').css({
        left: '-1000px'
      });

      target.on('mouseenter', function () {
        $('.subPro').eq(index).stop().animate({
          left: '380px'
        });
        $('.subPro').eq(index).siblings().stop().animate({
          left: '-1000px'
        });
      });

      $('.subList .vehiClose').on('click', function () {
        $('.subPro').css({
          left: '-1000px'
        });
        $('.sub').hide();
      });
    });

    $('.gnbPurchase, .gnbOwnership, .gnbExplode').on('click', function () {
      $(this).find('.sub').slideDown();
    })

    $('.gnbPurchase, .gnbOwnership, .gnbExplode').on('mouseleave', function () {
      $(this).find('.sub').slideUp();
    })
  } else if ($(window).width() > 768) {
    $('.gnb > .gnbVehicles > a').click(function () {
      $(this).next('.sub').slideDown();
    });

    $('.subGnbVehicles > li').each(function () {
      var target = $(this);;
      var index = target.index();

      $('.subPro').css({
        left: '-1000px'
      });

      target.on('mouseenter', function () {
        $('.subPro').eq(index).stop().animate({
          left: '80px'
        });
        $('.subPro').eq(index).siblings().stop().animate({
          left: '-1000px'
        });
      });

      $('.subList .vehiClose').on('click', function () {
        $('.subPro').css({
          left: '-1000px'
        });
        $('.sub').hide();
      });
    });

    $('.gnbPurchase, .gnbOwnership, .gnbExplode').on('click', function () {
      $(this).find('.sub').slideDown();
    })

    $('.gnbPurchase, .gnbOwnership, .gnbExplode').on('mouseleave', function () {
      $(this).find('.sub').slideUp();
    })
  } else if ($(window).width() > 640) {
    $('.gnb > .gnbVehicles > a').on('click', function () {
      $(this).next('.sub').slideDown();
    });

    $('.gnb > .gnbVehicles > a').on('mouseleave', function () {
      $(this).next('.sub').slideUp();
    });

    $('.gnbPurchase, .gnbOwnership, .gnbExplode').on('click', function () {
      $(this).find('.sub').slideDown();
    })

    $('.gnbPurchase, .gnbOwnership, .gnbExplode').on('mouseleave', function () {
      $(this).find('.sub').slideUp();
    })
  } else {
    $('.mobMenu').on('click', function () {
      $(this).fadeOut();
      $('.mobClose').fadeIn(600);
      $('.gnb').stop().slideDown();
    });

    $('.mobClose').on('click', function () {
      $(this).fadeOut();
      $('.mobMenu').fadeIn(600);
      $('.gnb').stop().slideUp();
    });
  };
  //iconColor-START

  $('.subCompare').hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_compare_hover.png',
      alt: 'icon_compare_hover'
    });
    $(this).find('span').css({
      color: '#005a2b',
      textDecoration: 'underline'
    });
  });

  $('.subCompare').mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_compare.png',
      alt: 'icon_compare'
    });
    $(this).find('span').css({
      color: '#585858',
      textDecoration: 'none'
    });
  });

  $('.subTit > a').hover(function () {
    $(this).css({
      background: '#fff'
    });
    $(this).find('img').attr({
      src: './_img/ico_subtit_hover.png',
      alt: 'ico_subtit_hover'
    });
    $(this).find('i').css({
      color: '#000'
    });
    $(this).find('span').css({
      color: '#000'
    });
  });

  $('.subTit > a').mouseleave(function () {
    $(this).css({
      background: '#000'
    });
    $(this).find('img').attr({
      src: './_img/ico_subtit.png',
      alt: 'ico_subtit'
    });
    $(this).find('i').css({
      color: '#fff'
    });
    $(this).find('span').css({
      color: '#fff'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(0).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_01_hover.png',
      alt: 'ico_subiconlist_01_hover'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(0).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_01.png',
      alt: 'ico_subiconlist_01'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(1).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_02_hover.png',
      alt: 'ico_subiconlist_02_hover'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(1).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_02.png',
      alt: 'ico_subiconlist_02'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(2).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_03_hover.png',
      alt: 'ico_subiconlist_03_hover'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(2).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_03.png',
      alt: 'ico_subiconlist_03'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(3).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_04_hover.png',
      alt: 'ico_subiconlist_04_hover'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(3).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_04.png',
      alt: 'ico_subiconlist_04'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(4).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_05_hover.png',
      alt: 'ico_subiconlist_05_hover'
    });
  });

  $('.gnbPurchase .subIconList ul li').eq(4).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_05.png',
      alt: 'ico_subiconlist_05'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(0).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_06_hover.png',
      alt: 'ico_subiconlist_06_hover'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(0).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_06.png',
      alt: 'ico_subiconlist_06'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(1).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_07_hover.png',
      alt: 'ico_subiconlist_07_hover'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(1).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_07.png',
      alt: 'ico_subiconlist_07'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(2).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_08_hover.png',
      alt: 'ico_subiconlist_08_hover'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(2).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_08.png',
      alt: 'ico_subiconlist_08'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(3).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_09_hover.png',
      alt: 'ico_subiconlist_09_hover'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(3).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_09.png',
      alt: 'ico_subiconlist_09'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(4).hover(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_10_hover.png',
      alt: 'ico_subiconlist_10_hover'
    });
  });

  $('.gnbOwnership .subIconList ul li').eq(4).mouseleave(function () {
    $(this).find('img').attr({
      src: './_img/ico_subiconlist_10.png',
      alt: 'ico_subiconlist_10'
    });
  });
  //iconColor-END
  //header-END

  //silde-START
  $('.mainVisual').each(function () {
    $('.mainSilde').eq(0).siblings().stop().css({
      left: '-2000px'
    });

    var slideI = 0;
    var timer;

    function setTimer() {
      timer = setInterval(function () {
        if (slideI < 3) {
          slideI++;
        } else {
          slideI = 0;
        }
        $('.mainSilde').eq(slideI).siblings().stop().animate({
          left: '-2000px'
        });
        $('.mainSilde').eq(slideI).stop().animate({
          left: '0'
        });
      }, 6000);
    };
    setTimer();

    $('.startBtn').on('click', function () {
      $(this).fadeOut();
      $('.pauseBtn').fadeIn();
      clearInterval(timer)
    });

    $('.pauseBtn').on('click', function () {
      $(this).fadeOut();
      $('.startBtn').fadeIn();
      setTimer();
    });

    setInterval(function () {
      $('.pageBtn').on('click', function () {
        var $pageBtn = $(this);
        var $pageI = $pageBtn.index() - 2;

        $('.mainSilde').eq($pageI).siblings().stop().animate({
          left: '-2000px'
        });
        $('.mainSilde').eq($pageI).stop().animate({
          left: '0'
        });
      });
    }, 6000);
  });
  //silde-END

  //swiper-START
  if ($(window).width() > 1025) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 15,
      slidesPerGroup: 6,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '.arrowLeft',
        nextEl: '.arrowRight',
      },
    });
  } else if ($(window).width() > 641) {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '.arrowLeft',
        nextEl: '.arrowRight',
      },
    });
  } else {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        prevEl: '.arrowLeft',
        nextEl: '.arrowRight',
      },
    });
  }
  //swiper-END

  //iconArea-START
  $('.icoCompare').hover(function () {
    $('.icoCompare > img').attr({
      src: './_img/ico_iconarea01_hover.png',
      alt: 'compare_icon01_hover'
    });
  });
  $('.icoCompare').mouseleave(function () {
    $('.icoCompare > img').attr({
      src: './_img/ico_iconarea01.png',
      alt: 'compare_icon01'
    });
  });

  $('.icoBulid').hover(function () {
    $('.icoBulid > img').attr({
      src: './_img/ico_iconarea02_hover.png',
      alt: 'compare_icon02_hover'
    });
  });
  $('.icoBulid').mouseleave(function () {
    $('.icoBulid > img').attr({
      src: './_img/ico_iconarea02.png',
      alt: 'compare_icon02'
    });
  });

  $('.icoBook').hover(function () {
    $('.icoBook > img').attr({
      src: './_img/ico_iconarea03_hover.png',
      alt: 'compare_icon03_hover'
    });
  });
  $('.icoBook').mouseleave(function () {
    $('.icoBook > img').attr({
      src: './_img/ico_iconarea03.png',
      alt: 'compare_icon03'
    });
  });

  $('.icoTest').hover(function () {
    $('.icoTest > img').attr({
      src: './_img/ico_iconarea04_hover.png',
      alt: 'compare_icon04_hover'
    });
  });
  $('.icoTest').mouseleave(function () {
    $('.icoTest > img').attr({
      src: './_img/ico_iconarea04.png',
      alt: 'compare_icon04'
    });
  });
  //iconArea-END

  //footerSelect-START
  $('.international').click(function () {
    $(this).css({
      background: '#ddd',
      color: '#000'
    });
    $(this).find('.site').stop().slideToggle();
  });
  //footerSelect-END

});