$(document).ready(function () {
  var tabsItem = $('.recommend__tab');
  var tag = $('.article-heading__tag');
  var title = $('.article-heading__title');
  var container = $('.main__content')

  tabsItem.on('click', function (event) {
    var tagFrom = $(this).children('.topic-tag');
    var textFrom = $(this).children('.recommend__article-title');

    var newTag = tagFrom.text();
    var newText = textFrom.text();
    var newColor = tagFrom.css('color');

    tabsItem.removeClass('recommend__tab--active');
    $(this).toggleClass('recommend__tab--active')
    title.html(newText);
    tag.html(newTag);
    tag.css('color', newColor);

  });

  //Мобильное меню
  var menuButton = $(".navbar-button");
  menuButton.on('click', function () {
    $(".navbar__links").toggleClass('navbar__links--mobile-visible');

  });
});