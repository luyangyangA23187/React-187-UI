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

```jsx
import {Dropdown} from '187-UI'
const items=[]
const secondItems = []
for(let i=0;i<10;i++){
    items.push({label:'11111',key:i})
    secondItems.push({label:'11111',key:i})
}
items[0]['children'] = secondItems

export default () => (
    <div>
        <div>下拉菜单长度</div>
        <div>
        <Dropdown items={items} height='200px' onClick={(e,key,label)=>{console.log(key,label)}}>
            Dropdown
        </Dropdown>
        </div>
    </div>
)

```
## DatePicker
时间选择器
```jsx
import Calendar from '187-UI/DatePicker/Calendar/Calendar';
import {DatePicker} from '187-UI';
export default () => (
    <div>
        <div>日历</div>
        <div>
            <Calendar></Calendar>
        </div>
        <div>日期选择</div>
        <div>
            <DatePicker></DatePicker>
        </div>
    </div>
    )
```