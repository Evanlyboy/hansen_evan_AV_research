    const body = document.getElementsByTagName('body')[0];
    const video = videojs('video');

    // const englishAudio = document.getElementById('englishAudio');
    // const japaneseAudio = document.getElementById('japaneseAudio');
    const englishAudioButton = document.getElementById('englishAudioButton');
    const japaneseAudioButton = document.getElementById('japaneseAudioButton');

    const playButton = document.getElementById('play');
    const pauseButton = document.getElementById('pause');
    const muteButton = document.getElementById('mute');
    const fullscreenButton = document.getElementById('fullscreen');

    const englishAudio = document.getElementById('englishAudio');
    const japaneseAudio = document.getElementById('japaneseAudio');
    var currentAudio = null;
    var currentCaption = null;

    const englishCaptionButton = document.getElementById('englishCaptionButton');
    const japaneseCaptionButton = document.getElementById('japaneseCaptionButton');
    // let currentAudioTrack = null;



    var tracks = video.textTracks();

      video.on('pause', () => {
        // Pause the audio tracks as well
        videoPause();
      });

      video.on('play', () => {
        // Pause the audio tracks as well
        videoPlay();
      });

      // video.on('timeupdate', () => {
      //   const currentTime = video.currentTime();
      //   englishAudio.currentTime = currentTime;
      //   japaneseAudio.currentTime = currentTime;
      //   console.log(currentTime);
      // });

    function videoPause(){
      japaneseAudio.pause();
      englishAudio.pause();
        // const currentAudioTrack = video.audioTracks().currentTrack;
        // currentAudioTrack && currentAudioTrack.enabled && currentAudioTrack.pause;
    }

    function videoPlay(){

      if(currentAudio === null) {
        englishAudio.play();
      } else {
        currentAudio.play();
      }
        
    }

    playButton.addEventListener('click', () => {
      // This is not a great naming scheme
      video.play();
      videoPlay();

      playButton.classList.add('toggleButton');
      pauseButton.classList.remove('toggleButton');
    });

    pauseButton.addEventListener('click', () => {
      // This is not a great naming scheme
      video.pause();
      videoPause();

      pauseButton.classList.add('toggleButton');
      playButton.classList.remove('toggleButton');
    });

    muteButton.addEventListener('click', () => {
      // This is not a great naming scheme

      if(englishAudio.muted && japaneseAudio.muted === true) {
        englishAudio.muted = false;
        japaneseAudio.muted = false;
        muteButton.classList.remove('toggleButton');
      } else {
        englishAudio.muted = true;
        japaneseAudio.muted = true;
        muteButton.classList.add('toggleButton');
      }
    });

    fullscreenButton.addEventListener('click', () => {
      // This is not a great naming scheme
      video.requestFullscreen();
    });
    


    // Add a click event listener to the button
    englishAudioButton.addEventListener('click', () => {

      englishAudioButton.classList.add('toggleButton');
      japaneseAudioButton.classList.remove('toggleButton');

      currentAudio = englishAudio;

      japaneseAudio.pause();
      englishAudio.play();
      englishAudio.currentTime = video.currentTime();

      console.log(video.currentTime());



      // -------------------------------------------------------------
      // console.log(video.audioTracks());

      // video.currentAudioTrack = 0;

      // console.log(video.currentAudioTrack);

      // video.audioTracks_.tracks_[0].enabled == true;
      // video.audioTracks_.tracks_[1].enabled == false;

      // debugger;

        // video.audioTracks().setTrack(englishAudio);

    // videoPause();
    // currentAudioTrack = englishAudio;
    // currentAudioTrack.currentTime = video.currentTime();
    // videoPlay();

    // console.log(currentAudioTrack);
    // -------------------------------------------------------------
    });

    // Add a click event listener to the button
    japaneseAudioButton.addEventListener('click', () => {

      englishAudioButton.classList.remove('toggleButton');
      japaneseAudioButton.classList.add('toggleButton');

      currentAudio = japaneseAudio;

      englishAudio.pause();
      japaneseAudio.play();
      japaneseAudio.currentTime = video.currentTime();


      // -------------------------------------------------------------
      // video.audioTracks_.tracks_[0].enabled == false;
      // video.audioTracks_.tracks_[1].enabled == true;

      // video.currentAudioTrack = 1;
        
        // video.audioTracks().setTrack(japaneseAudio);
        // videoPause();
        // currentAudioTrack = japaneseAudio;
        // currentAudioTrack.currentTime = video.currentTime();
        // videoPlay();
        // console.log(currentAudioTrack);
      // -------------------------------------------------------------
    });

    // My attempts at getting captions to switch to work

    // Man, this is a massive pain in the ass

    englishCaptionButton.addEventListener('click', () => {


      // Got this directly from the documentation so it better goddamn work
      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
      
        // Find the English captions track and mark it as "showing".
        if (track.language === 'en') {
          track.mode = 'showing';
          englishCaptionButton.classList.add('toggleButton');
        }
      }

      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
      
        if (track.language === 'jp') {
          track.mode = 'disabled';
          japaneseCaptionButton.classList.remove('toggleButton');
        }
      }


      // -------------------------------------------------------------
      // debugger;

      // japaneseCaptions.mode = 'disabled';

      // englishCaptions.mode = 'showing';
      // -------------------------------------------------------------
    })

    japaneseCaptionButton.addEventListener('click', () => {

      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
      
        if (track.language === 'jp') {
          track.mode = 'showing';
          japaneseCaptionButton.classList.add('toggleButton');
        }
      }

      for (var i = 0; i < tracks.length; i++) {
        var track = tracks[i];
      
        if (track.language === 'en') {
          track.mode = 'disabled';
          englishCaptionButton.classList.remove('toggleButton');
        }
      }

      // -------------------------------------------------------------
      // englishCaptions.mode = 'disabled';

      // japaneseCaptions.mode = 'showing';
      // -------------------------------------------------------------
    })

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

// Javascript Graveyard
// Here lies evan's hopes and dreams

// I don't think this works. I have tried everything to make it so. Video.js just doesn't work with audio tracks ig

    // -------------------------------------------------------------
    // const englishCaptions = video.addRemoteTextTrack({
    //     kind: 'captions',
    //     label: 'English',
    //     srclang: 'en',
    //     default: true,
    //     src: 'assets/silentVoiceEnglish.vtt'
    //   });

    // const japaneseCaptions = video.addRemoteTextTrack({
    //     kind: 'captions',
    //     label: 'Japanese',
    //     srclang: 'jp',
    //     default: false,
    //     src: 'assets/silentVoiceJapanese.vtt'
    //   });
    // -------------------------------------------------------------

    // -------------------------------------------------------------
      
      // const englishAudio = new videojs.AudioTrack({
      //   id: 'englishAudio',
      //   kind: 'audio',
      //   label: 'English',
      //   language: 'en',
      //   // src: 'assets/silentVoiceEnglish.mp3'
      // });

      // const japaneseAudio = new videojs.AudioTrack({
      //   id: 'japaneseAudio',
      //   kind: 'audio',
      //   label: 'Japanese',
      //   language: 'jp',
      //   // src: 'assets/silentVoiceJapanese.mp3'
      // });

      // video.audioTracks().addTrack(englishAudio);
      // video.audioTracks().addTrack(japaneseAudio);

      // -------------------------------------------------------------

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