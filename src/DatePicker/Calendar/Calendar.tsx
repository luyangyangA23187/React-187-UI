import React, { useState,type FC } from 'react'
import dayjs from 'dayjs'
import './style.less'
import Button from '187-UI/Button'
import { classNames } from '187-UI/utils/classNames'

interface Iprops{
    selectedDate:string,
    onClick:Function,
}

const Calendar:FC<Iprops> = (props) => {

    let {selectedDate,onClick} = props

    //给定月份的第一天
    const [base,setBase] = useState<dayjs.Dayjs>(dayjs(selectedDate).date(1))
    //改变基准日期
    if(dayjs(selectedDate).date(1).diff(base.date(1))) setBase(dayjs(selectedDate).date(1))
    //日期
    const box = getClendarBox(base)

    //改变月份
    const changeMonth = (month:number)=>setBase(base.add(month,'month'))
    //改变年份
    const changeYear = (year:number)=>setBase(base.add(year,'year'))
    //表格内容
    const cell = (date:string)=>{
        const curMonth = base.month()+1

        //得到目标日期
        const [year,month,day] = date.split('-').map(e=>parseInt(e))

        const className = classNames('CalendarCell',{
            inThisMonth:month==curMonth,
            active:date==selectedDate,
        })

        return (
            <td key={date}>
                <div className={className} onClick={(e)=>onClick(e,date)}>
                    {day}
                </div> 
            </td>
        )
    }

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
        <table className='A187-calendar-table'>
        <thead>
        <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
        </tr>
        </thead> 
        <tbody>
        {box.map(line=>(
            <tr key={line[0]}>
                {line.map(date=>cell(date))}
            </tr>
        ))}
        </tbody>
    </table>
    </div>
  )
}

function getClendarBox(base:dayjs.Dayjs){
    //给定月份总共有多少天
    const daysInmonth = base.daysInMonth()
    //盒子
    let box = Array.from(Array(6),()=>Array(7).fill(0))
    //以基准日期做计算
    const offset= base.day()%7
    
    let day = base.add(-offset,'day')
    for(let i=0;i<6;i++){
        for(let j=0;j<7;j++){
            box[i][j] = day.format('YYYY-MM-DD')
            day = day.add(1,'day')
        }
    }

    return box
}

export default Calendar