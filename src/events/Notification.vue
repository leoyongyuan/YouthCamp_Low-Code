<template>
    <div style="margin-top:10px">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="弹出位置">
                <el-select v-model="param.position" placeholder="请选择弹出位置">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="通知图标">
                <el-select  v-model="param.type" placeholder="请选择图标">
                    <el-option
                        v-for="item in types"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="通知标题">
                <el-input
                    v-model="param.title"
                    type="textarea"
                    placeholder="请输入要 通知 的标题"
                    @keydown.native.stop
                />
            </el-form-item>
            <el-form-item label="通知内容">
                <el-input
                    v-model="param.content"
                    type="textarea"
                    placeholder="请输入要 通知 的内容"
                    @keydown.native.stop
                />
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary" 
                    style="width:100px"
                    @click="addEvent(event)"
                >确定</el-button
                >
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'show',
        event: 'close',
    },
    props: {
        show: {
            type: Boolean,
            default: false,
        },
        event: {
            type: String,
        },
    },
    data() {
        return {
            options: [
                {
                    value: 'top-right',
                    label: '右上角',
                },
                {
                    value: 'bottom-right',
                    label: '右下角',
                },
                {
                    value: 'top-left',
                    label: '左上角',
                },
                {
                    value: 'bottom-left',
                    label: '左下角',
                },
            ],
            types: [{
                label: '成功',
                value: 'success',
            },
            {
                label: '错误',
                value: 'error',
            },
            {
                label: '警告',
                value: 'warn',
            },
            {
                label: '消息',
                value: 'info',
            }],
            param: {
                position: 'top-right',
                title: '',
                content: '',
                type: '',
            },
          
        //   param: {
        //        value: 'top-right',
        //        in: ''
        //   }
        }
    },
    methods: {
        addEvent(event) {
            console.log(event, this.param)
            this.isShowEvent = false
            this.$emit('close')
            let param = this.param
            this.$store.commit('addEvent', { event, param })
        },

        removeEvent(event) {
            this.$store.commit('removeEvent', event)
        },
    },
}
</script>

<style>
</style>