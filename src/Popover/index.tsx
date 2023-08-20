import React,{type FC,ReactNode, useState, MouseEvent, useEffect} from 'react'
import type { bubblePositionType, triggerType } from '187-UI/utils/interface';
import './style.less'
import { popoverBubblePrefix } from '187-UI/utils/interface';
import { classNames } from '187-UI/utils/classNames';

interface Iporps extends popoverBubblePrefix{
    children:ReactNode|ReactNode[],
    content:React.JSX.Element|ReactNode,
    title?:string,
    trigger?:triggerType,
    padding?:string,
    display?:string,
}

const Popover:FC<Iporps> = (props) => {

    let {children,content,title,trigger,placement,padding,display,show} = props
    //展示气泡框
    const [isShow,setisShow] = useState<boolean>(false)
    //给移入触发用的计时器,避免气泡消失太快
    const [leaveTimer,setLeaveTimer] = useState<any>()
    
    const showBubble = show === undefined?isShow:show

    //默认参数
    const bubbleClassName = classNames('PopoverBubble',{
        show:showBubble,
        placement:placement
    })
    const bubbleStyle = {'padding':padding}
    const boxStyle = {'display':display}

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
        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={boxStyle}>
        <div className={bubbleClassName} style={bubbleStyle}>
            {title&&<div style={{marginBottom:'10px'}}><b>{title}</b></div>}
            {content}
        </div>
        <div className='A187-popover-content'
        onClick={onClick} onFocus={onFocus} onBlur={onBlur}>
            {children}
        </div>
    </div>
  )
}

Popover.defaultProps = {
    trigger:'click',
    placement:'top',
    padding:'12px',
    display:'inline-block',
    show:undefined,
}

export default Popover