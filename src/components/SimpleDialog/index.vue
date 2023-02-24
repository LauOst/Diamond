<template>
  <div>
    <el-dialog v-model="dialogVisible" :title="title">
      <slot />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleSubmit">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
// drawer框状态
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '680px',
  },
})

const dialogVisible = ref<boolean>(props.visible)

const emit = defineEmits(['update:visible', 'dialogSubmit'])
watch(
  () => props.visible,
  (val) => {
    dialogVisible.value = val
  },
)
watch(
  () => dialogVisible.value,
  (val) => {
    emit('update:visible', val)
  },
)

// 提交数据（新增/编辑）
const handleSubmit = () => emit('dialogSubmit')
</script>

<style lang="scss" scoped></style>
