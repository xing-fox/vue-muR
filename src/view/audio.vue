<style lang="less" scoped>
  #pages{
    position: absolute;
    top: 40px;
    left: 40px;
    right: 40px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 3px 0 10px #eee;
    audio{
      height: 0;
    }
    .audio{
      appearance: none;
      -webkit-appearance: none;
      border: none;
      width: 94%;
      // height: 30px;
      margin: 30px auto 0;
      background: #000;
      position: relative;
      .audio_img{
        display: inherit;
        font-size: 0;
        width: 100%;
        height: 110px;
      }
      .audio_content{
        width: 100%;
        height: 50px;
        background: #000;
        position: relative;
        .audio_control{
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          bottom: 0;
          margin: auto 20px;
          .play{
            cursor: pointer;
            width: 30px;
            height: 30px;
            background-image: url('../assets/images/start.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
          }
          .pause{
            cursor: pointer;
            width: 30px;
            height: 30px;
            background-image: url('../assets/images/pause.png');
            background-size: 100% 100%;
            background-repeat: no-repeat; 
          }
        }
        .audio_line{
          height: 4px;
          background: #fff;
          position: absolute;
          left: 70px;
          right: 100px;
          top: 0;
          bottom: 0;
          margin: auto 0;
          .lineBall{
            width: 14px;
            height: 14px;
            border-radius: 7px;
            background: #1491ff;
            position: absolute;
            top: -5px;
            left: -7px;
          }
        }
        .audio_time{
          color: #fff;
          font-size: 16px;
          line-height: 50px;
          position: absolute;
          top: 0;
          right: 5px;
        }
        .audio_keyWords{
          color: #fff;
          font-size: 12px;
          padding: 2px 5px;
          line-height: 20px;
          border-radius: 3px;
          background: #ee6723;
          position: absolute;
          top: -40px;
          left: 50px;
          &:before{
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            left: 0;
            right: 0;
            bottom: -5px;
            margin: 0 auto;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid #ee6723;
          }
        }
      }
    }
    .audioContent{
      width: 94%;
      margin: 20px auto;
      .contentLeft{
        width: 50%;
        height: 500px;
        padding: 20px;
        overflow: scroll;
        box-shadow: 1px 0 5px #eee;
        .talkLeft{
          font-size: 0;
          margin: 0 50px 20px 0;
          display: flex;
          img{
            width: 40px;
            height: 40px;
            vertical-align: top;
          }
          .talkContent{
            color: #333;
            font-size: 12px;
            flex: 1;
            display: inline-block;
            min-height: 30px;
            line-height: 20px;
            margin: 0 0 0 15px;
            padding: 5px 10px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
            background: #f6f6f6;
            vertical-align: top;
            position: relative;
            &:before{
              content: '';
              width: 0;
              height: 0;
              border-top: 10px solid #f6f6f6;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              position: absolute;
              top: 0;
              left: -5px;
            }
          }
        }
        .talkRight{
          font-size: 0;
          margin: 0 0 20px 50px;
          display: flex;
          flex-direction: row-reverse;
          img{
            width: 40px;
            min-width: 40px;
            height: 40px;
            vertical-align: top;
          }
          .talkContent{
            color: #333;
            font-size: 12px;
            display: inline-block;
            min-height: 30px;
            line-height: 20px;
            margin: 0 15px 0 0;
            padding: 5px 10px;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
            background: #f6f6f6;
            vertical-align: top;
            position: relative;
            &:before{
              content: '';
              width: 0;
              height: 0;
              border-top: 10px solid #f6f6f6;
              border-left: 5px solid transparent;
              border-right: 5px solid transparent;
              position: absolute;
              top: 0;
              right: -5px;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div id="pages">
    <div class="audio">
      <img class="audio_img" src="../assets/images/music.jpg" alt="">
      <div class="audio_content">
        <div class="audio_control">
          <div class="play" @click="audioFunc" v-if="control"></div>
          <div class="pause" @click="audioFunc" v-else></div>
        </div>
        <div class="audio_line" ref="audioLine" @click="clickPoint">
          <div class="lineBall" ref="audioBall"></div>
          <div class="audio_keyWords animated bounce">
            {{ message }}
          </div>
        </div>
        <div class="audio_time">
          <span>{{ current_Time }}</span> / <span>{{ total_Time }}</span>
        </div>
      </div>
    </div>
    <div class="audioContent">
      <div class="contentLeft">
        <div class="talkLeft">
          <img src="../assets/images/icon_btn.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkRight">
          <img src="../assets/images/icon_man.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签</span>
        </div>
        <div class="talkLeft">
          <img src="../assets/images/icon_btn.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkRight">
          <img src="../assets/images/icon_man.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkLeft">
          <img src="../assets/images/icon_btn.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkRight">
          <img src="../assets/images/icon_man.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkLeft">
          <img src="../assets/images/icon_btn.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkRight">
          <img src="../assets/images/icon_man.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkLeft">
          <img src="../assets/images/icon_btn.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkRight">
          <img src="../assets/images/icon_man.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkLeft">
          <img src="../assets/images/icon_btn.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
        <div class="talkRight">
          <img src="../assets/images/icon_man.jpg" alt="">
          <span class="talkContent">您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签您的浏览器不支持标签</span>
        </div>
      </div>
      <div class="contentRight"></div>
    </div>
    <audio ref="audio">
      <source src="../11.mp3" type="audio/mpeg">  
      您的浏览器不支持 audio 标签  
    </audio>
  </div>
</template>

<script>
export default {
  name: 'audio',
  data () {
    return {
      message: '大蜀山',
      control: true,
      audio: '',
      setTime: '',
      ballStyle: '',
      lineWidth: '',
      startX: '',
      dragStatus: false,
      total_Time: 0,
      current_Time: 0
    }
  },
  mounted () {
    setTimeout(() => {
      this.audio = this.$refs.audio
      this.total_Time = this.audio.duration.toFixed(2)
      this.ballStyle = this.$refs.audioBall
      this.lineWidth = this.$refs.audioLine.offsetWidth
      this.startX = this.ballStyle.getBoundingClientRect().x
    }, 500)
  },
  methods: {
    audioFunc () {
      if (this.control) {
        this.audio.play()
        this.dragFunc() // start ball move
      } else {
        this.audio.pause()
      }
      this.control = !this.control
    },
    // downFunc (e) {
    //   this.dragStatus = true
    //   e.preventDefault()
    //   this.startX = e.pageX
    // },
    // moveFunc (e) {
    //   if (this.dragStatus) {
    //     e.preventDefault()
    //     let x = e.pageX - this.startX
    //     this.ballStyle.style.left =  -7 + x + 'px'
    //   }
    // },
    // upFunc (e) {
    //   this.dragStatus = false
    //   // let _width = this.ballStyle.style.left
    //   // console.log(_width)
    // },
    clickPoint (e) {
      e.preventDefault()
      let _widthOffset = parseFloat(e.pageX - this.startX) -14
      this.ballStyle.style.left = _widthOffset + 'px'
      this.audio.currentTime = (_widthOffset / this.lineWidth) * this.total_Time
      this.current_Time = this.audio.currentTime.toFixed(2)
    },
    outFunc (e) {
      this.dragFunc = false
      return false
    },
    dragFunc () {
      let self = this
      function Audio () {
        self.setTime = requestAnimationFrame(Audio)
        self.current_Time = self.audio.currentTime.toFixed(2)
        self.total_Time = self.audio.duration.toFixed(2)
        self.ballStyle.style.left = (self.audio.currentTime / self.audio.duration) * self.lineWidth + 'px'
        if (self.audio.ended) {
          self.audio.pause()
          clearInterval(self.setTime)
          self.audio.currentTime = 0
          self.current_Time = 0
          self.ballStyle.style.left = -7 + 'px'
          self.control = !self.control
        }
      }
      Audio()
    }
  }
}
</script>

