<template>
    <div style="margin-top:10px">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="跳转链接">
                <el-input
                    v-model="param.url"
                    type="textarea"
                    placeholder="请输入完整的 URL"
                    @keydown.native.stop
                />
            </el-form-item>
            <el-form-item>    
                <el-button
                    type="primary"
                    style="width:100px;"
                    @click="addEvent(event)"
                >确定</el-button>
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
            param: { 
                url: 'https://juejin.cn/',
            },
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