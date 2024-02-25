// For long videos
const longVideo = [];
for (let i = 1; i <= 6; i++) {
  longVideo.push({
    poster: `./works-assest/thumbnail/long-video/photo${i}.jpg`,
    src: `./works-assest/video/long-video/video${i}.mp4`,
  });
}
let videoContainer = document.getElementById("videoContainer");

longVideo.forEach((videoData, index) => {
  // creating video container
  let videoElement = document.createElement("video");
  videoElement.setAttribute("controls", "");
  videoElement.setAttribute("width", "600");
  videoElement.setAttribute("poster", videoData.poster);
  videoElement.style.backgroundImage = `url(${videoData.poster})`;
  videoElement.style.backgroundPosition = "center";
  videoElement.style.backgroundSize = "cover";
  videoElement.style.backgroundRepeat = "no-repeat";
  // video card container
  let videoCard = document.createElement("div");
  videoCard.classList.add("videoCard");
  let sourceElement = document.createElement("source");
  sourceElement.setAttribute("src", videoData.src);
  sourceElement.setAttribute("type", "video/mp4");

  // play icon
  let playIcon = document.createElement("i");
  playIcon.classList.add("fa-solid", "fa-play");

  playIcon.onclick = () => {
    videoElement.play();
  };
  videoElement.appendChild(sourceElement);
  videoCard.appendChild(playIcon);
  videoCard.appendChild(videoElement);
  videoContainer.appendChild(videoCard);

  videoElement.addEventListener("pause", function () {
    playIcon.style.display = "flex";
  });

  videoElement.addEventListener("play", function () {
    playIcon.style.display = "none";
  });
});

// for short videos
const shortVideo = [];
for (let i = 1; i <= 8; i++) {
  shortVideo.push({
    poster: `./works-assest/thumbnail/short-video/photo${i}.jpg`,
    src: `./works-assest/video/short-video/video${i}.mp4`,
  });
}
const shortsVideoContainer = document.getElementById("shortsVideoContainer");
shortVideo.forEach((videoData) => {
  // video element created
  let videoElement = document.createElement("video");
  videoElement.setAttribute("controls", "");
  videoElement.setAttribute("width", "600");
  videoElement.setAttribute("poster", videoData.poster);
  videoElement.style.backgroundImage = `url(${videoData.poster})`;
  videoElement.style.backgroundPosition = "center";
  videoElement.style.backgroundSize = "cover";
  videoElement.style.backgroundRepeat = "no-repeat";
  // Video card div created
  let shortVideoCard = document.createElement("div");
  shortVideoCard.classList.add("shortVideoCard");

  // source element created
  let sourceElement = document.createElement("source");
  sourceElement.setAttribute("src", videoData.src);
  sourceElement.setAttribute("type", "video/mp4");

  // play icon
  let playIcon = document.createElement("i");
  playIcon.classList.add("fa-solid", "fa-play");
  playIcon.onclick = () => {
    videoElement.play();
  };

  videoElement.appendChild(sourceElement);
  shortVideoCard.appendChild(videoElement);
  shortVideoCard.appendChild(playIcon);
  shortsVideoContainer.appendChild(shortVideoCard);

  videoElement.addEventListener("pause", function () {
    playIcon.style.display = "flex";
  });

  videoElement.addEventListener("play", function () {
    playIcon.style.display = "none";
  });
});
