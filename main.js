// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)
// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS
// Consiglio del giorno:
// Come sempre è importante usare la documentazione di jQuery per scoprire/rinfrescare memoria sulle funzioni che potrebbero esserci utili.

$(document).ready(function() {

  $(".next").click(
    function() {
      var imgActive = $(".active");
      imgActive.removeClass("active");

      if (imgActive.hasClass("last")) {
        var nextImg = $(".first");
      } else {
        nextImg = imgActive.next();
      }

      nextImg.addClass("active");
    }
  );

  $(".prev").click(
    function() {
      var imgActive = $(".active");
      imgActive.removeClass("active");

      if (imgActive.hasClass("first")) {
        var nextImg = $(".last");
      } else {
        nextImg = imgActive.prev();
      }

      nextImg.addClass("active");
    }
  );
});

$(document).keydown(
  function(event) {
    if (event.which == 39) {

    var imgActive = $(".active");
    imgActive.removeClass("active");

    if (imgActive.hasClass("last")) {
      var nextImg = $(".first");
    } else {
      nextImg = imgActive.next();
    }

    nextImg.addClass("active");
  } else if (event.which == 37) {
    var imgActive = $(".active");
    imgActive.removeClass("active");

    if (imgActive.hasClass("first")) {
      var nextImg = $(".last");
    } else {
      nextImg = imgActive.prev();
    }

    nextImg.addClass("active");
  }
  }
);
