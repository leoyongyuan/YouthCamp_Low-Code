<template>
    <div class="attr-list">
        <CommonAttr></CommonAttr>
        <el-form>
            <el-form-item label="工具">
                <div style="width:100%;margin-top:40px">
                    <el-button 
                        style="padding:10px"
                        @click="Eraser" 
                        type="primary" 
                        icon="el-icon-search">橡皮
                    </el-button>
                    <el-button 
                        style="padding:10px"
                        @click="Clear" 
                        type="danger" 
                        icon="el-icon-search">清空
                    </el-button>
                </div>
                
            </el-form-item>
            <el-form-item label="画笔颜色">
                <div
                    style="margin-top:40px"
                  
                >
                    <el-button 
                        v-for="(item, index) in curComponent.propValue.colors" 
                        :key="index"
                        :id="item"
                        :class="item"
                        class="colors"
                        icon="el-icon-edit" 
                        style="float:left"
                        circle
                        @click="selectcolor(item)"
                    ></el-button>
                </div>
                
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import CommonAttr from '@/custom-component/common/CommonAttr.vue'

export default {
    components: { CommonAttr },
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
        selectcolor(color) {
            this.curComponent.propValue.nowcolor = color
            this.curComponent.propValue.eraser = false
        },
        Eraser() {
            this.curComponent.propValue.eraser = true
        },
        Clear() {
            this.curComponent.propValue.clear = !this.curComponent.propValue.clear
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
    *{margin:0;padding: 0;}
    ul,ol{list-style: none;}
    .actions{
        position: fixed;
        top: 0;
        left: 0;
    }
    .actions> svg{
        width: 1.5rem;
        height: 1.5rem;
        margin: 0.5rem 1rem;
        transition: all 0.3s;
    }
    .actions svg.active{
        fill: orangered;
        transform: scale(1.4);
    }
    .colors {
        display: block;
        margin:5px;
    }
    .black{background: black;color:white ;}
    .red{background: red;color: white;}
    .orange{background: orange;color: white;}
    .green{background: green;color: white;}
    .blue{background: blueviolet;color: white;}
    .cursor1{cursor: require('@/assets/ico/black.ico') 8 20,auto;}
    .cursor2{cursor: require('@/assets/ico/red.ico') 8 20,auto;}
    .cursor3{cursor: require('@/assets/ico/orange.ico') 8 20,auto;}
    .cursor4{cursor: require('@/assets/ico/green.ico') 8 20,auto;}
    .cursor5{cursor: require('@/assets/ico/blue.ico') 8 20,auto;}
    .xiangpica{cursor: require('@/assets/ico/xiangpica.ico') 8 20,auto;}
</style>
