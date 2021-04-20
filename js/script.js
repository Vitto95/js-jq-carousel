$(document).ready(function () {
  //references
  var anglePrev = $(".vg-prev");
  var angleNext = $(".vg-next");
  console.log(angleNext);

  //events
  /*   anglePrev.click(prevImage);
   */
  angleNext.click(nextImage);

  //functions

  /* function prevImage() {

  } */

  function nextImage() {
    //dichiarazione variabili
    var activeImage = $(".wrapper-images img.active"); //immagine con display:block
    activeImage.removeClass("active");
    console.log(activeImage);

    if (activeImage.next("img").length === 0) {
      $(".wrapper-images img").first().addClass("active");
    } else {
      activeImage.next("img").addClass("active");
      console.log(activeImage.next("img"));
    }
  }
});
