<!-- eslint-disable vue/no-v-html -->
<template>
    <div class="rect-shape">
        <div :prop-value="element.propValue" :element="element">
            <div class="box">
                <span>
                    <span v-if="status === 'unStart'">距{{ propValue.text }}开始</span>
                    <span v-if="status === 'ongoing'">距{{ propValue.text }}结束</span>
                    <span v-if="status === 'end'">{{ propValue.text }}已经结束</span>
                </span>
                <template v-if="status !== 'end'">
                    <span>
                        <p>{{ hour | timeFormat }}</p>
                        :
                    </span>
                    <span>
                        <p>{{ minutes | timeFormat }}</p>
                        :
                    </span>
                    <span>
                        <p>{{ seconds | timeFormat }}</p>
                    </span>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

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
            diff: 0,
            timer: null,
            // unStart:未开始  ongoing:进行中  end:已结束
            status: 'unStart',
        }
    },
    computed: {
        ...mapState([
            'editMode',
        ]),
        hour() {
            return Math.floor(this.diff / 1000 / 3600)
        },
        minutes() {
            return Math.floor(this.diff / 1000 / 60) % 60
        },
        seconds() {
            return Math.floor(this.diff / 1000) % 60
        },
    },
    watch: {
        'propValue.diff': function () {
            this.getTimestamp()
        },
        'propValue.starttime': function () {
            this.getTimestamp()
        },
        'propValue.endtime': function () {
            this.getTimestamp()
        },
    },
    filters: {
        // 时间补零格式化
        timeFormat(value) {
            let str = value + ''
            if (str.length == 1) {
                return `0${str}`
            }
            return str
        },
    },
    methods: {
        getTimestamp() {
            let startUni = moment(this.propValue.starttime).unix()
            let endUni = moment(this.propValue.endtime).unix()
            let nowUni = moment().unix()
            console.log('触发')

            // 活动还未到开始时间
            if (nowUni < startUni) {
                console.log('活动还未到开始时间')

                this.status = 'unStart'
                this.countdownHandle()
            // 活动正在进行重
            } else if (startUni <= nowUni && nowUni < endUni) {
                console.log('活动正在进行中')

                this.status = 'ongoing'
                this.countdownHandle()
                // 活动已结束
            } else {
                console.log('活动已结束')
                this.status = 'end'
                clearTimeout(this.timer)
            }
        },
        // 倒计时
        countdownHandle() {
            // 立即执行一次
            this.diffTimeHandle()
            // 定时循环执行
            this.timer = setInterval(() => this.diffTimeHandle(), 1000)
        },

        diffTimeHandle() {
            // 当前时间
            let now = moment()
            // 结束时间
            let end = this.status == 'unStart' ? moment(this.propValue.starttime) : moment(this.propValue.endtime)
            // 时间差
            this.diff = end.diff(now)

            if (this.diff <= 0) {
                clearTimeout(this.timer)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.box {
    width: 150px;
    height: 30px;
    display: inline;
}
p {
    display: inline-block;
    // background-color: #1366db;
    border-radius: 2px;

    font-size: 13px;
    line-height: 26px;
    width: 25px;
    height: 25px;
    margin-left: 5px;
    margin-bottom: 2px;
}
</style>
