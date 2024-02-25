const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

function playVideoWithDarkBackground(videoId) {
  const darkBackground = document.createElement("div");
  darkBackground.style.position = "fixed";
  darkBackground.style.top = "0";
  darkBackground.style.left = "0";
  darkBackground.style.width = "100%";
  darkBackground.style.height = "100%";
  darkBackground.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  darkBackground.style.zIndex = "9998";

  const videoContainer = document.createElement("div");
  videoContainer.style.position = "fixed";
  videoContainer.style.top = "50%";
  videoContainer.style.left = "50%";
  videoContainer.style.transform = "translate(-50%, -50%)";
  videoContainer.style.width = "80%";
  videoContainer.style.height = "80%";
  videoContainer.style.backgroundColor = "#000";
  videoContainer.style.zIndex = "9999";

  const videoPlayer = document.createElement("iframe");
  videoPlayer.style.width = "100%";
  videoPlayer.style.height = "100%";
  videoPlayer.style.border = "none";
  videoPlayer.setAttribute("allowfullscreen", "");
  videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  videoContainer.appendChild(videoPlayer);

  const closeButton = document.createElement("button");
  closeButton.innerText = "X";
  closeButton.style.position = "fixed";
  closeButton.style.top = "10px";
  closeButton.style.right = "10px";
  closeButton.style.padding = "8px 10px";
  closeButton.style.fontSize = "18px";
  closeButton.style.backgroundColor = "transparent";
  closeButton.style.color = "#fff";
  closeButton.style.border = "none";
  closeButton.style.cursor = "pointer";
  closeButton.style.zIndex = "10001"; // Higher zIndex to be above the video container

  function closeVideoWithDarkBackground() {
    document.body.removeChild(darkBackground);
    document.body.removeChild(videoContainer);
  }

  function handleDarkBackgroundClick(event) {
    if (event.target === darkBackground) {
      closeVideoWithDarkBackground();
      closeButton.style.display = "none"; // Hide the button after clicking on it
    }
  }

  closeButton.addEventListener("click", function () {
    closeVideoWithDarkBackground();
    closeButton.style.display = "none"; // Hide the button after clicking on it
  });

  darkBackground.addEventListener("click", handleDarkBackgroundClick);

  document.body.appendChild(darkBackground);
  document.body.appendChild(videoContainer);
  document.body.appendChild(closeButton); // Append the closeButton to the document body

  const player = new YT.Player(videoPlayer, {
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  });

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
      closeButton.style.display = "block";
    } else {
      closeButton.style.display = "none";
    }
  }
}

function getVideoIdFromUrl(url) {
  const urlParams = new URLSearchParams(new URL(url).search);
  return urlParams.get("v");
}

document.getElementById("videoButton1").addEventListener("click", function () {
  const videoUrl = "https://www.youtube.com/watch?v=xMI78o88gkw";
  const videoId = getVideoIdFromUrl(videoUrl);
  playVideoWithDarkBackground(videoId);
});

document.getElementById("videoButton2").addEventListener("click", function () {
  const videoUrl = "https://www.youtube.com/watch?v=yW2ee-9J8Xw";
  const videoId = getVideoIdFromUrl(videoUrl);
  playVideoWithDarkBackground(videoId);
});

document.getElementById("videoButton3").addEventListener("click", function () {
  const videoUrl = "https://www.youtube.com/watch?v=X9AUngvK2-s";
  const videoId = getVideoIdFromUrl(videoUrl);
  playVideoWithDarkBackground(videoId);
});

document.getElementById("videoButton4").addEventListener("click", function () {
  const videoUrl = "https://www.youtube.com/watch?v=hidnYcP-q5Q&t=287s";
  const videoId = getVideoIdFromUrl(videoUrl);
  playVideoWithDarkBackground(videoId);
});

document.getElementById("videoButton4").addEventListener("click", function () {
  const videoUrl = "https://www.youtube.com/shorts/WukP8NCEXvw";
  const videoId = getVideoIdFromUrl(videoUrl);
  playVideoWithDarkBackground(videoId);
});
document.getElementById("videoButton5").addEventListener("click", function () {
  const videoUrl = "https://www.youtube.com/watch?v=xMI78o88gkw";
  const videoId = getVideoIdFromUrl(videoUrl);
  playVideoWithDarkBackground(videoId);
});


