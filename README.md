# 187-UI

用dumi框架，参考ant-design写的react组件库。
已实现组件
+ 按钮(Button)
+ 开关(Switch)
+ 输入框(Input)
+ 气泡框(Popover)
+ 时间选择框(DataPicker)

## 按钮
|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|size|按钮的大小,adapt为自适应父元素宽高，需要父元素设置定位|small,medium,large,adapt|medium|
|type|按钮风格|primary,default,text,link|default|
|disabled|禁用按钮|boolean|false|
|loading|加载中,设置为加载中的按钮disabled默认为true|boolean|false|
|fontSize|设置字体的大小|string|18px|
|onClick|点击按钮时的回调|(event: MouseEvent) => void|null|

## 开关
|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|onText|开关状态为开时的文本|string|无|
|offText|开关状态为关时的文本|string|无|
|onClick|点击开关时的回调函数|(checked:boolean,e:Event)=>void|无|
|checked|开关状态|boolean|无|
|disabled|禁用开关|boolean|false|

## 输入框
|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|size|输入框的大小|large/medium/small|medium|
|value|输入框的值|string|无|
|defaultValue|输入框初始值|string|无|
|placeholder|输入框提示|string|无|
|width|设置输入框的宽|string|25px|
|onClick|点击输入框的回调|function(e)|无|
|onChange|输入框变化时的回调|function(e)|无|

## 气泡框
|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|children|插槽，会作为气泡框的触发元素|ReactNode/ReactNode[]|无|
|content|气泡框中的内容|ReactNode/ReactNode[]|无|
|title|标题|string|无|
|trigger|气泡框触发方式|click/hover/focus|click|
|placement|气泡框出现位置|top/topLeft/topRight/leftTop等12个字符串|top|
|padding|设置padding|string|12px|
|show|气泡框是否展示|boolean|无|

## 时间选择框
|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|size|输入框的大小|large/medium/small|medium|
|value|输入框的值|string|无|
|defaultValue|输入框初始值|string|无|
|placeholder|输入框提示|string|无|
|width|设置输入框的宽|string|25px|
|onClick|点击输入框的回调|function(e)|无|
|onChange|输入框变化时的回调|function(e)|无|
