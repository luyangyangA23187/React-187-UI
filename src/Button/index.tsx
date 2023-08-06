import React,{type FC,ReactNode} from 'react'
import './style.less'

type sizeType = 'small'|'medium'|'large'|'adapt'
type styleType = 'primary'|'default'|'text'|'link'

interface Iporps{
    children:ReactNode[]|ReactNode;
    size?:sizeType;
    fontSize?:string;
    type?:styleType;
    disabled?:boolean;
    loading?:boolean;
    onClick?:Function;
}

const sizeMap = {'small':'buttonSmallSize','medium':'buttonMediumSize',
'large':'buttonLargeSize','adapt':'buttonAdaptSize'}
const typeMap = {'primary':'buttonPrimaryType','default':'buttonDefaultType',
'text':'buttonTextType','link':'buttonLinkType'}
const disabledTypeMap = {'primary':'buttonDisabledDefault','default':'buttonDisabledDefault',
'text':'buttonDisabledNoBorder','link':'buttonDisabledNoBorder'}

const Button:FC<Iporps> = (props) => {

    let {size,fontSize,type,disabled,loading,onClick} = props

    //是否加载中
    loading = loading?loading:false
    //如果在加载中则禁用默认为真
    disabled = loading?true:disabled
    //字体大小
    fontSize = fontSize?fontSize:'16px'

    let classNameStr:string|string[] = ['A187-button','buttonMediumSize','buttonDefaultType']
    classNameStr[1] = size?sizeMap[size]:classNameStr[1]
    classNameStr[2] = type?typeMap[type]:classNameStr[2]
    classNameStr[2] = disabled?disabledTypeMap[type?type:'default']:classNameStr[2]
    classNameStr = classNameStr.join(' ')

    let spanStyle = {
        'fontSize':fontSize,
        'opacity':loading?0:1
    }
  return (
    <div className={classNameStr} onClick={(e)=>{
        //禁用则不触发点击事件
        if(!disabled && onClick) onClick(e)
    }} >
        {loading&&<div className='loadingAnimation' style={{'width':fontSize,'height':fontSize}}></div>}
        <span style={spanStyle}>{props.children}</span>
    </div>
  )
}


export default Button