type sizeType = 'small'|'medium'|'large';
type triggerType = 'click'|'hover'|'focus'
type bubblePositionType = 'top'|'topLeft'|'topRight'|'bottom'|'bottomLeft'|'bottomRight'|'rightTop'
interface ISelectListItem{
    label:string,
    uniqueKey:number|string
    disabled?:boolean,
    active?:boolean,
    children?:ISelectListItem[]
    onClick?:(e:React.MouseEvent<HTMLDivElement,MouseEvent>,key:string|number,label:string)=>void
}
interface ISelectList {
    items:ISelectListItem[]
    selectable?:boolean,
    setActive?:Function,
    onClick?:(e:React.MouseEvent<HTMLDivElement,MouseEvent>,key:string|number,label:string)=>void
    activeKey?:number|string,
}
export {sizeType,triggerType,bubblePositionType,ISelectListItem,ISelectList}