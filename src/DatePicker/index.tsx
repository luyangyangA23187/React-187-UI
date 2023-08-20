import Input from '187-UI/Input'
import Popover from '187-UI/Popover'
import React,{useState,useEffect,type FC} from 'react'
import Calendar from './Calendar/Calendar'
import dayjs from 'dayjs'
import { bubblePositionType, sizeType } from '187-UI/utils/interface'

interface Iprops{
    onClick?:Function,
    placement?:bubblePositionType,
    size?:sizeType
    width?:string
}

const DatePicker:FC<Iprops> = (props) => {

    let {onClick,placement,size,width} = props

    useEffect(()=>{
        //绑定监听事件
        document.addEventListener('click',()=>{setShow(false)})
    },[])

    //控制气泡框的开关
    const [show,setShow] = useState<boolean>(false)

    //点击日历中日期的回调事件
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
        onClick={()=>setShow(true)} width={width}></Input>
    </Popover>
  )
}

DatePicker.defaultProps = {
    placement:'bottomLeft',
    size:'medium',
    width:'150px',
}



export default DatePicker