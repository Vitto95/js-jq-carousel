$(document).ready(function () {
  //references
  var anglePrev = $(".vg-prev");
  var angleNext = $(".vg-next");

  console.log(angleNext);

  //events
  anglePrev.click(prevImage);

  angleNext.click(nextImage);

  //functions

  function prevImage() {
    var activeImage = $(".wrapper-images img.active");
    var activeCircle = $(".wrapper-buttons .vg-circle.active");
    console.log(activeCircle);
    activeImage.removeClass("active");
    activeCircle.removeClass("active");

    if (activeImage.prev("img").length === 0) {
      $(".wrapper-images img").last().addClass("active");
      $(".wrapper-buttons .vg-circle").last().addClass("active");
    } else {
      activeImage.prev("img").addClass("active");
      activeCircle.prev(".vg-circle").addClass("active");
    }
  }

  function nextImage() {
    //dichiarazione variabili
    var activeImage = $(".wrapper-images img.active"); //immagine con display:block
    var activeCircle = $(".wrapper-buttons .vg-circle.active");

    activeImage.removeClass("active");
    activeCircle.removeClass("active");

    if (activeImage.next("img").length === 0) {
      $(".wrapper-images img").first().addClass("active");
      $(".wrapper-buttons .vg-circle").first().addClass("active");
    } else {
      activeImage.next("img").addClass("active");
      activeCircle.next(".vg-circle").addClass("active");
    }
  }
});
