import React,{type FC,ReactNode} from 'react'
import { type buttonPrefix } from '187-UI/utils/interface'
import './style.less'
import { classNames } from '187-UI/utils/classNames';

interface Iporps extends buttonPrefix{
    children:ReactNode[]|ReactNode;
    fontSize?:string;
    onClick?:Function;
}


const Button:FC<Iporps> = (props) => {

    const {size,fontSize,type,disabled,loading,onClick} = props

    const classNameStr = classNames('Button',{
        size:size,
        type:type,
        disabled:disabled,
        loading:loading,
    })

    let spanStyle = {
        'fontSize':fontSize,
        'opacity':loading?0:1
    }
    
  return (
    <div className={classNameStr} onClick={(e)=>{
        //禁用则不触发点击事件
        if(!disabled && !loading&& onClick) onClick(e)
    }} >
        {loading&&<div className='loadingAnimation' style={{'width':fontSize,'height':fontSize}}></div>}
        <span style={spanStyle}>{props.children}</span>
    </div>
  )
}


Button.defaultProps = {
    size:'medium',
    fontSize:'16px',
    type:'default',
    disabled:false,
    loading:false,
    onClick:function(e:any){},
}


export default Button