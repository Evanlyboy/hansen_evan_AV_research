const app = Vue.createApp({


  data() {

    
    return {
      dyslexicToggle: false,

        // These three are for displaying the subtitle file as an element on the page
      videoSrc: 'video.mp4',
      captionSrc: 'captions.vtt',
      captionText: '',
    }
  },

  
  mounted() {
    // const video = this.$refs.video
    // // Looks for when the time is changed 
    // video.addEventListener('timeupdate', this.handleTimeUpdate)
  },


  methods: {

    toggleFont(){

    },

    // Here we are syncing the video time with the caption time
    handleTimeUpdate() {
      const video = this.$refs.video
      const captions = video.textTracks[0]
      if (captions.activeCues.length > 0) {
        this.captionText = captions.activeCues[0].text
      } else {
        this.captionText = ''
      }
    }
}

});

app.mount('#app');