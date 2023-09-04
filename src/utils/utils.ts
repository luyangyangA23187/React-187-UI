import { useEffect,useState } from "react"

//用于决定组件状态是受控还是非受控
function usePropsState<T>(propsValue:T|undefined,defaultValue:T){
    const [value,setValue] = useState<T>(defaultValue)
    const res:T = propsValue?propsValue:value
    return [res,setValue,value] as const
}

//用于生成动效
function moveAnimation(dom:HTMLElement|null,duration:number,preLeft?:number,preTop?:number){
    if(!dom) return []
    const rect =  dom.getBoundingClientRect()
    preLeft = preLeft?preLeft:rect.left
    preTop = preTop?preTop:rect.top
    const nextLeft = rect.left
    const nextTop = rect.top
    dom.animate([
        { transform : `translate(${preLeft-nextLeft}px,${preTop-nextTop}px)`},
        { transform:'none'}
    ],{
        duration:duration
    })
    return [preLeft-nextLeft,preTop-nextTop]
}

//把一个节点挂载到body上并且不改变位置
function popOvertoBody(dom:HTMLElement){
    const rect = dom.getBoundingClientRect()
    const left = scrollX + rect.left
    const top = scrollY + rect.top
    const root = document.querySelector('#root')!
    root.appendChild(dom)
    dom.style.left = left + 'px'
    dom.style.top = top + 'px'
    dom.style.transform = 'translate(0,0)'
    
}


export {moveAnimation,usePropsState,popOvertoBody}