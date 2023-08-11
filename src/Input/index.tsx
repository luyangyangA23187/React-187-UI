import React, { useState } from 'react'
import './style.less'
import {type sizeType} from '../utils/config'
import { type FC } from 'react'

type inputType='text'|'password'

interface Iporps{
    size?:sizeType,
    value?:string,
    defaultValue?:string
    type?:inputType,
    placeholder?:string,
    onClick?:Function,
    width?:string
    onChange?:Function,
}

const Input:FC<Iporps> = (props) => {

    let {size,value,defaultValue,type,placeholder,onClick,onChange,width} = props
    size = size?size:'medium'
    type = type?type:'text'
    value = value?value:undefined
    onClick = onClick?onClick:function(e:any){}
    defaultValue = defaultValue?defaultValue:''

    width = width?width:'225px'

    let classNamestr = ['A187-input','input-medium-size','text']
    classNamestr[1] = `input-${size}-size`
    classNamestr[2] = type

    const [inputValue,setInputValue] = useState<string>(value===undefined?defaultValue:value)

    if(value!==undefined&&inputValue!==value) setInputValue(value)

  return (
        <input className={classNamestr.join(' ')} type={type} onClick={(e)=>onClick!(e)}
        value={inputValue} placeholder={placeholder} style={{'width':width}} onChange={(e)=>{
            if(value===undefined) setInputValue(e.target.value)
            if(onChange) onChange(e)
        }}/>
  )
}

export default Input