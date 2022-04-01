const userImg = document.getElementById("userImg");
const topText = document.getElementById("topText");
const botText = document.getElementById("botText");
const tiles = document.getElementById("tiles");
const submitMeme = document.getElementById("createMeme");

window.onload = function () {
  submitMeme.addEventListener("submit", function (e) {
    e.preventDefault();
    let newMeme = {
      img: userImg.value,
      topTxt: topText.value,
      botTxt: botText.value,
    };

    let tile = createMemeObject(newMeme);
    tiles.appendChild(tile);

    clearInputs();
  });
};
function createMemeObject(newMeme) {
  let tile = document.createElement("div");
  let img = document.createElement("img");
  let topCaption = document.createElement("span");
  let bottomCaption = document.createElement("span");
  let removeImg = document.createElement("img");

  tile.className = "tile";
  img.src = newMeme.img;
  img.className = "img-content";

  topCaption.className = "topCaption";
  topCaption.innerText = newMeme.topTxt;
  bottomCaption.className = "bottomCaption";
  bottomCaption.innerText = newMeme.botTxt;

  removeImg.className = "deleteImage";
  removeImg.src = "x-icon.png";

  removeImg.addEventListener("click", function (e) {
    e.preventDefault();
    removeMeme(e);
  });

  tile.appendChild(img);
  tile.appendChild(topCaption);
  tile.appendChild(bottomCaption);
  tile.appendChild(removeImg);

  return tile;
}

function clearInputs() {
  userImg.value = "";
  topText.value = "";
  botText.value = "";
}

function removeMeme(event) {
  event.target.parentNode.remove();
}
