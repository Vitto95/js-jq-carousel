$(document).ready(function () {
  //references
  var anglePrev = $(".vg-prev");
  var angleNext = $(".vg-next");
  var imageCounter = $(".container").children(); //figli diretti di container
  console.log(imageCounter);

  //Creazione Bottoni
  //Creo il primo elemento con classe active

  $(".wrapper-buttons").append(
    '<i class="fas fa-circle vg-circle active"></i>'
  );

  //Creo gli altri bottoni

  for (var i = 0; i < imageCounter.length - 1; i++) {
    $(".wrapper-buttons").append('<i class="fas fa-circle vg-circle"></i>');
    var btnCounter = $(".wrapper-buttons").children();
  }

  //events

  //Eventi per le freccette scorrimento

  anglePrev.click(prevImage);

  angleNext.click(nextImage);

  //evento per bottoni scorrimento

  //functions

  function prevImage() {
    var activeImage = $(".wrapper-images img.active");
    var activeCircle = $(".wrapper-buttons .vg-circle.active");
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
