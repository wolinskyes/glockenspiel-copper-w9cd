

// wait for content to load:
document.addEventListener("DOMContentLoaded", function() {

  const eventsItems = document.querySelector("#EventsItemsWrapper");


  imagesLoaded(eventsItems, function() {
    // init Isotope after all images have loaded

    new Isotope( eventsItems, {
      // options
      layoutMode: 'masonry',
      itemSelector: '.events_item',
    });

  });


})