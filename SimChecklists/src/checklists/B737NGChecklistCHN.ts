import type { ChecklistData } from "../components/types";

const B737NGChecklistCHN: ChecklistData = {
  "起动前": {
    "color": "bg-green-500",
    "content": [
      {
        "id": "1",
        "action": "驾驶舱准备",
        "expected": "完成"
      },
      {
        "id": "2",
        "action": "灯光测试",
        "expected": "检查"
      },
      {
        "id": "3",
        "action": "氧气和内话机",
        "expected": "检查"
      },
      {
        "id": "4",
        "action": "偏航阻尼器",
        "expected": "接通"
      },
      {
        "id": "5",
        "action": "导航转换和显示电门",
        "expected": "自动且正常"
      },
      {
        "id": "6",
        "action": "燃油",
        "expected": "____千克，泵全接通"
      },
      {
        "id": "7",
        "action": "厨房电源",
        "expected": "接通"
      },
      {
        "id": "8",
        "action": "紧急出口灯",
        "expected": "预位"
      },
      {
        "id": "9",
        "action": "旅客信号",
        "expected": "调定"
      },
      {
        "id": "10",
        "action": "风挡加温",
        "expected": "接通"
      },
      {
        "id": "11",
        "action": "液压",
        "expected": "正常"
      },
      {
        "id": "12",
        "action": "空调和增压",
        "expected": "____个组件、引气接通，调定"
      },
      {
        "id": "13",
        "action": "自动驾驶",
        "expected": "脱开"
      },
      {
        "id": "14",
        "action": "减速板",
        "expected": "下卡位"
      },
      {
        "id": "15",
        "action": "自动刹车",
        "expected": "RTO"
      },
      {
        "id": "16",
        "action": "安定面配平切断电门",
        "expected": "正常"
      },
      {
        "id": "17",
        "action": "轮舱火警",
        "expected": "检查"
      },
      {
        "id": "18",
        "action": "无线电、雷达和应答机",
        "expected": "调定"
      },
      {
        "id": "19",
        "action": "方向舵和副翼配平",
        "expected": "灵活且零位"
      },
      {
        "id": "20",
        "action": "飞行文件",
        "expected": "齐全"
      },
      {
        "id": "21",
        "action": "FMC/CDU",
        "expected": "输入"
      },
      {
        "id": "22",
        "action": "N1 和空速游标",
        "expected": "调定"
      },
      {
        "id": "23",
        "description": "准许起动",
        "highlight": true
      },
      {
        "id": "24",
        "action": "舱门",
        "expected": "关闭"
      },
      {
        "id": "25",
        "action": "驾驶舱风挡",
        "expected": "关闭"
      },
      {
        "id": "26",
        "action": "空调组件",
        "expected": "关断"
      },
      {
        "id": "27",
        "action": "防撞灯",
        "expected": "接通"
      }
    ]
  },
  "起动后": {
    "color": "bg-yellow-500",
    "content": [
      {
        "id": "1",
        "action": "电源",
        "expected": "发动机接通"
      },
      {
        "id": "2",
        "action": "探头加温",
        "expected": "接通"
      },
      {
        "id": "3",
        "action": "防冰",
        "expected": "按需"
      },
      {
        "id": "4",
        "action": "空调和增压",
        "expected": "组件全接通"
      },
      {
        "id": "5",
        "action": "隔离活门",
        "expected": "自动"
      },
      {
        "id": "6",
        "action": "APU",
        "expected": "按需"
      },
      {
        "id": "7",
        "action": "起动手柄",
        "expected": "慢车卡位"
      }
    ]
  },
  "起飞前": {
    "color": "bg-yellow-500",
    "content": [
      {
        "id": "1",
        "action": "再现",
        "expected": "检查"
      },
      {
        "id": "2",
        "action": "飞行操纵",
        "expected": "检查"
      },
      {
        "id": "3",
        "action": "襟翼",
        "expected": "____，绿灯亮"
      },
      {
        "id": "4",
        "action": "安定面配平",
        "expected": "____单位"
      },
      {
        "id": "5",
        "action": "驾驶舱门",
        "expected": "锁定"
      },
      {
        "id": "6",
        "action": "起飞简令",
        "expected": "下达"
      },
      {
        "id": "7",
        "description": "准许起飞",
        "highlight": true
      },
      {
        "id": "8",
        "action": "发动机起动电门",
        "expected": "接通"
      },
      {
        "id": "9",
        "action": "应答机",
        "expected": "接通"
      }
    ]
  },
  "起飞后": {
    "color": "bg-yellow-500",
    "content": [
      {
        "id": "1",
        "action": "空调和增压",
        "expected": "调定"
      },
      {
        "id": "2",
        "action": "发动机起动电门",
        "expected": "关断"
      },
      {
        "id": "3",
        "action": "起落架",
        "expected": "收上，中立"
      },
      {
        "id": "4",
        "action": "襟翼",
        "expected": "收上，无灯"
      },
      {
        "id": "4",
        "action": "自动刹车",
        "expected": "OFF"
     }
    ]
  },
  "下降—进近": {
    "color": "bg-blue-500",
    "content": [
      {
        "id": "1",
        "action": "防冰",
        "expected": "按需"
      },
      {
        "id": "2",
        "action": "空调和增压",
        "expected": "调定"
      },
      {
        "id": "3",
        "action": "高度表和仪表",
        "expected": "调定，交叉检查"
      },
      {
        "id": "4",
        "action": "N1 和空速游标",
        "expected": "检查，调定"
      }
    ]
  },
  "着陆": {
    "color": "bg-blue-500",
    "content": [
      {
        "id": "1",
        "action": "发动机起动电门",
        "expected": "接通"
      },
      {
        "id": "2",
        "action": "再现",
        "expected": "检查"
      },
      {
        "id": "3",
        "action": "减速板",
        "expected": "预位，绿灯"
      },
      {
        "id": "4",
        "action": "起落架",
        "expected": "放下，三个绿灯"
      },
      {
        "id": "5",
        "action": "襟翼",
        "expected": "____，绿灯"
      }
    ]
  },
  "关车": {
    "color": "bg-green-500",
    "content": [
      {
        "id": "1",
        "action": "燃油",
        "expected": "泵全关"
      },
      {
        "id": "2",
        "action": "厨房电源",
        "expected": "按需"
      },
      {
        "id": "3",
        "action": "电源",
        "expected": "接通____"
      },
      {
        "id": "4",
        "action": "系好安全带灯",
        "expected": "关断"
      },
      {
        "id": "5",
        "action": "风挡加温",
        "expected": "关断"
      },
      {
        "id": "6",
        "action": "空速管加温",
        "expected": "关断"
      },
      {
        "id": "7",
        "action": "防冰",
        "expected": "关断"
      },
      {
        "id": "8",
        "action": "所有电动液压泵",
        "expected": "关断"
      },
      {
        "id": "9",
        "action": "空调",
        "expected": "____个组件、引气接通"
      },
      {
        "id": "10",
        "action": "外部灯光",
        "expected": "按需"
      },
      {
        "id": "11",
        "action": "防撞灯",
        "expected": "关断"
      },
      {
        "id": "12",
        "action": "发动机起动电门",
        "expected": "关断"
      },
      {
        "id": "13",
        "action": "自动刹车",
        "expected": "关断"
      },
      {
        "id": "14",
        "action": "减速板",
        "expected": "下卡位"
      },
      {
        "id": "15",
        "action": "襟翼",
        "expected": "收上，无灯"
      },
      {
        "id": "16",
        "action": "停留刹车",
        "expected": "按需"
      },
      {
        "id": "17",
        "action": "起动手柄",
        "expected": "切断"
      },
      {
        "id": "18",
        "action": "气象雷达",
        "expected": "关断"
      },
      {
        "id": "19",
        "action": "应答机",
        "expected": "按需"
      }
    ]
  },
  "安全检查": {
    "color": "bg-green-500",
    "content": [
      {
        "id": "1",
        "action": "IRS 方式选择器",
        "expected": "关断"
      },
      {
        "id": "2",
        "action": "紧急出口灯",
        "expected": "关断"
      },
      {
        "id": "3",
        "action": "空调组件",
        "expected": "关断"
      },
      {
        "id": "4",
        "action": "APU/地面电源",
        "expected": "关断"
      },
      {
        "id": "5",
        "action": "电瓶",
        "expected": "关断"
      }
    ]
  }
}

export default B737NGChecklistCHN;