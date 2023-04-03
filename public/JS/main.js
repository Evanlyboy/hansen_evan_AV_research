    const body = document.getElementsByTagName('body')[0];
    const video = videojs('video');

    // const englishAudio = document.getElementById('englishAudio');
    // const japaneseAudio = document.getElementById('japaneseAudio');
    const englishAudioButton = document.getElementById('englishAudioButton');
    const japaneseAudioButton = document.getElementById('japaneseAudioButton');
    // let currentAudioTrack = null;

    const englishCaptions = video.addRemoteTextTrack({
        kind: 'captions',
        label: 'English',
        srclang: 'en',
        default: true,
        src: 'assets/silentVoiceEnglish.vtt'
      });

    const japaneseCaptions = video.addRemoteTextTrack({
        kind: 'captions',
        label: 'Japanese',
        srclang: 'jp',
        default: false,
        src: 'assets/silentVoiceJapanese.vtt'
      });

      const englishAudio = {
        id: 'englishAudio',
        kind: 'audio',
        label: 'English',
        language: 'en',
        src: 'assets/silentVoiceEnglish.mp3'
      };

      const japaneseAudio = {
        id: 'japaneseAudio',
        kind: 'audio',
        label: 'Japanese',
        language: 'jp',
        src: 'assets/silentVoiceJapanese.mp3'
      };

      video.audioTracks().addTrack(englishAudio);
      video.audioTracks().addTrack(japaneseAudio);

      video.on('pause', () => {
        // Pause the audio tracks as well
        videoPause();
      });

      video.on('play', () => {
        // Pause the audio tracks as well
        videoPlay();
      });

    function videoPause(){
        const currentAudioTrack = video.audioTracks().currentTrack();
        currentAudioTrack && currentAudioTrack.enabled && currentAudioTrack.pause();
    }

    function videoPlay(){
        const currentAudioTrack = video.audioTracks().currentTrack();
        currentAudioTrack && currentAudioTrack.enabled && currentAudioTrack.play();
    }

    // Add a click event listener to the button
    englishAudioButton.addEventListener('click', () => {

        video.audioTracks().setTrack(englishAudio);

    // videoPause();
    // currentAudioTrack = englishAudio;
    // currentAudioTrack.currentTime = video.currentTime();
    // videoPlay();

    // console.log(currentAudioTrack);
    });

    // Add a click event listener to the button
    japaneseAudioButton.addEventListener('click', () => {
        
        video.audioTracks().setTrack(japaneseAudio);
        // videoPause();
        // currentAudioTrack = japaneseAudio;
        // currentAudioTrack.currentTime = video.currentTime();
        // videoPlay();
        // console.log(currentAudioTrack);
    });



    // Set up toggle functions for font and dark mode
    var isDyslexic = false;
    var isDark = false;

    function toggleFont() {
    if (isDyslexic) {
        body.style.fontFamily = 'Arial';
    } else {
        body.style.fontFamily = 'OpenDyslexic';
    }
    isDyslexic = !isDyslexic;
    }

    function toggleDarkMode() {
    if (isDark) {
        body.style.background = 'white';
        body.style.color = '#2d2d2d';
    } else {
        body.style.background = '#2d2d2d';
        body.style.color = 'white';
    }
    isDark = !isDark;
    }



// 




// Obsolete

// Play & Pause for video
// video.addEventListener("click", function() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// });
// // Seek bar for video
// // Update the seek bar as the video plays
// video.addEventListener('timeupdate', function() {
//   const percentage = (video.currentTime / video.duration) * 100;
//   seekBar.value = percentage;
// });

// // Seek the video when the user drags the seek bar
// seekBar.addEventListener('input', function() {
//   const time = video.duration * (seekBar.value / 100);
//   video.currentTime = time;
// });

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