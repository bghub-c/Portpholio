document.querySelector('a').addEventListener('click', function (e) {
    e.preventDefault();
    const link = this;
    link.style.animation = 'none'; // Reset the animation
    setTimeout(function() {
      link.style.animation = 'clickAnimation 0.3s'; // Apply the animation
    }, 0);
  });

  document.addEventListener("mousemove", parallax);
  function parallax(event) {
    this.querySelectorAll(".parallax-wrapspan").forEach((shift) => {
      const position = shift.getAttribute("value");
      const x = (window.innerWidth - event.pageX * position) / 90;
      const y = (window.innerHeight - event.pageY * position) / 90;
  
      shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
  
  let shadow = document.querySelector("#shadow");
const mouse_shadow = function(event) {
  shadow.style.top = event.pageY + 'px';
  shadow.style.left = event.pageX + 'px';
}

document.querySelector("body").onload = function(){
   this.addEventListener("mousemove", mouse_shadow)
}