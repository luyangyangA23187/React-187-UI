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


export {moveAnimation,usePropsState}