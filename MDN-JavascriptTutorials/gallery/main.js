const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imgName = ['pic1','pic2','pic3','pic4','pic5'];
/* Declaring the alternative text for each image file */
const altText = {'pic1':'Eye closeup','pic2':'feather','pic3':'flowers','pic4':'Egypt wall art','pic5':'butterfly'};
/* Looping through images */
for (img of imgName) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${img}.jpg`);
  newImage.setAttribute('alt', `${altText[img]}`);
  thumbBar.appendChild(newImage);
  newImage.addEventListener("click", (e) => {
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
    displayedImage.setAttribute('alt', e.target.getAttribute('alt'));
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    let mode = btn.getAttribute("class");
    if (mode === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
    } else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(0,0,0,0)";
    }
});