import React, { useState } from 'react'
import './style.less'
import {type sizeType} from '../utils/config'
import { type FC } from 'react'
import { classNames } from '187-UI/utils/classNames'

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

    const {size,value,defaultValue,type,placeholder,onClick,onChange,width} = props

    const [inputValue,setInputValue] = useState<string>(defaultValue!)

    const showContent = value===undefined?inputValue:value

    const classNamestr = classNames('Input',{
        size:size
    })

    const inputStyle = {
        width:width
    }

  return (
        <input className={classNamestr} type={type} onClick={(e)=>onClick!(e)}
        value={showContent} placeholder={placeholder} style={inputStyle} onChange={(e)=>{
            if(value===undefined) setInputValue(e.target.value)
            if(onChange) onChange(e)
        }}/>
  )
}

Input.defaultProps = {
    size:'medium',
    type:'text',
    value:undefined,
    onClick:function(e:any){},
    defaultValue:'',
    width:'225px',
}

export default Input