import React, { useState,useLayoutEffect,type FC, useRef, useEffect } from 'react'
import './style.less'
import { switchPrefix } from '187-UI/utils/interface'
import { classNames } from '187-UI/utils/classNames'
import { moveAnimation, usePropsState } from '187-UI/utils/utils'

interface Iporps extends switchPrefix{
    onText?:string,
    offText?:string,
    onClick?:(checked:boolean,e:Event)=>void,
}

const Switch:FC<Iporps> = (props) => {

    const {onText,offText,checked,onClick,disabled} = props

    /* const [ischecked,setisChecked] = useState<boolean>(false) */
    const [getChecked,setChecked] = usePropsState(checked,false)

    let contextDom = useRef<HTMLSpanElement|null>(null)
    let circleDom = useRef<HTMLDivElement|null>(null)

    const classNameStr = classNames('Switch',{
        checked:getChecked,
        disabled:disabled
    })

    const preLeft = circleDom.current?.getBoundingClientRect().left

    useEffect(()=>{
        if(!circleDom.current || !contextDom.current) return
        const [offsetX,offsetY] = moveAnimation(circleDom.current,200,preLeft)
        moveAnimation(contextDom.current,200,contextDom.current.getBoundingClientRect().left + offsetX)
    })



    const handleClick = (e:any)=>{
        //如果禁用则直接返回
        if(disabled) return
        //触发回调
        onClick!(!getChecked,e)
        //设置状态
        if(checked===undefined) setChecked(!getChecked)
    }

  return (
    <div className={classNameStr} onClick={handleClick}>
        <span ref={contextDom}>{getChecked?onText:offText}</span>
        <div ref={circleDom} className='switch-circle'></div>
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