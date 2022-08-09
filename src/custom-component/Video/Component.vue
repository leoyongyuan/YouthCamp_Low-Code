<template>
    <div>
        <video 
            controls 
            width="400"
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
    },
    methods: {
        changevideo() {
            this.videolink = this.propValue.url
        },
    },
}
</script>
