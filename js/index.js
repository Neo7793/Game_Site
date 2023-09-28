$(".hamburger").click(function () {
  $(".hamburgermenu").fadeIn(0);
  $(".hamburgermenu").animate({ right: "0" }, 500);
  $(".Dark").fadeIn(0);
});
$(".hamburgermenu__Icon").click(function () {
  $(".hamburgermenu").animate({ right: "-40rem" }, 500);
  $(".hamburgermenu").fadeOut(0);
  $(".Dark").fadeOut(0);
});
