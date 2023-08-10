import Input from '187-UI/Input'
import Popover from '187-UI/Popover'
import React,{useState,useEffect,type FC} from 'react'
import Calendar from './Calendar/Calendar'
import dayjs from 'dayjs'
import { bubblePositionType, sizeType } from '187-UI/utils/config'

interface Iprops{
    onClick?:Function,
    placement?:bubblePositionType,
    size?:sizeType
}

const DatePicker:FC<Iprops> = (props) => {

    let {onClick,placement,size} = props
    placement = placement?placement:'bottomLeft'
    size = size?size:'medium'

    useEffect(()=>{
        document.addEventListener('click',()=>{setShow(false)})
    },[])

    const [show,setShow] = useState<boolean>(false)

    const handleClick = (e:any,date:string)=>{
        //改变当前日期
        setCurDate(dayjs(date))
        //展示日历
        setShow(false)
        //回调时间
        if(onClick) onClick()
    }

    //选定日期
    const [curDate,setCurDate] = useState<dayjs.Dayjs>(dayjs())
    //气泡框内容
    const content = (<Calendar onClick={handleClick} selectedDate={curDate.format('YYYY-MM-DD')}></Calendar>)

  return (
    <Popover content={content} placement={placement} show={show}>
        <Input value={curDate.format('YYYY-MM-DD')} size={size}
        onClick={()=>setShow(true)} width='150px'></Input>
    </Popover>
  )
}

export default DatePicker