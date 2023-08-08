import React, { useState } from 'react'
import './style.less'
import {type sizeType} from '../utils/config'
import { type FC } from 'react'

type inputType='text'|'password'

interface Iporps{
    size?:sizeType,
    value?:string,
    type?:inputType,
    placeholder?:string,
    children?:React.ReactDOM[]|React.ReactDOM
}

const Input:FC<Iporps> = (props) => {

    let {size,value,type,placeholder} = props
    size = size?size:'medium'
    type = type?type:'text'
    value = value?value:''

    let classNamestr = ['A187-input','input-medium-size','text']
    classNamestr[1] = `input-${size}-size`
    classNamestr[2] = type

    const [inputValue,setInputValue] = useState<string>('')

    if(value && value!==inputValue) setInputValue(value)

  return (
    <div>
        <input className={classNamestr.join(' ')} type={type} 
        value={inputValue} placeholder={placeholder} onChange={(e)=>{
            setInputValue(e.target.value)
        }}/>
    </div>
        
  )
}

export default Input