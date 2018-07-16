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
      display: box;
      display: -webkit-box;
      width: 94%;
      margin: 20px auto;
      background: #f3f5f9;
      .contentLeft{
        width: 50%;
        height: 500px;
        padding: 20px;
        overflow: scroll;
        background: #fff;
        border: 2px solid #f6f6f6;
        box-sizing: border-box;
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
      .contentRight{
        flex: 1;
        margin: 20px;
        .rightBox1{
          color: #333;
          font-size: 14px;
          height: 40px;
          line-height: 40px;
          padding: 0 10px;
          margin: 0 0 10px 0;
          border-radius: 2px;
          box-sizing: border-box;
          background: #fff;
          .color{
            color: #ff0500;
          }
        }
        .rightBox2{
          display: box;
          display: -webkit-box;
          padding: 20px;
          margin: 0 0 10px 0;
          background: #fff;
          border-radius: 2px;
          box-sizing: border-box;
          .boxLeft{
            width: 150px;
            .title{
              color: #666;
              font-size: 12px;
              line-height: 12px;
            }
            ul li{
              color: 333;
              font-size: 14px;
              margin: 15px 0 0 0;
            }
          }
          .boxRight{
            flex: 1;
            .title{
              color: #666;
              font-size: 12px;
              line-height: 12px;
            }
            ul li{
              color: 333;
              font-size: 14px;
              margin: 15px 0 0 0;
              span{
                margin: 0 15px 0 0;
              }
            }
          }
        }
        .rightBox3{
          padding: 20px;
          margin: 0 0 10px 0;
          background: #fff;
          border-radius: 2px;
          box-sizing: border-box;
          .title{
            color: #fff;
            font-size: 14px;
            width: 110px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            border-radius: 4px;
            background: #758DFF;
          }
          textarea{
            width: 400px;
            height: 70px;
            margin: 10px 0 0 0;
            border-radius: 2px;
            border: 1px solid #e1e1e1;
          }
          .button{
            font-size: 0;
            width: 100%;
            margin: 30px 0 0 0;
            text-align: center;
            .submit{
              display: inline-block;
              color: #fff;
              font-size: 14px;
              width: 120px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              border-radius: 4px;
              margin: 0 30px 0 0;
              background: #758DFF;
            }
            .cancel{
              display: inline-block;
              color: #666;
              font-size: 14px;
              width: 120px;
              height: 40px;
              line-height: 40px;
              text-align: center;
              border-radius: 4px;
              border: 1px solid #dadada;
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
      <div class="contentRight">
        <div class="rightBox1">
          <span>AI质检结果</span>
          <span class="color">合格</span>
        </div>
        <div class="rightBox1">
          <span>人工质检结果</span>
          <span class="color">合格</span>
        </div>
        <div class="rightBox2">
          <div class="boxLeft">
            <div class="title">
              <span>正向质检模型</span>
            </div>
            <ul>
              <li>专业水平</li>
              <li>辱骂</li>
            </ul>
          </div>
          <div class="boxRight">
            <div class="title">
              <span>命中关键字</span>
            </div>
            <ul>
              <li><span>辱骂</span><span>专业水平</span><span>辱骂</span><span>专业水平</span></li>
              <li>辱骂</li>
            </ul>
          </div>
        </div>
        <div class="rightBox3">
          <div class="title">
            <span>增加审核项</span>
          </div>
          <textarea placeholder="备注内容..."></textarea>
          <div class="button">
            <div class="submit">保存</div>
            <div class="cancel">取消</div>
          </div>
        </div>
      </div>
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

