import React, { useState,type FC } from 'react'
import './style.less'

interface Iporps{
    onText?:string,
    offText?:string,
    checked?:boolean,
    onClick?:(checked:boolean,e:Event)=>void,
    disabled?:boolean,
}

const Switch:FC<Iporps> = (props) => {

    let {onText,offText,checked,onClick,disabled} = props
    onText = onText?onText:''
    offText = offText?offText:''
    checked = checked?checked:false
    disabled = disabled?disabled:false
    onClick = onClick?onClick:function(checked:boolean,e:any){}

    let defultClass = ['A187-switch','switch-off','switch-allowed']

    if(disabled){
        defultClass[2] = defultClass[1] + '-disabled'
    }

    const [classNameStr,setClassNameStr] = useState<string[]>(defultClass)
    const [ischecked,setisChecked] = useState<boolean>(checked)

    const handleClick = (e:any)=>{
        //如果禁用则直接返回
        if(disabled) return
        let newClassNameStr = [...classNameStr]
        switch(ischecked){
            case true:
                newClassNameStr[1]='switch-off'
                setisChecked(false)
                break
            case false:
                newClassNameStr[1]='switch-on'
                setisChecked(true)
                break
        }
        setClassNameStr(newClassNameStr)
        onClick!(!ischecked,e)
    }

  return (
    <div className={classNameStr.join(' ')} onClick={handleClick}>
        <span>{ischecked?onText:offText}</span>
        <div className='switch-circle'></div>
    </div>
  )
}

export default Switch