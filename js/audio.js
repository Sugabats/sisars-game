function handleAudio() {
    if (localStorage.getItem("isAudioPlaying") === "true") {
      document.getElementById("background-audio").play();
      localStorage.setItem("isAudioPlaying", "true");
    }
  }