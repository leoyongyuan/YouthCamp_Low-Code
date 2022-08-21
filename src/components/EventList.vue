<template>
    <div class="event-list">
        <div class="div-events">
            <el-button @click="isShowEvent = true">添加事件</el-button>
            <div>
                <el-tag
                    v-for="event in Object.keys(curComponent.events)"
                    :key="event"
                    closable
                    @close="removeEvent(event)"
                >
                    {{ event }}
                </el-tag>
            </div>
        </div>

        <!-- 选择事件 -->
        <Modal v-model="isShowEvent">
            <el-tabs v-model="eventActiveName" stretch>
                <el-tab-pane
                    v-for="item in eventList"
                    :key="item.key"
                    :label="item.label"
                    :name="item.key"
                    style="padding: 0 20px;"
                >
                    <Redirect
                        v-if="item.key === 'redirect'"
                        :event="item.key"
                        v-model="isShowEvent"
                    />
                    <Alert
                        v-if="item.key === 'alert'"
                        :event="item.key"
                        v-model="isShowEvent"
                    />
                    <Warn
                        v-if="item.key === 'warn'"
                        :event="item.key"
                        v-model="isShowEvent"
                    />
                    <Notification
                        v-if="item.key === 'Notification'"
                        :event="item.key"
                        v-model="isShowEvent"
                    />
                </el-tab-pane>
            </el-tabs>
        </Modal>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Modal from '@/components/Modal'
import { eventList } from '@/utils/events'
import Redirect from '../events/redirect.vue'
import Warn from '../events/warn.vue'
import Alert from '../events/alert.vue'
import Notification from '../events/Notification.vue'

export default {
    components: { Modal, Notification, Warn, Alert, Redirect },
    data() {
        return {
            isShowEvent: false,
            eventURL: '',
            eventActiveName: 'redirect',
            eventList,
        }
    },
    computed: mapState([
        'curComponent',
    ]),
    methods: {
        addEvent(event, param) {
            this.isShowEvent = false
            this.$store.commit('addEvent', { event, param })
        },

        removeEvent(event) {
            this.$store.commit('removeEvent', event)
        },
    },
}
</script>

<style lang="scss" scoped>
.el-tabs__nav-scroll {
    padding-right: 20px;
}
.event-list {
    .div-events {
        text-align: center;
        padding: 0 20px;

        .el-button {
            width: 140px;
            display: inline-block;
            margin-bottom: 10px;
        }

        .el-tag {
            display: block;
            width: 50%;
            margin: auto;
            margin-bottom: 10px;
        }
    }
}
</style>
