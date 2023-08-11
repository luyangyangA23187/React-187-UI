# 组件

## Button
按钮组件的基础样式和大小

```jsx
import { Button } from '187-UI';

export default () => (
    <div>
        <div>四种样式</div>
        <div>
            <Button type='primary' onClick={()=>alert('click')}>Primary</Button> 
            <Button type='default'>Default</Button> 
            <Button type='text'>Text</Button> 
            <Button type='link'>Link</Button>
        </div>
        <div>禁用</div>
        <div>
            <Button type='primary' onClick={()=>alert('click')} disabled={true}>Primary</Button> 
            <Button type='default' disabled={true}>Default</Button> 
            <Button type='text' disabled={true}>Text</Button> 
            <Button type='link' disabled={true}>Link</Button>
        </div>
        <div>按钮大小</div>
        <div>
            <Button type='primary' size='large'>Large</Button>
            <Button type='primary' size='medium'>Medium</Button>
            <Button type='primary' size='small'>Small</Button>
        </div>
    </div>
    
) 
```
加载中

```jsx
import { Button } from '187-UI';

export default () => (
    <div>
        <Button loading={true}>Loading</Button> 
        <Button type='text' loading={true}>Loading</Button>
    </div>
)
```
改变字体大小
```jsx
import { Button } from '187-UI';

export default () => (
    <div>
        <Button fontSize={'20px'} size='large' type='primary'>Loading</Button> 
        <Button type='text' loading={true} fontSize={'20px'} size='large'>Loading</Button>
    </div>
)
```

按钮大小自适应,父组件需要设置定位才能生效
```jsx
import { Button } from '187-UI';

export default () => (
    <div>
        <div style={{'height':'50px','width':'80px','position':'relative'}}>
            <Button fontSize={'20px'} size='adapt'>按钮</Button>
        </div>
    </div>
)
```

|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|size|按钮的大小,adapt为自适应父元素宽高，需要父元素设置定位|small,medium,large,adapt|medium|
|type|按钮风格|primary,default,text,link|default|
|disabled|禁用按钮|boolean|false|
|loading|加载中,设置为加载中的按钮disabled默认为true|boolean|false|
|fontSize|设置字体的大小|string|18px|
|onClick|点击按钮时的回调|(event: MouseEvent) => void|null|

## Switch

开关组件

```jsx
import { Switch } from '187-UI';

export default () => (
    <div>
        <div>默认开关</div>
        <div>
        <Switch onClick={(checked)=>alert(checked?'true':'false')}></Switch>
        </div>
        <div>显示文字</div>
        <div>
        <Switch onText='开' offText='关'></Switch>
        </div>
        <div>禁用开关</div>
        <div>
        <Switch disabled={true} onClick={(checked)=>alert(checked?'true':'false')}></Switch>
        </div>
    </div>
) 
```

|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|onText|开关状态为开时的文本|string|无|
|offText|开关状态为关时的文本|string|无|
|onClick|点击开关时的回调函数|(checked:boolean,e:Event)=>void|无|
|checked|开关状态|boolean|无|
|disabled|禁用开关|boolean|false|

## Input
输入框
```jsx
import { Input } from '187-UI'
import { Button } from '187-UI'
export default () =>(
    <div>
        <div>输入框大小</div>
        <div>大</div>
        <div>
        <Input size='large'></Input>
        </div>
        <div>中</div>
        <div>
        <Input size='medium'></Input>
        </div>
        <div>小</div>
        <div>
        <Input size='small'></Input>
        </div>
        <div>提示</div>
        <div>
        <Input placeholder='请输入'></Input>
        </div>
    </div>
) 
```

|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|size|输入框的大小|large/medium/small|medium|
|value|输入框的值|string|无|
|defaultValue|输入框初始值|string|无|
|placeholder|输入框提示|string|无|
|width|设置输入框的宽|string|25px|
|onClick|点击输入框的回调|function(e)|无|
|onChange|输入框变化时的回调|function(e)|无|

## Popover
气泡框
```jsx
import { Popover } from '187-UI'
import { Button } from '187-UI'
const content = (<div>
            <div>111111111</div>
            <div>可以可以可以</div>
    </div>)
export default () => (
    <div>
        <div>默认</div>
        <div>
        <Popover content={content}>
            <Button>Popover</Button>
        </Popover>
        </div>
        <div>弹出位置</div>
        <div>
        <Popover content={content} placement='bottom' title='标题'>
            <Button>Popover</Button>
        </Popover>
        </div>
        <div>触发方式</div>
        <div>
        <Popover content={content} placement='bottom' title='标题' trigger='hover'>
            <Button>Hover me</Button>
        </Popover>
        </div>
    </div>
)
```
|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|children|插槽，会作为气泡框的触发元素|ReactNode/ReactNode[]|无|
|content|气泡框中的内容|ReactNode/ReactNode[]|无|
|title|标题|string|无|
|trigger|气泡框触发方式|click/hover/focus|click|
|placement|气泡框出现位置|top/topLeft/topRight/leftTop等12个字符串|top|
|padding|设置padding|string|12px|
|show|气泡框是否展示|boolean|无|

## Dropdown
下拉菜单
```jsx
import {Dropdown} from '187-UI'
const items=[
    {
        label:'1',
        uniqueKey:1,
    },
    {
        label:'22222',
        uniqueKey:2,
    },
    {
        label:'disabled',
        uniqueKey:3,
        disabled:true,
    }
]

export default () => (
    <div>
        <div>默认</div>
        <div>
        <Dropdown items={items} onClick={(e,key,label)=>{console.log(key,label)}}>
            Dropdown
        </Dropdown>
        </div>
        <div>可选择</div>
        <div>
        <Dropdown items={items} selectable={true}>
            Dropdown
        </Dropdown>
        </div>
    </div>
)
```
多级菜单
```jsx
import {Dropdown} from '187-UI'
const items=[
    {
        label:'1',
        uniqueKey:1,
    },
    {
        label:'22222',
        uniqueKey:2,
        children:[
            {
                label:'1111',
                uniqueKey:21
            },
            {
                label:'1111',
                uniqueKey:22
            },
            {
                label:'1111',
                uniqueKey:23,
                children:[
                     {
                        label:'1111',
                        uniqueKey:231
                    },
                    {
                        label:'1111',
                        uniqueKey:232
                    }
                ]
            },
        ]
    },
    {
        label:'disabled',
        uniqueKey:3,
        disabled:true,
    }
]


export default () => (
    <div>
        <div>默认</div>
        <div>
        <Dropdown items={items} onClick={(e,key,label)=>{console.log(key,label)}}>
            Dropdown
        </Dropdown>
        </div>
    </div>
)
```
Dropdown属性
|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|children|插槽,会作为下拉菜单的出发啊元素|ReactNode|无|
|items|下拉菜单渲染元素|对象数组,对象类型见Item属性|无|
|onClick|点击下拉菜单选项时触发的事件|(e:Event,key:strig/number,label:string)|无|
|trigger|下拉菜单触发方式|click/hover/focus|click|
|selectable|设置为真后被选择的选项会高亮|boolean|false|

Dropdown item属性
|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|label(必填)|下拉菜单选项|string|无|
|uniqueKey(必填)|用于渲染,确保在items中独一无二|string/number|无|
|onClick|点击下拉菜单选项时触发的事件|(e:Event,key:strig/number,label:string),会使Dropdown中的onClick失效|无|
|children|多级菜单|items|无|

## DatePicker
时间选择器
```jsx
import Calendar from '187-UI/DatePicker/Calendar/Calendar';
import {DatePicker} from '187-UI';
export default () => (
    <div>
        <div>日期选择</div>
        <div>
            <DatePicker></DatePicker>
        </div>
    </div>
    )
```
|属性|说明|类型|默认值|
|:---|:--------------|:----------|:---|
|size|输入框的大小|small/medium/large|medium|
|width|输入框宽度|string|150px|
|placement|日历出现位置|top/topLeft/topRight/leftTop等12个字符串|topLeft|
|onClick|点击日期的回调函数|(e:Event,date:sting)=>void|无|
