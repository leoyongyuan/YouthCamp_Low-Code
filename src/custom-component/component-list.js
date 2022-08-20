// 公共样式
export const commonStyle = {
    rotate: 0,
    opacity: 1,
}

export const commonAttr = {
    animations: [],
    events: {},
    groupStyle: {}, // 当一个组件成为 Group 的子组件时使用
    isLock: false, // 是否锁定组件
}

// 编辑器左侧组件列表
const list = [

    // 文本框组件
    {
        component: 'VText',
        label: '文字',
        propValue: '双击编辑文字',
        icon: 'wenben',
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false,
            time: 1000,
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 200,
            height: 28,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
        },
    },

    // 按钮组件
    {
        component: 'VButton',
        label: '按钮',
        propValue: '按钮',
        icon: 'button',
        style: {
            width: 100,
            height: 34,
            borderWidth: 1,
            borderColor: '',
            borderRadius: '',
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: '',
            color: '',
            backgroundColor: '',
        },
    },

    // 图片组件
    {
        component: 'Picture',
        label: '图片',
        icon: 'tupian',
        propValue: {
            url: require('@/assets/title.jpg'),
            // url: '../assets/title.jpg',
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 300,
            height: 200,
            borderRadius: '',
        },
    },

    // 矩形组件
    {
        component: 'RectShape',
        label: '矩形',
        propValue: '&nbsp;',
        icon: 'juxing',
        style: {
            width: 200,
            height: 200,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: '',
            borderStyle: 'solid',
            borderRadius: '',
            verticalAlign: 'middle',
        },
    },

    // 直线组件
    {
        component: 'LineShape',
        label: '直线',
        propValue: '',
        icon: 'zhixian',
        style: {
            width: 200,
            height: 2,
            backgroundColor: '#000',
        },
    },

    // 圆形组件
    {
        component: 'CircleShape',
        label: '圆形',
        propValue: '&nbsp;',
        icon: '24gl-circle',
        style: {
            width: 200,
            height: 200,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: '',
            borderStyle: 'solid',
            borderRadius: '',
            verticalAlign: 'middle',
        },
    },

    // 星形组件
    {
        component: 'SVGStar',
        label: '星形',
        icon: 'kongwujiaoxing',
        propValue: '',
        style: {
            width: 80,
            height: 80,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            backgroundColor: 'rgba(255, 255, 255, 1)',
        },
    },

    // 三角形组件
    {
        component: 'SVGTriangle',
        label: '三角形',
        icon: 'xingzhuang-sanjiaoxing',
        propValue: '',
        style: {
            width: 80,
            height: 80,
            fontSize: '',
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            backgroundColor: 'rgba(255, 255, 255, 1)',
        },
    },

    // 表格组件
    {
        component: 'VTable',
        label: '表格',
        icon: 'biaoge',
        propValue: {
            data: [
                ['表头1', '表头2', '表头3'],
                ['内容1', '内容2', '内容3'],
            ],
            stripe: true,
            thBold: true,
        },
        request: {
            method: 'GET',
            data: [],
            url: '',
            series: false,
            time: 1000,
            paramType: '', // string object array
            requestCount: 0, // 请求次数限制，0 为无限
        },
        style: {
            width: 600,
            height: 200,
            fontSize: '',
            fontWeight: 400,
            textAlign: 'center',
            color: '',
            backgroundColor: 'rgba(255, 255, 255, 1)',
        },
    },

    // 链接组件
    {
        component: 'VLink',
        label: '链接',
        propValue: {
            text: '添加链接',
            link: '',
        },
        icon: 'el-icon-link',
        style: {
            width: 200,
            height: 28,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
        },
    },

    // 公告组件
    {
        component: 'Vactivity',
        label: '公告',
        propValue: {
            text: '活动',
            starttime: '',
            endtime: '',
            diff: 0,
        },
        icon: 'el-icon-postcard',
        style: {
            width: 360,
            height: 40,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '3',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: 'rgb(255, 255, 255)',
            borderStyle: 'solid',
            borderRadius: '',
            verticalAlign: 'middle',
        },
    },

    // 视频组件
    {
        component: 'Video',
        label: '视频',
        icon: 'el-icon-video-camera',
        propValue: {
            url: require('@/assets/video1.mp4'),
            flip: {
                horizontal: false,
                vertical: false,
            },
        },
        style: {
            width: 500,
            height: 300,
            borderRadius: '',
        },
    },
    {
        component: 'Vboard',
        label: '画板',
        propValue: {
            colors: ['black', 'red', 'orange', 'green', 'blue'],
            nowcolor: '',
            eraser: false,
            clear: false,
        },
        icon: 'el-icon-data-board',
        style: {
            width: 600,
            height: 300,
            borderRadius: '',
            backgroundColor: 'white',
        },
    },
    {
        component: 'VChart',
        label: '图表',
        propValue: {
            chart: 'optionline',
        },
        icon: 'el-icon-data-analysis',
        style: {
            width: 500,
            height: 300,
            fontSize: 14,
            fontWeight: 400,
            lineHeight: '',
            letterSpacing: 0,
            textAlign: 'center',
            color: '',
            borderColor: '#000',
            borderWidth: 1,
            backgroundColor: '',
            borderStyle: 'solid',
            borderRadius: '',
            verticalAlign: 'middle',
        },
    },
]

for (let i = 0, len = list.length; i < len; i++) {
    const item = list[i]
    item.style = { ...commonStyle, ...item.style }
    list[i] = { ...commonAttr, ...item }
}

export default list
