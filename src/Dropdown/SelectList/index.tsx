import { ISelectList, ISelectListItem } from '187-UI/utils/interface'
import React ,{type FC,useState} from 'react'
import './style.less'
import Popover from '187-UI/Popover'
import { classNames } from '187-UI/utils/classNames'


const SelectList:FC<ISelectList> = (props) => {

    const {items,onClick,selectable,activeKey,setActive} = props

    const content = items.map(item=>{
        const res =  <Item label={item.label} key={item.uniqueKey} uniqueKey={item.uniqueKey} 
        disabled={item.disabled} active={activeKey===item.uniqueKey}
            onClick={(e)=>{
                //如果不可点击直接返回
                if(item.disabled) return
                //如果菜单可选择则设置active
                if(selectable&&setActive) setActive(item.uniqueKey)
                //如果有自己的触发事件则优先触发自己的
                if(item.onClick) item.onClick(e,item.uniqueKey,item.label)
                else if(onClick) onClick(e,item.uniqueKey,item.label)
            }}></Item>
        if(item.children){
            //多级菜单
            let nextContent = <SelectList items={item.children} onClick={onClick}></SelectList>
            return <Popover placement="rightTop" content={nextContent}
            trigger='hover' padding='5px' display='block'>
                {res}
            </Popover>
        }
        return res
        })

  return (
    <div className='A187-selectList'>
        {content}
    </div>
  )
}



const Item:FC<ISelectListItem> = (props)=>{

    const {label,disabled,uniqueKey,onClick,active} = props

    const classNameStr = classNames('DropDownItem',{
        disabled:disabled,
        active:active
    })

    return (
        <div className={classNameStr} key={uniqueKey} onClick={(e)=>{
            if(disabled) return
            if(onClick) onClick(e,uniqueKey,label)
        }}>
            {label}
        </div>
    )
}

Item.defaultProps = {
    disabled:false
}

export default SelectList