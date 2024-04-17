// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


document.addEventListener("DOMContentLoaded", function() {
      const container = document.getElementById('floatingDots');
      const numberOfDots = 20;
    
      for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.style.width = dot.style.height = `${Math.random() * 20 + 10}px`;
        dot.style.left = `${Math.random() * window.innerWidth}px`;
        dot.style.top = `${Math.random() * window.innerHeight}px`;
        container.appendChild(dot);
      }
    
      document.addEventListener('mousemove', e => {
        document.querySelectorAll('.dot').forEach(dot => {
          const speed = parseFloat(dot.style.width) / 10;
          const xMove = (e.clientX - window.innerWidth / 2) * speed / 100;
          const yMove = (e.clientY - window.innerHeight / 2) * speed / 100;
          dot.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
      });
    });
  
    window.addEventListener('resize', function() {
      document.querySelectorAll('.dot').forEach(dot => {
        dot.style.left = `${Math.random() * window.innerWidth}px`;
        dot.style.top = `${Math.random() * window.innerHeight}px`;
      });
    });

    let scrollTimeout;  // Variable to keep track of timeout

document.addEventListener("scroll", function() {
  clearTimeout(scrollTimeout);  // Clear previous timeout
  document.getElementById('floatingDots').style.opacity = 0;  // Hide dots

  scrollTimeout = setTimeout(() => {
    document.getElementById('floatingDots').style.opacity = 1;  // Show dots after scrolling stops
  }, 150);  // Delay before showing the dots again
});
