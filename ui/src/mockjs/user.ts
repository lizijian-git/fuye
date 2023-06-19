import { Result } from "../types/result";
import { User } from "../types/user";

let user: User = {
    'userId': '1992',
    'username': 'admin',
}

const menus = [
  {
    id: "/workspace",
    icon: "layui-icon-home",
    title: "概览汇总",
    children: [
      {
        id: "/workspace/workbench",
        title: "工作台"
      },
      {
        id: "/workspace/console",
        title: "控制台"
      },
      {
        id: "/workspace/analysis",
        title: "分析页"
      }
    ]
  },
  {
    id: "/form",
    icon: "layui-icon-user",
    title: "用户管理系统",
    children: [
      {
        id: "/form/base",
        title: "基础表单"
      },{
        id: "/form/intricate",
        title: "复杂表单"
      }
    ]
  },
  {
    id: "/table",
    icon: "layui-icon-cols",
    title: "员工管理系统",
    children: [
      {
        id: "/table/base",
        title: "查询列表"
      },
      {
        id: "/table/card",
        title: "卡片列表"
      }
    ]
  },
  {
    id: "/result",
    icon: "layui-icon-auz",
    title: "权限管理系统",
    children: [
      {
        id: "/result/success",
        title: "成功页面"
      },
      {
        id: "/result/failure",
        title: "失败页面"
      }
    ]
  }, {
    id: "/error",
    icon: "layui-icon-component",
    title: "产品管理系统",
    children: [
      {
        id: "/error/403",
        title: "403"
      },
      {
        id: "/error/404",
        title: "404"
      },
      {
        id: "/error/500",
        title: "500"
      }
    ]
  },
  {
    id: "/menu",
    icon: "layui-icon-app",
    title: "固资管理系统",
    children: [
      {
        id: "/menu/menu1",
        icon: "layui-icon-home",
        title: "二级菜单",
        children: [
          {
            id: "/menu/menu1/menu1",
            icon: "layui-icon-home",
            title: "三级菜单"
          },
          {
            id: "/menu/menu1/menu2",
            icon: "layui-icon-home",
            title: "三级菜单"
          }
        ]
      },
      {
        id: "/menu/menu2",
        icon: "layui-icon-home",
        title: "二级菜单",
        children: [
          {
            id: "/menu/menu2/menu1",
            icon: "layui-icon-home",
            title: "三级菜单"
          },
          {
            id: "/menu/menu2/menu2",
            icon: "layui-icon-home",
            title: "三级菜单"
          }
        ]
      }
    ]
  },{
    id: "/directive",
    icon: "layui-icon-slider",
    title: "流程管理系统",
    children: [
      {
        id: "/directive/permission",
        title: "权限指令"
      }
    ]
  },{
    id: "/component1",
    icon: "layui-icon-tabs",
    title: "客户管理系统",
    children: [
      {
        id: "/component/qrcode",
        title: "二维码"
      },
      {
        id: "/component/barcode",
        title: "条形码"
      },
      {
        id: "/component/treeSelect",
        title: "下拉树"
      }
    ]
  },{
    id: "/component2",
    icon: "layui-icon-slider",
    title: "OA管理系统",
    children: [
      {
        id: "/component/qrcode",
        title: "二维码"
      },
      {
        id: "/component/barcode",
        title: "条形码"
      },
      {
        id: "/component/treeSelect",
        title: "下拉树"
      }
    ]
  },{
    id: "/component3",
    icon: "layui-icon-template-one",
    title: "业务管理系统",
    children: [
      {
        id: "/component/qrcode",
        title: "二维码"
      },
      {
        id: "/component/barcode",
        title: "条形码"
      },
      {
        id: "/component/treeSelect",
        title: "下拉树"
      }
    ]
  },{
    id: "/component4",
    icon: "layui-icon-diamond",
    title: "绩效管理系统",
    children: [
      {
        id: "/component/qrcode",
        title: "二维码"
      },
      {
        id: "/component/barcode",
        title: "条形码"
      },
      {
        id: "/component/treeSelect",
        title: "下拉树"
      }
    ]
  } 
]

const getInfo = (req: any, res: any)=> {
    let item = JSON.parse(req.body);
    let token = item ? item.token : null;
    let result:Result = {
      code: 200,
      msg: "操作成功",
      data: user,
      success: true
    }
    if(item || token){
      result.code = 99998;
      result.msg = "请重新登录";
      result.success = false;
    }
    return result;
}

const getPermission = (req: any, res: any)=> {
  let item = JSON.parse(req.body);
  let token = item ? item.token : null;
  let result:Result = {
    code: 200,
    msg: "操作成功",
    data: ['sys:user:add','sys:user:edit','sys:user:delete','sys:user:import','sys:user:export'],
    success: true
  }
  if(item || token){
    result.code = 99998;
    result.msg = "请重新登录";
    result.success = false;
  }
  return result;
}

const getMenu = (req: any, res: any)=> {
  let item = JSON.parse(req.body);
  let token = item ? item.token : null;
  let result:Result = {
    code: 200,
    msg: "操作成功",
    data: menus,
    success: true
  }
  if(item || token){
    result.code = 99998;
    result.msg = "请重新登录";
    result.success = false;
  }
  return result;
}

const getLogin = (req: any, res: any)=> {
  let item = JSON.parse(req.body);
  let account = item.account;
  let password = item.password;
  if(account === 'admin' && password === '123456'){
    return {
      'code': 200,
      'msg':'登陆成功',
      'data':{
        'userId':'35002',
        'token':'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiJhZG1pbiIsInVzZXJOYW1lIjoiYWRtaW4iLCJvcmdDb2RlIjoiMzUwMDAiLCJkZXB0Q29kZSI6IjM1MDAwIiwiYXVkIjoiYWRtaW4iLCJpc3MiOiJhZG1pbiIsImV4cCI6MTU5MzUzNTU5OH0.0pJAojRtT5lx6PS2gH_Q9BmBxeNlgBL37ABX22HyDlebbr66cCjVYZ0v0zbLO_9241FX9-FZpCkEqE98MQOyWw',
      }
    }
  }else{
    return {
      'code': 500,
      'msg':'登陆失败,账号密码不正确'
    }
  }
}

const getUpload = (req: any, res: any)=> {
  return {
    'code': 200,
    'msg':'上传成功',
    'success': true
  }
}

export default{
  getInfo, getMenu, getLogin, getPermission, getUpload
}