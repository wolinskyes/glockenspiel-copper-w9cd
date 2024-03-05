import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"


// wait for content to load:
document.addEventListener("DOMContentLoaded", function() {
  const buttons = [
    document.querySelector('#PrevButton'),
    document.querySelector('#NextButton')
  ];

  const libraryWrap = document.querySelector("#LibraryItemsWrapper");
  const filterDropdown = document.querySelector("#LibraryFilterDropdown");
  const searchInput = document.querySelector("#LibrarySearchInput");

  let iso = null;

  imagesLoaded(libraryWrap, function() {
    iso = new Isotope(libraryWrap,{
      itemSelector: '.library_read_item',
      layoutMode: 'masonry'
    });


    filterDropdown.addEventListener('change', function(event) {
      iso.arrange({
        filter: function( itemElem ) {
          return itemElem.dataset.categories.includes(event.target.value);
        }
      });
    });

  });


  // attach isotope to the container:

  const slider = tns({
    container: '.fast_five_list',
    items: 3,
    slideBy: 'page',
    controlsPosition: 'top',
    navPosition: 'bottom',
    controlsContainer: '.tns-custom-controls',
    prevButton: buttons[0],
    nextButton: buttons[1],
    responsive: {
      // min-width equivalent:
      300: {
        edgePadding: 0,
        gutter: 0,
        items: 1
      },
      768: {
        edgePadding: 0,
        items: 3
      }
    }
  });
})