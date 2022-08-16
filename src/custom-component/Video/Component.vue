<template>
    <div>
        <canvas ref="canvas"></canvas>
        <video
            ref="video"
            controls
            autoplay
            loop="loop"
            width="0"
            :src="videolink"
            type="video/mp4">
        </video>
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
            videolink: this.propValue.url,
        }
    },
    watch: {
        'propValue.url': function () {
            this.changevideo()
        },
        'element.style.width': function () {
            this.render()
        },
        'element.style.height': function () {
            this.render()
        },
    },
    mounted() {
        this.canvas = this.$refs.canvas
        this.ctx = this.canvas.getContext('2d')
        this.video = this.$refs.video
        this.render()
        this.video.play()
    },
    methods: {
        changevideo() {
            this.videolink = this.propValue.url
        },
        render() {
            function renderWord() {
                const { width, height } = this.element.style
                this.canvas.width = width
                this.canvas.height = height
                this.ctx.clearRect(0, 0, width, height)
                this.ctx.drawImage(this.video, 0, 0, width, height)
                setTimeout(renderWord.bind(this), 0)
            }
            setTimeout(renderWord.bind(this), 0)
        },
    },
}
</script>
