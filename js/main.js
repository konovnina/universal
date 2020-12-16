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
});