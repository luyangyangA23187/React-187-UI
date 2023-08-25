import Popover from '187-UI/Popover'
import { ISelectList, ISelectListItem, triggerType } from '187-UI/utils/interface'
import React,{type FC,ReactNode,useState} from 'react'
import SelectList from './SelectList'
import './style.less'

interface Iporps extends ISelectList{
    children:ReactNode|ReactNode[]
    trigger?:triggerType
}

const Dropdown:FC<Iporps> = (props) => {

    let {children,items,onClick,trigger,selectable} = props
    //标记活跃的key
    const [activeKey,setActiveKey] = useState<number|string|undefined>('')
    //触发方式
    trigger = trigger?trigger:'hover'

    const content = (<SelectList items={items} onClick={onClick}
        selectable={selectable} setActive={setActiveKey} activeKey={activeKey}></SelectList>)

  return (
    <Popover content={content} placement='bottomLeft' trigger={trigger} padding='5px'>
        <div className='A187-dropdown'>{children}</div>
    </Popover>
  )
}

export default Dropdown