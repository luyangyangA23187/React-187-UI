//用于管理类名的函数
function changeClassName(className:string,index:number,name:string){
    let classNameArr:string[] = className.split(' ')
    classNameArr[index]=name
    return classNameArr.join(' ')
}

export {changeClassName}