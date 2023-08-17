

//按钮
type sizeType = 'small'|'medium'|'large'|'adapt'
type buttonStyleType = 'primary'|'default'|'text'|'link'
interface buttonPrefix {
    size?:sizeType;         //按钮大小
    type?:buttonStyleType;  //按钮样式
    disabled?:boolean;      //是否禁用
    loading?:boolean;       //是否为加载中
}

//开关
interface switchPrefix {
    checked?: boolean, //开关是否开启
    disabled?: boolean, //是否禁用
}

//输入框
interface inputPrefix {
    size?:sizeType, //输入框大小
}

//气泡框
type bubblePositionType = 'top'|'topLeft'|'topRight'|'bottom'|'bottomLeft'|'bottomRight'|'rightTop'|
'right'|'rightBottom'|'leftTop'|'left'|'leftBottom'
type triggerType = 'click'|'hover'|'focus'
interface popoverBubblePrefix {
    show?:boolean
    placement?:string
}


export {buttonPrefix,sizeType,buttonStyleType,
    switchPrefix,inputPrefix,
    bubblePositionType,triggerType,popoverBubblePrefix}