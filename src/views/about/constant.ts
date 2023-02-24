/**
 * @Description:
 * @Date: 2022/9/20 2:32 PM
 */
export const getFormSchema = () => [
  {
    field: 'name',
    type: 'input',
    props: { label: '姓名' },
    layout: { xs: 24, sm: 12, md: 8 },
  },
  {
    field: 'gender',
    type: 'select',
    props: { label: '性别' },
    layout: { xs: 24, sm: 12, md: 8 },
    options: [
      { label: '女', value: 0, customLabel: '0-女' },
      { label: '男', value: 1 },
    ],
  },
]
