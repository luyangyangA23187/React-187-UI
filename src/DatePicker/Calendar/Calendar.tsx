import React, { useState,type FC, useEffect, MouseEvent } from 'react'
import dayjs from 'dayjs'
import './style.less'
import Button from '187-UI/Button'
import { classNames } from '187-UI/utils/classNames'
import DateCellBox from './DateCellBox'

interface Iprops{
    selectedDate:string,
    onClick:Function,
}


const Calendar:FC<Iprops> = (props) => {

    //提取参数
    const {selectedDate,onClick} = props

    //给定月份的第一天
    const [base,setBase] = useState<dayjs.Dayjs>(dayjs(selectedDate).date(1))
    

    //事件委托
    const handleClick = (e:MouseEvent)=>{
        const element:HTMLDivElement = e.target as HTMLDivElement
        //需要被处理的元素类名
        const need = ['A187-calendar-cell']

        if(need.indexOf(element.classList[0])!==-1){
            const date = element.dataset.date
            //改变基准日期
            if(dayjs(date).date(1).diff(base.date(1))) setBase(dayjs(date).date(1))
            //触发回调
            onClick(e,date)
        }
    }

    //改变月份
    const changeMonth = (month:number)=>setBase(base.add(month,'month'))
    //改变年份
    const changeYear = (year:number)=>setBase(base.add(year,'year'))

  return (
    <div>
        <div className='A187-calendar-change'>
            <div>
                <Button type='text' onClick={()=>changeYear(-1)}>{'<<'}</Button>
                <Button type='text' onClick={()=>changeMonth(-1)}>{'<'}</Button>
            </div>
            <div>{base.format('YYYY-MM')}</div>
            <div>
                <Button type='text' onClick={()=>changeMonth(1)}>{'>'}</Button>
                <Button type='text' onClick={()=>changeYear(1)}>{'>>'}</Button>
            </div>
        </div>
        <div onClick={handleClick}>
            <DateCellBox base={base} selectedDate={selectedDate}></DateCellBox>
        </div>
    </div>
  )
}


export default Calendar