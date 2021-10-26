const epicMix = [
  "Sublime",
  "Say it Isn't So",
  "I Guess That's Why They Call it the Blues",
  "Just the Way You Are",
  "Say So",
  "I'm Every Woman",
  "Save Your Tears",
  "Love Shack",
  "Save the Best for Last",
  "Heat of the Moment",
  "Can't Help Falling In Love (With You)",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great pop hits!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
