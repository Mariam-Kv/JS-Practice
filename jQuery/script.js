$(document).ready(function () {
  let btn = $("#btn");
  btn.on("click", () => alert(3));
  $(".image").hover(function () {
    $(".image").toggleClass("height");
  });
});
