import { buttonPrefix, inputPrefix, popoverBubblePrefix, switchPrefix } from "./interface"

//组件
type componentName = 'Button'|'Input'|'Switch'|'PopoverBubble'
//参数类型
type paramsType = buttonPrefix|inputPrefix|switchPrefix|popoverBubblePrefix
//组件对应的函数
const componentClassMap = {
    'Button':getButtonClass,
    'Input':getInputClass,
    'Switch':getSwitchClass,
    'PopoverBubble':getPopoverBubbleClass,
}

//用于管理类名的函数
const classNames = (type:componentName,params:paramsType)=>{
    return componentClassMap[type](params)
}

//按钮组件
function getButtonClass(params:buttonPrefix){
    const sizeMap = {'small':'buttonSmallSize','medium':'buttonMediumSize',
    'large':'buttonLargeSize','adapt':'buttonAdaptSize'}
    const typeMap = {'primary':'buttonPrimaryType','default':'buttonDefaultType',
    'text':'buttonTextType','link':'buttonLinkType'}
    const disabledTypeMap = {'primary':'buttonDisabledDefault','default':'buttonDisabledDefault',
    'text':'buttonDisabledNoBorder','link':'buttonDisabledNoBorder'}

    let classNameStr = ['A187-button','buttonMediumSize','buttonDefaultType']

    const {size,type,disabled} = params

    classNameStr[1] = size?sizeMap[size]:classNameStr[1]
    classNameStr[2] = type?typeMap[type]:classNameStr[2]
    classNameStr[2] = disabled?disabledTypeMap[type?type:'default']:classNameStr[2]

    //拼接类名
    return classNameStr.join(' ')
}

//开关组件
function getSwitchClass(params:switchPrefix){

    const {checked,disabled} = params

    let classNameStr = ['A187-switch','switch-off','switch-allowed']

    if(checked) classNameStr[1] = 'switch-on'

    if(disabled){
        classNameStr[2] = classNameStr[1] + '-disabled'
    }

    return classNameStr.join(' ')
}

//输入框组件
function getInputClass(params:inputPrefix){
    const {size} = params

    let classNamestr = ['A187-input','input-medium-size']

    classNamestr[1] = `input-${size}-size`

    return classNamestr.join(' ')
}

//气泡框组件
function getPopoverBubbleClass(params:popoverBubblePrefix){
    const {show,placement} = params

    let classNameStr = ['A187-popover-bubble','A187-bubble-hide',`A187-bubble-${placement}`]

    if(show === true) classNameStr[1] = 'A187-bubble-show'

    return classNameStr.join(' ')
}

export {classNames}