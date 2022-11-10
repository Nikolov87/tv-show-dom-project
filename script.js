//You can edit ALL of the code here
const rootElem = document.getElementById("root");
console.log(rootElem);
let tvshow = getAllEpisodes();

tvshow.forEach((element) => {
  // debugger;
  console.log(element.name);
  let title = document.createElement("h2");
  title.innerText = element.name + element.season;
  rootElem.appendChild(title);
});

// function setup() {
//   const allEpisodes = getAllEpisodes();
//   makePageForEpisodes(allEpisodes);
// }

// function makePageForEpisodes(episodeList) {
//   const rootElem = document.getElementById("root");
//   rootElem.textContent = `Got ${episodeList.length} episode(s)`;
// }

// window.onload = setup;
