## 组件化
### 什么是组件化

![组件化](https://user-gold-cdn.xitu.io/2019/11/11/16e57ea95b793253?w=110&h=176&f=png&s=11303)
一个大的项目分成一小块一小块的。一块一块的实现。
### vue的组件化

![vue组件化](https://user-gold-cdn.xitu.io/2019/11/11/16e57ecbc862ade6?w=379&h=138&f=png&s=14255)
! 尽可能的用组件化的思想开发

### 如何使用组件化

![](https://user-gold-cdn.xitu.io/2019/11/11/16e57f2c5e5d030c?w=160&h=248&f=png&s=30569)
1. 创建组件构造器 ：调用`Vue.extend()`方法创建构造器

![](https://user-gold-cdn.xitu.io/2019/11/11/16e5aa1c5ca02467?w=305&h=160&f=png&s=8549)
2. 注册组件： 调用Vue.component()方法
3. 
![](https://user-gold-cdn.xitu.io/2019/11/11/16e5aa45ffea9812?w=287&h=133&f=png&s=7143)
3. 使用组件
直接在html中写就行了

![](https://user-gold-cdn.xitu.io/2019/11/11/16e5aa4d7686ff2a?w=229&h=77&f=png&s=3921)

### es6补充
引号可以换成`,这样定义的变量可以换行。
```
const a= `aa
bb`
``` 

### 全剧组件 和 局部组件
以上就是全局组件的注册
以下是局部组件的注册👇
![](https://user-gold-cdn.xitu.io/2019/11/11/16e5ab16a289055f?w=254&h=149&f=png&s=5777)
这个组件就只能在vue实例中显示。也就是在
![](https://user-gold-cdn.xitu.io/2019/11/11/16e5abd4cbe41c1d?w=335&h=141&f=png&s=12619)
### 父组件和子组件的区分
vue实例也可以当做组件，一般叫做root组件。
- 子组件在父组件注册的时候，不能在全局使用。只能在父组件中使用，想要使用必须注册。
 
### 语法糖

![](https://user-gold-cdn.xitu.io/2019/11/12/16e5d161cb49cf7b?w=348&h=195&f=png&s=49790)

![](https://user-gold-cdn.xitu.io/2019/11/12/16e5d170677cfcdd?w=434&h=225&f=png&s=45704)
### 组件模板抽离
1. 第一种写法，在上边写个script标签，类型是x-tempate，然后注册的时候关联他的id。
![](https://user-gold-cdn.xitu.io/2019/11/13/16e623b2fc8913d0?w=470&h=340&f=png&s=23931)
2. 第二种写法：直接写tempalate标签，然后关联id就行了
![](https://user-gold-cdn.xitu.io/2019/11/13/16e623fed607004c?w=441&h=301&f=png&s=21952)
### 组件访问vue实例中的数据
- 组件不能访问组件中的数据
- 要在组件注册的时候，放在data函数中，这是一个函数，和vue实例中的不同，
![](https://user-gold-cdn.xitu.io/2019/11/13/16e624b436a29d2d?w=413&h=438&f=png&s=37917)
#### 组件中data为什么必须是个函数？
因为函数的每次调用都会在内存中新增一个，这样这个组件每次调用的时候都是一个新的相互独立的，
例如一个计数器，你在主页调用的时候是计数到2了，如果data不是函数的话，子页面也都是2，就起不到单独计数的功能了。

### 父子组件之间的通讯

![](https://user-gold-cdn.xitu.io/2019/11/14/16e67539a5acd891?w=383&h=148&f=png&s=23692)
#### 父组件向子组件传递 props
在注册组件的时候写一个props，然后在调用的时候写v-bind绑定一下，之后就可以取到数据了。

![](https://user-gold-cdn.xitu.io/2019/11/14/16e67659211d73b4?w=545&h=587&f=png&s=52018)
props的另一种写法：

![](https://user-gold-cdn.xitu.io/2019/11/14/16e676930e3f1bc4?w=381&h=212&f=png&s=11231)
如果类型是对象或者是数组的时候，默认值必须是函数。
![](https://user-gold-cdn.xitu.io/2019/11/14/16e6770450bc1c1c?w=459&h=323&f=png&s=21208)
### props 驼峰命名的坑
驼峰命名要改成-
![](https://user-gold-cdn.xitu.io/2019/11/14/16e6a13a1798814b?w=383&h=363&f=png&s=26901)
### 子组件传给父组件
常用的方法是，子组件传递一个事件给父组件，这时候就需要一个自定义事件来完成，

之前学的v-on只学了监听dom事件，其实他还可以监听自定义事件，

#### 自定义事件的流程，
- 子组件中，通过`$emit()`来触发事件，
- 父组件中，通过v-on来监听子组件事件。

![](https://user-gold-cdn.xitu.io/2019/11/14/16e6a8865d5c7d07?w=729&h=642&f=png&s=58650)

### 知识回顾
![](https://user-gold-cdn.xitu.io/2019/11/15/16e6f64616eb3b9a?w=1859&h=2369&f=png&s=452795)
### 父子组件数据绑定（v-model）
错误示范：当我们绑定到父组件的props时，虽然可以达到双向绑定的效果，但是会报错，因为父组件的内容应该是由后台数据决定的，现在绑定了子组件，很容易就错乱了。
正确：在父组件的components中写个data函数，返回一下this.props中的值
![](https://user-gold-cdn.xitu.io/2019/11/15/16e6f92fb6fa3dd5?w=558&h=542&f=png&s=44173)
显示如下：
![](https://user-gold-cdn.xitu.io/2019/11/15/16e6f93867f01106?w=285&h=198&f=png&s=7965)

此时只是dmessage改了，但是父组件中的data中的message没有改变，想要改变父组件中data中的message的值👇

![](https://user-gold-cdn.xitu.io/2019/11/16/16e72070c4d2b790?w=792&h=635&f=png&s=79312)