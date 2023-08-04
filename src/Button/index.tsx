import React,{type FC,ReactNode} from 'react'
import './index.less'

interface Iporps{
    children:ReactNode[]|ReactNode
}



const Button:FC<Iporps> = (props) => {
  return (
    <div className='button'>
        {props.children}
    </div>
  )
}

export default Button