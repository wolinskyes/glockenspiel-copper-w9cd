import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default {
  populateFeaturedDrawerEvent(){
    // fetch endpoint, then locate drawer event element
    // and add image and title from json response
    const drawerEventElement = document.querySelector('#DrawerEventContainer');
    const drawerLink = document.querySelector('#DrawerEventLink');
    const drawerImage = document.querySelector('#DrawerEventImage');
    const drawerEventCaption = document.querySelector('#DrawerEventCaption');
    const url = "/events-list?format=json-pretty"

    fetch(url)
      .then(response => response.json())
      .then(data => {
        // console.log("DATA",data.items)
        const firstFeaturedEvent = data.items.find(event => event.starred);
        if(firstFeaturedEvent){
          drawerImage.src = firstFeaturedEvent.assetUrl;
          drawerLink.href = firstFeaturedEvent.fullUrl;
          drawerEventCaption.textContent = firstFeaturedEvent.title;
          drawerEventElement.href = firstFeaturedEvent.url;
        } else {
          drawerEventElement.style.display = 'none';
        }
      }
    ).catch(error => {
      console.warn('Featured Event fetch failed with:', error);
    });

  },
  attachDrawerMenu() {
    const drawerOpen = document.querySelector('.drawer-hamburger');
    const drawerClose = document.querySelector('.drawer-close');
    const drawerContents = document.querySelector('#DrawerContents');

    drawerOpen.addEventListener('click', function() {
      drawerContents.classList.add('is_open');
    })

    drawerClose.addEventListener('click', function() {
      drawerContents.classList.remove('is_open');
    })

  },
  attachStickyNav() {
    const nav = document.querySelector('#BackToTop');
    // nav on click scroll to top
    nav.addEventListener('click', function() {
      gsap.to(window, {duration: 0.125, scrollTo: 0});
    });

    ScrollTrigger.create({
      trigger: 'body',
      start: '0px 0px',
      end: 'bottom bottom',
      onEnter () {
        nav.classList.add('is_sticky');
      },
      onLeaveBack () {
        nav.classList.remove('is_sticky');
      }
    });
  }
}