<style lang="less" scoped>
#page {
  width: 100%;
  height: 100%;
  .header {
    width: 100%;
    border-bottom: 1px solid #ccc;
    .title {
      color: #fff;
      font-size: 16px;
      width: 180px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #66a6ff;
    }
  }
  .content {
    width: 100%;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    .contLeft {
      width: 180px;
      height: 100%;
      background: #fefefe;
      padding: 20px 0 0 0;
      box-sizing: border-box;
      .list {
        color: #333;
        width: 100%;
        text-align: center;
        .listTitle {
          color: #999;
          font-size: 12px;
          height: 40px;
          line-height: 40px;
          text-align: left;
          padding: 0 0 0 20px;
        }
        ul li {
          color: #333;
          font-size: 12px;
          cursor: pointer;
          height: 30px;
          line-height: 30px;
          &.active{
            color: #758DFF;
            border-left: 3px solid #66a6ff;
          }
        }
      }
    }
    .contRight{
      flex: 1;
      height: 100%;
      background: #f3f5f7;
      box-sizing: border-box;
      position: relative;
    }
  }
}
</style>

<template>
  <div id="page">
    <div class="header">
      <div class="title">
        <span>智能语音检测</span>
      </div>
    </div>
    <div class="content">
      <div class="contLeft">
        <div class="list">
          <div class="listTitle">
            <span>质检质量</span>
          </div>
          <ul>
            <li v-for="(item, index) in dataZJ" :key="index" @click="FuncZj(index)" :class="{active: dataZJIndex == index}">{{ item }}</li>
          </ul>
        </div>
        <div class="list">
          <div class="listTitle">
            <span>系统管理</span>
          </div>
          <ul>
            <li v-for="(item, index) in dataDepart" :key="index">{{ item }}</li>  
          </ul>
        </div>
      </div>
      <div class="contRight">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      dataZJ: [
        '质检分配',
        '质检审核',
        '质检复查',
        '复检结果'
      ],
      dataZJIndex: 0,
      dataDepart: [
        '部门管理',
        '角色管理',
        '员工管理',
        '委外管理'
      ]
    }
  },
  methods: {
    FuncZj (index) {
      this.dataZJIndex = index
      switch (index) {
        case 0:
          this.$router.push('/Index/zjfp')
          break;
        case 1:
          this.$router.push('/Index/zjsh')
          break;
        case 2:
          this.$router.push('/Index/zjfh')
          break;
        case 3:
          this.$router.push('/Index/fhjg')
          break;  
      }
    }
  }
}
</script>

