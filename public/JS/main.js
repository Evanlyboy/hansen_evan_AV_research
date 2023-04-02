let isDyslexic = true;
let isDark = true;

const body = document.getElementsByTagName('body')[0];
const video = document.getElementById("video");
const seekBar = document.getElementById('video-seek-bar');

function toggleFont() {
  if (isDyslexic) {
    body.style.fontFamily = 'OpenDyslexic';
  } else {
    body.style.fontFamily = 'Arial';
  }
  isDyslexic = !isDyslexic;
}

function toggleDarkMode() {
    if (isDark) {
      body.style.background = '#2d2d2d';
      body.style.color = 'white';
    } else {
      body.style.background = 'white';
      body.style.color = '#2d2d2d';
    }
    isDark = !isDark;
  }

// Play & Pause for video
video.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Seek bar for video
// Update the seek bar as the video plays
video.addEventListener('timeupdate', function() {
  const percentage = (video.currentTime / video.duration) * 100;
  seekBar.value = percentage;
});

// Seek the video when the user drags the seek bar
seekBar.addEventListener('input', function() {
  const time = video.duration * (seekBar.value / 100);
  video.currentTime = time;
});





// Vue Graveyard
// const app = Vue.createApp({


//   data() {

    
//     return {
//       dyslexicToggle: false,

//         // These three are for displaying the subtitle file as an element on the page
//       videoSrc: 'video.mp4',
//       captionSrc: 'captions.vtt',
//       captionText: '',
//     }
//   },

  
//   mounted() {
//     // const video = this.$refs.video
//     // // Looks for when the time is changed 
//     // video.addEventListener('timeupdate', this.handleTimeUpdate)
//   },


//   methods: {

//     toggleFont(){

//     },

//     // Here we are syncing the video time with the caption time
//     handleTimeUpdate() {
//       const video = this.$refs.video
//       const captions = video.textTracks[0]
//       if (captions.activeCues.length > 0) {
//         this.captionText = captions.activeCues[0].text
//       } else {
//         this.captionText = ''
//       }
//     }
// }

// });

// app.mount('#app');