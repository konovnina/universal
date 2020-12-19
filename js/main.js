$(document).ready(function () {

  //Табы
  var tabsItem = $('.recommend__tab');
  var tag = $('.article-heading__tag');
  var title = $('.article-heading__title');
  var container = $('.main__content');
  var author = $('#main-author');
  var job = $('#job');
  var avatar = $('#avatar');

  tabsItem.on('click', function (event) {
    var tagFrom = $(this).children('.topic-tag');
    var textFrom = $(this).children('.recommend__article-title');
    var authorFrom = $(this).children('.author');
    var jobFrom = $(this).children('.job');
    var avatarFrom = $(this).children('.avatar');
    var bgFrom = $(this).children('.bg');

    var newTag = tagFrom.text();
    var newText = textFrom.text();
    var newColor = tagFrom.css('color');
    var newAuthor = authorFrom.text();
    var newJob = jobFrom.text();
    var newAvatar = avatarFrom.text();
    var newBG = bgFrom.text();

    tabsItem.removeClass('recommend__tab--active');
    $(this).toggleClass('recommend__tab--active')
    title.html(newText);
    tag.html(newTag);
    author.html(newAuthor);
    job.html(newJob);
    avatar.attr('src', newAvatar);
    container.css('background', "linear-gradient(0deg, rgba(64, 48, 61, 0.35), rgba(64, 48, 61, 0.35)), " + newBG);
    tag.css('color', newColor);

  });

  //Мобильное меню
  var menuButton = $(".navbar-button");
  menuButton.on('click', function () {
    $(".navbar__links").toggleClass('navbar__links--mobile-visible');

  });

  var bookmarkButton = $(".bookmark");
  bookmarkButton.on('click', function () {
    $(this).toggleClass('bookmark--active');

  });


  //Slider
  var mySwiper = new Swiper('.articles-slider', {
    // Optional parameters
    direction: 'horizontal',
    speed: 900,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

  });

  //Обработка формы
  $('.form').each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, заполните это поле",
          minlength: jQuery.validator.format("At least {0} characters required"),
          maxlength: jQuery.validator.format("You have exceeded the maximum length of {0} characters")
        },
        email: {
          email: "Ваш email должен быть в формате name@domain.com"
        },
        phone: {
          maxlength: "Неверный формат",
          minlength: "Неверный формат"
        },
        checkbox: {
          required: "Необходимо подтвердить согласие на обработку данных"
        },
        message: {
          minlength: jQuery.validator.format("Сообщение должно содержать не менее {0} символов"),
        }
      }
    });
  });

  //Настройки модального окна
  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);

  function openModal() {
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.addClass('modal__overlay--visible')
    modalDialog.addClass('modal__dialog--visible')
  };

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $('.modal__overlay');
    var modalDialog = $('.modal__dialog');
    modalOverlay.removeClass('modal__overlay--visible')
    modalDialog.removeClass('modal__dialog--visible')
  };

  document.body.addEventListener('keyup', function (event) {
    var key = event.keyCode;
    if (key == 27) {
      console.log('close modal');
      closeModal(event);
    };
  }, false);

  var checkboxLabel = $(".modal__checkbox-label");
  checkboxLabel.on('click', function () {
    $(this).toggleClass('modal__checkbox-label--checked');

  });

});
