import React, { useState,type FC } from 'react'
import './style.less'
import { switchPrefix } from '187-UI/utils/interface'
import { classNames } from '187-UI/utils/classNames'

interface Iporps extends switchPrefix{
    onText?:string,
    offText?:string,
    onClick?:(checked:boolean,e:Event)=>void,
}

const Switch:FC<Iporps> = (props) => {

    const {onText,offText,checked,onClick,disabled} = props

    const [ischecked,setisChecked] = useState<boolean>(false)

    //判断由prop决定还是由state决定
    const getChecked = checked===undefined?ischecked:checked

    const handleClick = (e:any)=>{
        //如果禁用则直接返回
        if(disabled) return
        //触发回调
        onClick!(!getChecked,e)
        //设置状态
        if(checked===undefined) setisChecked(!ischecked)
    }

    const classNameStr = classNames('Switch',{
        checked:getChecked,
        disabled:disabled
    })

  return (
    <div className={classNameStr} onClick={handleClick}>
        <span>{getChecked?onText:offText}</span>
        <div className='switch-circle'></div>
    </div>
  )
}

Switch.defaultProps = {
    onText:'',
    offText:'',
    checked:undefined,
    disabled:false,
    onClick:function(checked:boolean,e:any){},
}

export default Switch