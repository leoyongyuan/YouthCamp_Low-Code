<template>
    <div class="attr-list">
        <el-form>
            <el-form-item v-for="({ key,label }, index) in styleKeys" :key="index" :label="label">
                <el-color-picker v-if="isIncludesColor(key)" v-model="curComponent.style[key]" show-alpha></el-color-picker>
                <el-select v-else-if="selectKey.includes(key)" v-model="curComponent.style[key]">
                    <el-option
                        v-for="item in optionMap[key]"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
                <el-input v-else v-model.number="curComponent.style[key]" type="number" />
            </el-form-item>
            <el-form-item label="添加视频">
                <div class="avatar">
                    <input
                        class="upload"
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

export default {
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
    background: #D0EEFF;
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
