export const rules = {
  name: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[a-zA-Z0-9]{5,}$/,
      message: '密码必须是5位以上的字母或数字',
      trigger: 'blur'
    }
  ],
  tel: [
    {
      required: true,
      message: '手机号不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^1[0-9]{10}$/,
      message: '请输入正确的手机号',
      trigger: 'blur'
    },
    {
      pattern: /^1[0-9]{10}$/,
      message: '请输入正确的手机号',
      trigger: 'change'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码不能为空',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{6}$/,
      message: '请输入正确的验证码',
      trigger: 'blur'
    }
  ]
}
