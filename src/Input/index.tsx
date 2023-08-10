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
    children?:React.ReactDOM[]|React.ReactDOM,
    onClick?:Function,
    width?:string
}

const Input:FC<Iporps> = (props) => {

    let {size,value,type,placeholder,onClick,width} = props
    size = size?size:'medium'
    type = type?type:'text'
    value = value?value:''
    onClick = onClick?onClick:function(e:any){}
    width = width?width:'225px'

    let classNamestr = ['A187-input','input-medium-size','text']
    classNamestr[1] = `input-${size}-size`
    classNamestr[2] = type

    const [inputValue,setInputValue] = useState<string>('')

    if(value && value!==inputValue) setInputValue(value)

  return (
        <input className={classNamestr.join(' ')} type={type} onClick={(e)=>onClick!(e)}
        value={inputValue} placeholder={placeholder} style={{'width':width}} onChange={(e)=>{
            setInputValue(e.target.value)
        }}/>
  )
}

export default Input