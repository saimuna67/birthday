let currentPage = 1;
    const buttons = document.querySelectorAll("button");

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        document.getElementById(`page${currentPage}`).style.display = "none";
        currentPage++;
      });
    });


function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.left = Math.random() * window.innerWidth + 'px';
  star.style.animationDuration = (Math.random() * 2 + 1) + 's';
  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 3000);
}
setInterval(createStar, 50);


const img = document.querySelector(".mainimg");
const galleryDiv = document.querySelector(".hiddenImg");
img.addEventListener("click", function() {
  this.style.display = "none";
    galleryDiv.style.display = "block";
});





 const imgs = document.querySelectorAll('.mainImg');
  let expanded = false;

  // get viewport center
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  document.body.addEventListener('click', () => {
    expanded = !expanded;
    const total = imgs.length;
    const radius = 150; // distance from center

    imgs.forEach((img, index) => {
      if (expanded) {
        const angle = (index / total) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        // translate img to calculated position
        img.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      } else {
        // back to center
        img.style.transform = 'translate(-50%, -50%)';
      }
    });
  });