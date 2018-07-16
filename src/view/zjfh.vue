<template>
  <div id="page">
    <div class="title">质检复核</div>
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
        <Select v-model="model2" style="width:150px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="companyName">
        <span>质检员</span>
        <Select v-model="model1" style="width:150px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="fileName">
        <span>审核时间</span>
        <Row style="display: inline-block; vertical-align: middle;">
          <DatePicker type="daterange" placement="bottom-end" placeholder="请选择时间" style="width: 200px"></DatePicker>
        </Row>
      </div>
      <div class="companyName">
        <span>审核结果</span>
        <Select v-model="model1" style="width:150px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <div class="companyName">
        <span>复核状态</span>
        <Select v-model="model1" style="width:150px">
          <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
      </div>
      <button>查询</button>
      <button>导出</button>
    </div>
    <!-- <div class="table">
      <table border="1" cellspacing="1">
        <tr>
          <td>公司名称</td>
          <td>文件名</td>
          <td>工单编号</td>
          <td>电话号码</td>
          <td>客户姓名</td>
          <td>呼出时间</td>
          <td>通话时长</td>
          <td>AI质检结果</td>
          <td>审核结果</td>
          <td>审核备注</td>
          <td>审核时间</td>
          <td>质检员</td>
          <td>操作</td>
        </tr>
        <tr>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>李四</td>
          <td>
            <span>播放</span>
            <span>下载</span>
          </td>
        </tr>
        <tr>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>123</td>
          <td>章三</td>
          <td>
            <span>已复核</span>
            <span>下载</span>
          </td>
        </tr>
      </table>
    </div> -->
    <Table class="table" border :columns="columns7" :data="data6"></Table>
    <div class="pagesNumber">
      <div class="numberLeft">
        <span>从1到10条 共300条记录, 每页显示</span>
        <select v-model="number1">
          <option v-for="item in numberList" :value="item.value" :key="item.value">{{ item.label }}</option>
        </select>
        <span>条记录</span>
      </div>
      <div class="numberRight">
        <Page :total="70" show-elevator></Page>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "zjsh",
  data() {
    return {
      // cityList: [
        //   {
        //     value: "New York",
        //     label: "New York"
        //   },
        //   {
        //     value: "London",
        //     label: "London"
        //   },
        //   {
        //     value: "Sydney",
        //     label: "Sydney"
        //   },
        //   {
        //     value: "Ottawa",
        //     label: "Ottawa"
        //   },
        //   {
        //     value: "Paris",
        //     label: "Paris"
        //   },
        //   {
        //     value: "Canberra",
        //     label: "Canberra"
        //   }
      // ],
      numberList: [
        {
          value: "1",
          label: "1"
        },
        {
          value: "2",
          label: "2"
        },
        {
          value: "3",
          label: "3"
        },
        {
          value: "4",
          label: "4"
        },
        {
          value: "5",
          label: "5"
        },
        {
          value: "6",
          label: "6"
        },
        {
          value: "7",
          label: "7"
        },
        {
          value: "8",
          label: "8"
        },
        {
          value: "9",
          label: "9"
        },
        {
          value: "10",
          label: "10"
        }
      ],
      number1: 10,
      model1: "",
      model2: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      selBanStatus: true,
      columns7: [
        {
          title: '公司名称',
          key: 'age'
        },
        {
          title: '文件名',
          key: 'age'
        },
        {
          title: '工单编号',
          key: 'address'
        },{
          title: '电话号码',
          key: 'age'
        },
        {
          title: '客户姓名',
          key: 'age'
        },
        {
          title: '呼出时间',
          key: 'address'
        },
        {
          title: '通话时长',
          key: 'age'
        },
        {
          title: 'AI质检结果',
          key: 'address'
        },
        {
          title: '审核结果',
          key: 'address'
        },
        {
          title: '审核备注',
          key: 'age'
        },
        {
          title: '审核时间',
          key: 'address'
        },
        {
          title: '质检员',
          key: 'address'
        },
        {
          title: 'Action',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                    type: 'primary',
                    size: 'small'
                },
                style: {
                    marginRight: '5px'
                },
                on: {
                    click: () => {
                        this.show(params.index)
                    }
                }
              }, params.row.keyValue),
              h('Button', {
                props: {
                    type: 'primary',
                    size: 'small'
                },
                on: {
                    click: () => {
                        this.remove(params.index)
                    }
                } 
              }, '下载')
            ])
          }
        }
      ],
      data6: [
        {
            name: '公司名称',
            keyValue: '审核',
            age: 18,
            address: 'New York No. 1 Lake Park'
        },
        {
            name: '文件名',
            keyValue: '审核',
            age: 24,
            address: 'London No. 1 Lake Park'
        },
        {
            name: 'Joe Black',
            keyValue: '审核',
            age: 30,
            address: 'Sydney No. 1 Lake Park'
        },
        {
            name: 'Jon Snow',
            keyValue: '已审核',
            age: 26,
            address: 'Ottawa No. 2 Lake Park'
        }
      ]
    }
  }
}
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
  .content {
    margin: 30px 0 0 0;
    display: flex;
    flex-wrap: warp;
    -webkit-flex-wrap: wrap;
    .companyName,
    .fileName {
      color: #333;
      font-size: 16px;
      height: 24px;
      line-height: 24px;
      margin: 0 30px 30px 0;
      span {
        vertical-align: middle;
        margin: 0 10px 0 0;
      }
      select,
      input {
        height: 24px;
        vertical-align: middle;
      }
    }
    button {
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
      margin: 0 0 30px 50px;
    }
  }
  table {
    width: 100%;
    margin: 30px 0 0 0;
    border: 1px solid #ccc;
    tr {
      width: 100%;
      display: flex;
      &:nth-child(1) {
        td {
          background: #f2f2f2;
        }
      }
      td {
        flex: 1;
        line-height: 30px;
        text-align: center;
        span{
          color: #1491ff;
          cursor: pointer;
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
  .pagesNumber {
    width: 100%;
    margin: 20px 0 0 0;
    display: flex;
    .numberLeft {
      height: 32px;
      line-height: 32px;
      span {
        vertical-align: middle;
      }
      select {
        width: 50px;
        height: 24px;
        vertical-align: middle;
        option {
          width: 50px;
        }
      }
    }
    .numberRight {
      flex: 1;
      text-align: right;
    }
  }
}
</style>

