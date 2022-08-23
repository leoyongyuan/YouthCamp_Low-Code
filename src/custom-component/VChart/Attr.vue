<template>
    <div class="attr-list">
        <el-form>
            <el-form-item label="选择图表类型">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                        v-for="(item, index) in optionsum"
                        :key="index"
                        :label="item.label"
                        :value="item.label"
                        :disabled="item.disabled"
                        @click.native="selectoption(item.chart)">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="随机生成数据">
                <el-button 
                    plain 
                    @click="randomData">
                    生成数据
                </el-button>
            </el-form-item>
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
        </el-form>
    </div>
</template>

<script>
import { styleData, textAlignOptions, borderStyleOptions, verticalAlignOptions, selectKey, optionMap } from '@/utils/attr'
import { optionsum } from '@/custom-component/VChart/data.js'

export default {
    data() {
        return {
            optionMap,
            styleData,
            textAlignOptions,
            borderStyleOptions,
            verticalAlignOptions,
            selectKey,
            optionsum,
            value: '折线图',
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

        selectoption(chart) {
            this.curComponent.propValue.chart = chart
        },
        randomData() {
            let list = this.curComponent.propValue.list
            let curChart = null
            let data = []
            for (let obj of list) {
                if (obj.name === this.value) {
                    curChart = obj
                    break
                }
            }
            
            let cnt = curChart.count
            for (let i = 0; i < cnt; i++) {
                if (this.value === '圆环图') {
                    let name = String.fromCharCode(65 + i)
                    let value = Math.floor(Math.random() * 100)
                    let obj = { value, name }
                    data.push(obj)
                } else {
                    data.push(Math.floor(Math.random() * 100))
                }
            }
            this.curComponent.propValue.data = data
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
</style>
