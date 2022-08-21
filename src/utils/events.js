// 编辑器自定义事件
import { Message, Notification } from 'element-ui'

const events = {
    redirect(param) {
        if (param.url) {
            window.location.href = param.url
        }
    },

    alert(param) {
        if (param.content) {
            alert(param.content)
        }
    },

    warn(param) {
        Message({ 
            message: param.content,
            type: param.type,
        })
    },

    Notification(param) {
        Notification({ 
            message: param.content,
            title: param.title,
            type: param.type,
            position: param.position, 
        })
    },
}

const mixins = {
    methods: events,
}

const eventList = [
    {
        key: 'redirect',
        label: '跳转事件',
        event: events.redirect,
        param: '',
    },
    {
        key: 'alert',
        label: 'alert 事件',
        event: events.alert,
        param: '',
    },
    {
        key: 'warn',
        label: '提醒',
        event: events.warn,
        param: '',
    },
    {
        key: 'Notification',
        label: '通知',
        event: events.Notification,
        param: '',
    },
]

export {
    mixins,
    events,
    eventList,
}