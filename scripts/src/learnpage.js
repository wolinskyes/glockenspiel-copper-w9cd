import { tns } from "../../node_modules/tiny-slider/src/tiny-slider"


// wait for content to load:
document.addEventListener("DOMContentLoaded", function() {
  const buttons = [
    document.querySelector('#PrevButton'),
document.querySelector('#NextButton')
  ];
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
    300: {
      edgePadding: 0,
      gutter: 0,
      items: 1
    }
  }
});
})