<template>
  <div id="page">
    <div class="title">质检分配</div>
    <ul class="banner">
      <li class="active">待分配</li>
      <li>已分配</li>
    </ul>
    <div class="content">
      <div class="companyName">
        <span>公司名称</span>
        <Select v-model="model1" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="fileName">
        <span>文件名称</span>
        <input v-model="input1" type="text">
      </div>
      <div class="fileName">
        <span>工单编号</span>
        <input v-model="input2" type="text">
      </div>
      <div class="fileName">
        <span>电话号码</span>
        <input v-model="input3" type="text">
      </div>
      <div class="fileName">
        <span>呼出日期</span>
        <Row style="display: inline-block; vertical-align: middle;">
          <DatePicker type="daterange" placement="bottom-end" placeholder="请选择日期" style="width: 200px"></DatePicker>
        </Row>
      </div>
      <div class="fileName">
        <span>呼出时间段</span>
        <Row style="display: inline-block; vertical-align: middle;">
          <TimePicker type="timerange" placement="bottom-end" placeholder="请选择时间段" style="width: 200px"></TimePicker>
        </Row>
      </div>
      <div class="companyName">
        <span>AI质检结果</span>
        <Select v-model="model2" style="width:200px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <button>查询</button>
    </div>
    <ul class="selectBanner">
      <li v-if="selBanStatus">分配</li>
      <li>撤回</li>
    </ul>
    <div class="table">
      <table border="1" cellspacing="1">
        <tr>
          <td><input type="checkbox"></td>
          <td>公司名称</td>
          <td>文件名称</td>
          <td>工单编号</td>
          <td>手机号</td>
          <td>客户姓名</td>
          <td>呼出时间</td>
          <td>通话时长</td>
          <td>AI质检结果</td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
        </tr>
        <tr>
          <td><input type="checkbox"></td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
        </tr>
      </table>
    </div>
    <div class="pagesNumber">
      <div class="numberLeft">
        <span>从1到10条 共300条记录, 每页显示</span>
        <select v-model="number1">
          <option v-for="item in numberList" :value="item.value" :key="item.value">{{ item.label }}</option>
        </select>
        <span>条记录</span>
      </div>
      <div class="numberRight">
        <Page :total="100" show-elevator></Page>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'zjfp',
  data() {
    return {
      cityList: [
        {
          value: 'New York',
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        },
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      numberList: [
        {
          value: '1',
          label: '1'
        },
        {
          value: '2',
          label: '2'
        },
        {
          value: '3',
          label: '3'
        },
        {
          value: '4',
          label: '4'
        },
        {
          value: '5',
          label: '5'
        },
        {
          value: '6',
          label: '6'
        },
        {
          value: '7',
          label: '7'
        },
        {
          value: '8',
          label: '8'
        },
        {
          value: '9',
          label: '9'
        },
        {
          value: '10',
          label: '10'
        }
      ],
      number1: 10,
      model1: '',
      model2: '',
      input1: '',
      input2: '',
      input3: '',
      input4: '',
      selBanStatus: true
    }
  }
};
</script>

<style lang="less" scoped>
#page {
  width: 100%;
  height: 100%;
  padding: 0 50px 0 20px;
  overflow-y: scroll;
  .title {
    color: #333;
    font-size: 24px;
  }
  .banner {
    width: 100%;
    margin: 20px 0 0 0;
    border-bottom: 1px solid #ccc;
    display: flex;
    li {
      color: #fff;
      font-size: 14px;
      width: 100px;
      height: 30px;
      background: #ccc;
      text-align: center;
      line-height: 30px;
      margin: 0 2px 0 0;
      cursor: pointer;
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      &.active {
        background: #1491ff;
      }
    }
  }
  .content {
    margin: 30px 0 0 0;
    display: flex;
    flex-wrap: warp;
    -webkit-flex-wrap: wrap;
    .companyName, .fileName{
      color: #333;
      font-size: 16px;
      height: 24px;
      line-height: 24px;
      margin: 0 30px 30px 0;
      span{
        vertical-align: middle;
        margin: 0 10px 0 0;
      }
      select, input{
        height: 24px;
        vertical-align: middle;
      }
    }
    button{
      border: none;
      appearance: none;
      -webkit-appearance: none;
      color: #fff;
      font-size: 14px;
      border-radius: 3px;
      cursor: pointer;
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: #1491ff;
      border-radius: 5px;
      margin: 0 30px 30px 50px;
    }
  }
  .selectBanner{
    color: #fff;
    font-size: 14px;
    background: #1491ff;
    width: 80px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
  }
  table{
    width: 100%;
    margin: 30px 0 0 0;
    border: 1px solid #ccc;
    tr{
      width: 100%;
      display: flex;
      &:nth-child(1){
        td{
          background: #f2f2f2;
        }
      }
      td{
        flex: 1;
        line-height: 30px;
        text-align: center;
      }  
    }
  }
  .pagesNumber{
    width: 100%;
    height: 32px;
    margin: 20px 0 0 0;
    display: flex;
    .numberLeft{
      height: 32px;
      line-height: 32px;
      span{
        vertical-align: middle;
      }
      select{
        width: 50px;
        height: 24px;
        vertical-align: middle;
        option{
          width: 50px;
        }
      }
    }
    .numberRight{
      flex: 1;
      text-align: right;
    }
  }
}
</style>
