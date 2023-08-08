import React,{type FC,ReactNode, useState, MouseEvent, useEffect} from 'react'
import type { bubblePositionType, triggerType } from '187-UI/utils/config';
import './style.less'

interface Iporps{
    children:ReactNode|ReactNode[],
    content:React.JSX.Element|ReactNode,
    title?:string,
    trigger?:triggerType,
    placement?:bubblePositionType
}

const Popover:FC<Iporps> = (props) => {

    //展示气泡框
    const [isShow,setisShow] = useState<boolean>(false)
    //给移入触发用的计时器,避免气泡消失太快
    const [leaveTimer,setLeaveTimer] = useState<any>()

    let {children,content,title,trigger,placement} = props


    //默认参数
    trigger = trigger?trigger:'click'
    placement = placement?placement:'top'

    useEffect(()=>{
        //点击气泡外则隐藏气泡
        document.addEventListener('click',()=>{
            if(trigger!=='click') return
            setisShow(false)
        })
    },[])

    //触发方式
    //点击触发
    const onClick = ()=>{
        if(trigger!=='click') return
        setisShow(!isShow)
    }
    //聚焦触发
    const onFocus = ()=>{
        if(trigger!=='focus') return
        setisShow(true)
    }
    const onBlur = ()=>{
        if(trigger!=='focus') return
        setisShow(false)
    }
    //移入触发
    const onMouseEnter = ()=>{
        if(trigger!=='hover') return
        if(leaveTimer){
            clearTimeout(leaveTimer)
            setLeaveTimer(null)
        }
        setisShow(true)
    }
    const onMouseLeave = ()=>{
        if(trigger!=='hover') return
        setLeaveTimer(setTimeout(()=>setisShow(false),100))
    }

  return (
    <div className='A187-popover' onClick={(e)=>{e.nativeEvent.stopImmediatePropagation()}}
        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {isShow&&<div className={`A187-popover-bubble A187-bubble-${placement}`}>
            {title&&<div style={{marginBottom:'10px'}}><b>{title}</b></div>}
            {content}
        </div>}
        <div className='A187-popover-content' 
        onClick={onClick} onFocus={onFocus} onBlur={onBlur}>
            {children}
        </div>
    </div>
  )
}

export default Popover