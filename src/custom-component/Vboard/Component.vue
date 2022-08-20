<template>
    <div style="border:1px solid black">
        <canvas 
            ref="canvas"
            @mousedown="Mousedown"
            @mousemove="Mousemove"
            @mouseup="Mousestop"
        ></canvas>
    </div>
</template>

<script>
export default {
    props: {
        propValue: {
            type: Object,
            require: true,
            default: () => {},
        },
        element: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            startPoint: { x: undefined, y: undefined },
            painting: false,
            EraserEnabled: false,
            width: 0,
            height: 0,
        }
    },
    watch: {
        'element.style.width': function () {
            this.getSize()
        },
        'element.style.height': function () {
            this.getSize()
        },
        'propValue.nowcolor': function () {
            this.changecolor()
        },
        'propValue.eraser': function () {
            this.Eraser()
        },
        'propValue.clear': function () {
            this.Clear()
        },
    },
    mounted() {
        this.canvas = this.$refs.canvas
        this.ctx = this.canvas.getContext('2d')
        this.ctx.strokeStyle = this.propValue.nowcolor
        this.getSize()
    },
    methods: {
        Mousedown(e) {
            let x = e.offsetX
            let y = e.offsetY
            this.painting = true
            if (this.EraserEnabled) {
                this.ctx.clearRect(x - 15, y - 15, 30, 30)
            }
            this.startPoint = { x, y }
        },
        
        Mousemove(e) {
            let x = e.offsetX
            let y = e.offsetY
            let newPoint = { x, y }
            if (this.painting) {
                if (this.EraserEnabled) {
                    this.ctx.clearRect(x - 30, y - 30, 30, 30)
                } else {
                    this.drawLine(this.startPoint.x, this.startPoint.y, newPoint.x, newPoint.y)
                }
                this.startPoint = newPoint
            }
        },

        Mousestop() {
            this.painting = false
        },

        drawLine(xStart, yStart, xEnd, yEnd) {
            // 开始绘制
            this.ctx.beginPath()
            this.ctx.lineWidth = 2
            this.ctx.moveTo(xStart, yStart)
            this.ctx.lineTo(xEnd, yEnd)
            this.ctx.stroke()
            this.ctx.closePath()
        },

        changecolor() {
            this.ctx.strokeStyle = this.propValue.nowcolor
            this.EraserEnabled = false
        },

        Eraser() {
            this.EraserEnabled = !this.EraserEnabled
        },
        Clear() {
            this.ctx.fillStyle = 'white'
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        },
        getSize() {
            const { width, height } = this.element.style
            this.canvas.width = width
            this.canvas.height = height
        },
    },
}
</script>

<style lang="scss" scoped>
</style>
