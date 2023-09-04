import React,{type FC,ReactNode, useState, MouseEvent, useEffect, useRef} from 'react'
import type { bubblePositionType, triggerType } from '187-UI/utils/interface';
import './style.less'
import { popoverBubblePrefix } from '187-UI/utils/interface';
import { classNames } from '187-UI/utils/classNames';
import { popOvertoBody, usePropsState } from '187-UI/utils/utils';

interface Iporps extends popoverBubblePrefix{
    children:ReactNode|ReactNode[],
    content:React.JSX.Element|ReactNode,
    title?:string,
    trigger?:triggerType,
    padding?:string,
    display?:string,
}

const Popover:FC<Iporps> = (props) => {

    const {children,content,title,trigger,placement,padding,display,show} = props

    //展示气泡框
    const [showBubble,setisShow,isShow] = usePropsState<boolean>(show,false)
    //拿到气泡框DOM节点便于做动画效果
    let bubbleDiv = useRef<HTMLDivElement|null>(null)
    let wrapDiv = useRef<HTMLDivElement|null>(null)

    //默认参数
    const bubbleClassName = classNames('PopoverBubble',{
        show:showBubble,
        placement:placement
    })
    const bubbleStyle = {'padding':padding}
    const boxStyle = {'display':display}

    //仅在第一次创建组件触发
    useEffect(()=>{
        //点击气泡外则隐藏气泡
        const clickHideEvent = ()=>{
            if(trigger!=='click') return
            setisShow(false)
        }
        document.addEventListener('click',clickHideEvent)
        return ()=>{
            document.removeEventListener('click',clickHideEvent)
        }

        
    },[])
    //每次更新都会触发
    useEffect(()=>{
        if(!bubbleDiv.current) return
        if(showBubble){
            const element = bubbleDiv.current
            //先挂到popover上找位置
            element.style.removeProperty('left')
            element.style.removeProperty('top')
            element.style.removeProperty('transform')
            element.style.height = 'fit-content'
            element.offsetHeight
            wrapDiv.current!.appendChild(element)
            //挂载到body上
            popOvertoBody(element)
            //做动画
            const { height } = element.getBoundingClientRect()
            element.style.height = '0'
            element.offsetHeight
            element.style.height = height + 'px'
        }
        else{
            //重新挂载到节点上
            const element = bubbleDiv.current
            element.style.height = '0px'
        }
    })

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
        setisShow(true)
    }
    const onMouseLeave = ()=>{
        if(trigger!=='hover') return
        setisShow(false)
    }

  return (
    <div className='A187-popover' onClick={(e)=>{e.nativeEvent.stopImmediatePropagation()}}
        onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={boxStyle} ref={wrapDiv}>
        <div className={bubbleClassName} ref={bubbleDiv} >
            <div style={bubbleStyle}>
                {title&&<div style={{marginBottom:'10px'}}><b>{title}</b></div>}
                {content}
            </div> 
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