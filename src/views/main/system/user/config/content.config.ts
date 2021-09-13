export const contentTableConfig = {
  showSelectColumn: true,
  showIndexColumn: true,
  title: '用户列表',
  propList: [
    { prop: 'name', label: '用户名', width: '100' },
    {
      prop: 'realname',
      label: '真实姓名',
      width: '100'
    },
    { prop: 'cellphone', label: '手机号码', minWidth: '110' },
    { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '120',
      slotName: 'handler'
    }
  ]
}
