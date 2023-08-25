import { classNames } from '187-UI/utils/classNames'
import dayjs from 'dayjs'
import React,{type FC} from 'react'

interface Iporps{
    base:dayjs.Dayjs
    selectedDate:string,
}

const DateCellBox:FC<Iporps> = (props) => {

    const {base,selectedDate} = props

    const box = getClendarBox(base)

    //表格内容
    const cell = (date:string)=>{
        const curMonth = base.month()+1

        //得到目标日期
        const [year,month,day] = date.split('-').map(e=>parseInt(e))

        //表格日期类名
        const className = classNames('CalendarCell',{
            inThisMonth:month==curMonth,
            active:date==selectedDate,
        })

        return (
            <td key={date}>
                <div className={className} data-date={date}>
                    {day}
                </div> 
            </td>
        )
    }

  return (
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
  )
}

function getClendarBox(base:dayjs.Dayjs){
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

export default DateCellBox