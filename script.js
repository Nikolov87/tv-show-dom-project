//You can edit ALL of the code here
const rootElem = document.getElementById("root");



// tvshow.forEach((element) => {
//   // debugger;
//   console.log(element.name);
//   let title = document.createElement("h2");
//   title.innerText = element.name + element.number;
//   rootElem.appendChild(title);
// });

function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  // rootElem.textContent = `Got ${episodeList.length} episode(s)`;
  episodeList.forEach(episode => {
     
    const episodeContainer = document.createElement("div");
     episodeContainer.className = "episode-container"
     rootElem.appendChild(episodeContainer)
     
     const episodeName = document.createElement("h4");
     episodeName.innerText = `${episode.name} - ${episodeCodeFormatter(episode.season, episode.number)}`; 
     episodeContainer.appendChild(episodeName);
     
     const episodeImg = document.createElement("img");
     episodeImg.src = episode.image.medium;
     episodeContainer.appendChild(episodeImg);

     const episodeSummary = document.createElement("p");
     episodeSummary.innerHTML = episode.summary;
     episodeContainer.appendChild(episodeSummary);

     const select = document.querySelector("select");
     const option = document.createElement("option");
     option.innerText = `${episodeCodeFormatter(episode.season, episode.number)} - ${episode.name}`;
     select.appendChild(option);
     
  });

}

function episodeCodeFormatter(season, number) {
  season = season < 10 ? "0" + season : season;
  number = number < 10 ? "0" + number : number;
  return `S${season}E${number}`;

}


window.onload = setup;
