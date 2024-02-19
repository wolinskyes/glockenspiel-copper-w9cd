import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

export default {
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