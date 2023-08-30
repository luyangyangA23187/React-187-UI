import React, { useState } from 'react'
import './style.less'
import {type sizeType} from '../utils/interface'
import { type FC } from 'react'
import { classNames } from '187-UI/utils/classNames'
import { usePropsState } from '187-UI/utils/utils'

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

    //决定是受控组件还是非受控组件
    const [showContent,setInputValue,inputValue] = usePropsState<string>(value,defaultValue!)

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