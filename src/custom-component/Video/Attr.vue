<template>
    <div class="attr-list">
        <CommonAttr></CommonAttr>
        <el-form>
            <el-form-item label="添加视频">
                <div class="avatar el-icon-upload el-icon--right">
                    <input
                        class="upload "
                        type="file"
                        @change="getObjectURL">
                    上传视频
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { styleData, textAlignOptions, borderStyleOptions, verticalAlignOptions, selectKey, optionMap } from '@/utils/attr'
import CommonAttr from '@/custom-component/common/CommonAttr.vue'

export default {
    components: { CommonAttr },

    data() {
        return {
            optionMap,
            styleData,
            textAlignOptions,
            borderStyleOptions,
            verticalAlignOptions,
            selectKey,
        }
    },
    computed: {
        styleKeys() {
            if (this.curComponent) {
                const curComponentStyleKeys = Object.keys(this.curComponent.style)
                return this.styleData.filter(item => curComponentStyleKeys.includes(item.key))
            }
            return []
        },
        curComponent() {
            return this.$store.state.curComponent
        },
    },
    methods: {
        isIncludesColor(str) {
            return str.toLowerCase().includes('color')
        },

        getObjectURL(e) {
            let url = null
            let fr = new FileReader()
            fr.readAsDataURL(e.target.files[0])
            fr.onload = e => {
                url = e.target.result
                this.curComponent.propValue.url = url
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.attr-list {
    overflow: auto;
    padding: 20px;
    padding-top: 0;
    height: 100%;
}

.avatar {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 34px;
    line-height: 34px;
    border: 1px solid #99D3F5;
    border-radius: 4px;
    text-align: center;
    background: #409eff;
    color: white;
    cursor: pointer;
}

.avatar input {
    display: inline-block;
    // 设置input绝对定位，后面的文字才能往上移动
    position: absolute;
    font-size: 12px;
    top: 0;
    left: 0;
    // 将原来的input变透明
    opacity: 0;
    z-index: 1;
    cursor: pointer;
}
</style>
