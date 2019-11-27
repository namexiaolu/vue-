## option
- el
    - 类型string | HTMLElement
    - 作用：决定之后Vue实例会管理哪个DOM
- data
    - 类型：Object | Function（组件中的dat啊必须是一个函数)
    - 作用：Vue实力对应的数据对像。
- methods
    - 类型：{[key:string]:function}
    - 作用： 定义属于Vue的一些方法，可以在其他地方调用，也可以在指令中使用。
# vue生命周期
# vue的template
    代码规范 大型前端项目要缩进2个空格，神奇。
    
# 插值语法
## Mustache语法 `{{}}`
    - 可以写变量，也可写简单表达式
## v-once指令（后边不用接表达式）
    - 只是执行一次。第一次展示，后来再改变的时候，不会再改变。
## v-html指令
![](https://user-gold-cdn.xitu.io/2019/10/26/16e07cdd222d63e2?w=998&h=367&f=png&s=43324)
## v-text
    - 和Mustache语法一样。
    - 一般不用，不够灵活。会覆盖之前的内容。
## v-pre指令
    让vue不解析，原封不动的展示，显示如下：
![](https://user-gold-cdn.xitu.io/2019/10/26/16e07d30eb60b370?w=143&h=70&f=png&s=1985)
## v-cloak （斗篷）
    当js运行完之后，再展示到界面中。防止页面闪过{{}}，给用户体验不好。
# 动态绑定属性
## v-bind指令

![](https://user-gold-cdn.xitu.io/2019/10/26/16e07e4d2606fb13?w=758&h=226&f=png&s=34481)
当你给一个属性加上v-bind指令之后，他就会把他的值解析。
    - 语法糖：直接写个`:`例如：
![](https://user-gold-cdn.xitu.io/2019/10/26/16e07e89b3198639?w=526&h=32&f=png&s=4821)

### v-bind 动态绑定class
两种方式：
1. 对象语法：
![](https://user-gold-cdn.xitu.io/2019/11/2/16e2a1b87352ef4a?w=682&h=498&f=png&s=39819)
    也可以这样写👇
![](https://user-gold-cdn.xitu.io/2019/11/2/16e2a21e889bd5ca?w=622&h=452&f=png&s=42404)
2. 数组语法：（用的少）
![](https://user-gold-cdn.xitu.io/2019/11/2/16e2a2abbc0ca6c6?w=605&h=496&f=png&s=51023)
### v-for 和v-bind的结合

### v-bind 动态绑定style
1. 对象语法：
![](https://user-gold-cdn.xitu.io/2019/11/2/16e2ad396bc07dbf?w=491&h=314&f=png&s=23863)
2. 数组语法：
![](https://user-gold-cdn.xitu.io/2019/11/2/16e2ad9eda756155?w=491&h=216&f=png&s=23100)
## 计算属性 computed
- 对数据进行某种变化再进行显示。
- 计算属性的一些功能用methods可以实现为什么要用计算属性？
- 1. 计算属性调用的时候不用加括号。
- 2. 计算属性有缓存，用起来比methods节省空间。
```
  <h2>{{ab}}</h2>
  
  data:{
    a:'aaaa',
    b:'bbbb'
},
 computed: {
    ab : function(){
    return this.a+this.b
}
```
例子：
```
<body>
    <div id="app">
        <h2>   {{totalPrice}} </h2>
    </div>
    
    <script>
        const app = new Vue({
            el:'#app',
            data:{
                books:[
                    {id:1,name:'html+css',price:100},
                    {id:1,name:'javascript',price:110},
                    {id:1,name:'vue',price:120},
                    {id:1,name:'reacte',price:100}
                ]
            },
            computed: {
               totalPrice : function(){
                   let result = 0
                   for(let i = 0; i < this.books.length;i++){
                       result += this.books[i].price 
                   }
                   return result
               }
            }
        })
    </script>
</body>
```

es6语法补充
```
   computed: {
               totalPrice : function(){
                   let result = 0
                //    for(let i = 0; i < this.books.length;i++){
                //        result += this.books[i].price 
                //    }
                //    return result
                    // es6语法
            //     for(let i in this.books){
            //         result += this.books[i].price
            //     }
            //     return result
             for(let book of this.books){
                result += book.price
                }
                return result
             }
           
            }
        })
```
1. let vs const
    let 是变量需要改变的时候用，const是变量不需要改变的。 
2. let vs var 
    let块级作用域 var全局作用域
3. const
    - 尽量多用const，这个不能被改变。
    - 定义标识符的时候必须赋值
    - 常量的含义指的是对象不能修改，但是对象内部的属性可以改
4. 对象字面量的增强写法
    - 属性的增强写法：
    es5写法：
![](https://user-gold-cdn.xitu.io/2019/11/6/16e3e32efa647850?w=240&h=207&f=png&s=10785)
    es6写法：
![](https://user-gold-cdn.xitu.io/2019/11/6/16e3e343f8e51a0b?w=274&h=208&f=png&s=10550)
红框部分就会直接把value补全，很方便。
    - 函数的增强写法，简洁很多
![](https://user-gold-cdn.xitu.io/2019/11/6/16e3e389a6cea9dc?w=386&h=249&f=png&s=12727)

### 补充知识--闭包
在要写的东西外边套一层括号，后面的括号中写上参数。
![](https://user-gold-cdn.xitu.io/2019/11/4/16e33f42b7808047?w=460&h=180&f=png&s=14844)

### 第一天回顾
![](https://user-gold-cdn.xitu.io/2019/11/2/16e2b5707036cffd?w=1531&h=2349&f=png&s=254599)
### 完整的计算属性
```
   computed:{
               Name:{
                   set:function(newValue){
                },
                   get:function(){
                }
               } 
            }
```
一般计算属性没有set方法，是只读属性。
set写上的也不多，一般都是直接写`return`。
### 计算属性的缓存
因为计算属性用的时候只会调用一次，而methods用几次就会调用几次，性能低。vue内部缓存机制给计算属性，很强。
### 事件监听 v-on  @
1. 基本语法 `<button @click="increment">+</buton>`
2. 参数传递 
    - 函数如果没有参数，调用的时候可以不写小括号，
    - 函数有参数，但是调用的时候没有写小括号，则会默认加上 浏览器自己生成的event事件对象作为参数传递。
    - 同时需要两个参数（一个自定义，一个event），如果需要调用event对象，需要写`$event`
![](https://user-gold-cdn.xitu.io/2019/11/7/16e460aa2d978e2c?w=539&h=196&f=png&s=26546)
3. v-on修饰符
    - `.stop` 
    ```
    divC(){
                    console.log('divC');
                    
                }
    ```
    ```
      divC(){
                    console.log('divC');
                    
                },
                butC(){
                    console.log('butC');
                    
                }
    ```
加上`.stop`
![](https://user-gold-cdn.xitu.io/2019/11/7/16e4613b1c02be5d?w=547&h=62&f=png&s=4076)
不加`.stop`
![](https://user-gold-cdn.xitu.io/2019/11/7/16e461446bb71969?w=538&h=46&f=png&s=3322)   
    - `.prevent`阻止默认事件
    - `.{keyCoe | keyAlias}`  `<input type="text" @keyup.a="keyUp">`
    - `.ntive`组件监听
    - `.once`
## 条件判断
### v-if
- 如果是ture就显示，false就是不显示，当是false的时候，显示v-else的内容。
还有v-else-if，但是不建议这么写，这样复杂的东西要写在计算属性中比较好。

- 小案例：点击'切换登录方式'来切换用户名或者邮箱登录
``` html
<div v-if="isUser">
            <label for="userLogin">用户名</label>
            <input type="text" name="" id="userLogin">
        </div>
        <div v-else>
                <label for="userLogin">邮箱</label>
                <input type="text" name="" id="userLogin">
        </div>
        <button @click="swich">切换登录方式</button>
```
``` vue
    swich(){
                    this.isUser = !this.isUser
                }
```
- 小案例的问题： 为什么我输入完之后，点击切换，切换到邮箱登录，我之前的内容还在？（按照写的代码，如果显示的邮箱的话，他是完全全新的input，按理来说什么也不显示才对）
- 因为，vue内部有虚拟dom，把要渲染的东西，先保存在虚拟dom中，你切换的时候，先把dom中的删除，然后发现新的和之前在虚拟dom中的一样，也是一个lable一个input，他就会看看改了啥，不会创建新的lable和input，只是做了相应的修改，所以之前输入的东西还在。
- 如果不想让你输入的东西复用，那就给input加一个key，input中的key值不一样就不会复用。

### v-show
基本功能和v-if一样，但是当为false  v-show在dom中写上display：none，而v-if是直接删除
何时用哪个？
切换频率多用v-show，只切换一次用v-if
### v-for遍历数组、对象
```
<body>
    <div id="app">
        <div v-for="(item,index) in a">{{item}}-{{index+1}}</div> 
        <div v-for="(value,key,index) in b">{{value}}-{{key}}-{{index}}</div>
    </div>
    <script>
        const app = new Vue({
            el:'#app',
            data:{
                a:['a','b','c'],
                b:{
                    name:'xiaolu',
                    age:18,
                    height:180
                }
            }
        })
    </script>
</body>
```
![](https://user-gold-cdn.xitu.io/2019/11/7/16e46652423cb60a?w=205&h=154&f=png&s=4684)
- 数组 一个参数是数组的值，两个参数是数组的值和下标。
- 对象 一个参数是value两个参数是value和key，三个参数是value、key和下标。
### v-for使用过程添加key
    diff算法：计算虚拟dom和真实dom的差别
    如果给几个li中插入一个值。
- 不加key：就会先把f的下标改成2，然后c改成3，d改成4，e改成5，操作了很多步骤。
- 加了key的话，就直接把f的下标设置成5，插入到b的后面，节省了很多内存。`<li v-for="(item,index) in letters" v-bind:key="item">{{index}}-{{item}}</li>`
- 注意，key要取唯一值，如果key值重复会报错。
内部操作流程：
![](https://user-gold-cdn.xitu.io/2019/11/8/16e489e4088f3cf5?w=316&h=275&f=png&s=10486)
### 哪些数组的方法是响应式的
1. push 
2. pop（） 删除最后的元素 可以传入多个值
3. shift 删除最前边元素 可以传入多个值
4. unsift 在最前边增加元素
5. splice()
6. reverse()
### 哪些数组的方法不是响应式的
1. 通过索引值，修改数组元素  不能响应
- 可以用splice代替
- 可以用vue的set方式改`Vue.set(this.letters,0,'bbbbb')`
### 补充- 可变参数
```
function sum(...nums){
    console.log(nums);
}
sum(1,2,3,4,5);
```
### 作业：页面显示三个电影，点击哪个哪个就变成红色
操作步骤：
当点击的时候，把curenIndex和获取到的index做比较，如果一样的话，就给他将让一个变红的class
默认cruuentIdex是0，就达到了默认是第一个变红。

``` css
<style>
        .red{
            color: red;
        }
    </style>
```
``` html
<div id="app">
       <ul>
           <li v-for="(m,index) in movies" 
           v-bind:class="{red:index===curentIndex}"
           v-on:click="liClick(index)"
           >
           {{index}}-{{m}}</li>
       </ul>
    </div>
```
``` javascript
<script>
        const app = new Vue({
            el:'#app',
            data:{
                curentIndex:0,
                movies:['少年的你','中年的你','老年的你'],
                
            },
            methods:{
               
                liClick(index){
                    this.curentIndex = index
                }
                }
            
        })
    </script>
```
### 案例
实现如下界面和功能，并且当列表中没有商品的时候，页面显示购物车无商品。
![](https://user-gold-cdn.xitu.io/2019/11/9/16e4ea41e8e0d90d?w=431&h=172&f=png&s=66058)
#### 思路
- 分为index和js两部分，css暂时不写
- index
```
<body>
    <div id="app">
        <div v-if="books.length">
                <table>
                        <thead>
                            <tr>
                                <th>序号</th>
                                <th>书籍名称</th>
                                <th>出版日期</th>
                                <th>价格</th>
                                <th>购买数量</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(book,index) in books">
                                <!-- 可以这样写但是不建议，这样不能很好的操作他们 -->
                                <!-- <td v-for="value in book">{{value}}</td> -->
                                <td>{{book.id}}</td>
                                <td>{{book.name}}</td>
                                <td>{{book.date}}</td>
                                <td>{{book.price | showPrice}}</td>
                                <td>
                                    <button v-on:click="decrement(index)" v-bind:disabled="book.count <= 1">-</button>
                                    {{book.count}}
                                    <button v-on:click="increment(index)">+</button>
                                </td>
                                <td> <button v-on:click="remove(index)">移除</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <h2>总价格   {{totalPrice | showPrice}}</h2>
        </div>
        <div v-else>
            购物车为空
        </div>
    </div>
    <script src="../js/vue.js"></script>
    <script src="./main.js"></script>
</body>
```
- js
```
const app = new Vue({
    el:'#app',
    data:{
        books:[
            {
                id:1,
                name:'《JavaScript基础》',
                date:'2019-02',
                price:85.00,
                count:1
            },
            {
                id:2,
                name:'《JavaScript基础2》',
                date:'2019-03',
                price:86.00,
                count:2
            },
            {
                id:3,
                name:'《JavaScript基础3》',
                date:'2019-05',
                price:89.00,
                count:14
            }
        ]
    },
    methods:{
        increment(index){
            this.books[index].count++
            // console.log(this.books[index].count)
        },
        decrement(index){
            this.books[index].count--
        },
        remove(index){
            this.books.splice(index,1)
        }
    },
    // 过滤器
    filters:{
        showPrice(price){
        return '￥' + price.toFixed(2)
        }
    },
    computed:{
        totalPrice(){
            let totalPrice = 0
            for (let i = 0; i < this.books.length; i++) {
                totalPrice += this.books[i].price * this.books[i].count                
            }
            return totalPrice
        }
    }

})
```
1. 在table外边套一个div的目的就是，写v-if和v-else达到当列表中没有商品的时候，页面显示购物车无商品的功能。
2. table的整体思路是先写固定的表头，用vue动态补充内容。
3. 点击+实现商品数量增加：写点击事件，获取当前的下标（index），然后在函数中写books[index].count++,减少商品同理。
4. 点击移除：给移除绑定点击事件，获取index，然后点击一下，直接用books[index].splice(index,1)达到删除一行的操作。
5. 价格显示的时候怎么显示 ￥和小数点后两位： 写一个过滤器（filters），toFixed(2)是保留两位小数（四舍五入）
```
 filters:{
        showPrice(price){
        return '￥' + price.toFixed(2)
        }
```
6. 计算总价格：用计算属性（computed），显示的时候加上 过滤器 展示。
7. 考虑到商品不能有负数，并且后边有移除按钮所以设置为最少是1，在 - 处写个当小于等于1的时候disabled为ture。实现无法点击的效果。


### 补充 保留两位小数
`.toFixed`toFixed() 方法可把 Number 四舍五入为指定小数位数的数字。
例如：a=12.34，a.toFixed(2)

### 补充 for循环
for(let i in this.books)
### 编程范式：命令式/声明式编程
面向对象/面向函数编程
### 高阶函数
1. filter:找出数组中小于5的数----判断
```
<script>
        let a=[1,2,3,4,5,6,7,8,9];
        let newA = a.filter(function(n){
            return n<5;
        })
        console.log(newA);
    </script>
```
- filter函数必须有一个返回值，boolean类型的
- 当返回ture的时候，就将回调的n放到新数组中，
- false的时候，就不管这次的n
2. map函数：给数组每个数乘以2返回-----操作数组中的值
```
let newB = a.map(function(n){
            return n*2
        })
```
3. reduce函数：对数组内所有数据进行汇总

![](https://user-gold-cdn.xitu.io/2019/11/9/16e50600633d4aea?w=564&h=120&f=png&s=22049)

### 箭头函数

![](https://user-gold-cdn.xitu.io/2019/11/9/16e506c07e63df25?w=330&h=41&f=png&s=7354)

![](https://user-gold-cdn.xitu.io/2019/11/9/16e5071008cd2842?w=454&h=116&f=png&s=13804)

### v-model
表单元素和数据的双向绑定。
#### 基本使用
 就是 上边改会导致下边改
 下边改上边也会改。
#### 原理
包含了两个代码
v-bind、v-on

`<input type="text" v-model="message">`

相当于

`<input type="text" v-bind:value="message" v-on:input="message = "$event.target.value">`
#### v-model和radio
 v-model 可以达到name的作用

#### v-model和checkbox
- 只有一个按钮   一般是boolean值
- 多选框 用数组存

![](https://user-gold-cdn.xitu.io/2019/11/10/16e53ee759f1142b?w=168&h=90&f=png&s=3234)
```
<body>
    
    <div id="app">
        <input type="radio" value="男" v-model="sex">男
        <input type="radio" value="女"  v-model="sex">女
        {{sex}}
        <div>
            <input type="checkbox" name="" id="" value="1" v-model="nums">1
            <input type="checkbox" name="" id="" value="2" v-model="nums">2
            <input type="checkbox" name="" id="" value="3" v-model="nums">3
            <input type="checkbox" name="" id="" value="4" v-model="nums">4
        </div>
        {{nums}}
    </div>
    <script>
        const app = new Vue({
            el:'#app',
            data:{
                message:'niaho',
                sex:'',
                nums:[]
            }
        })
    </script>
</body>
```
#### v-model和select

![](https://user-gold-cdn.xitu.io/2019/11/10/16e53f802ee3da3a?w=398&h=129&f=png&s=10829)
加上这个参数就可以在选择的时候按住ctrl多选啦。

### 值绑定
就是开发中 值是后台获取的，不是写死的。

![](https://user-gold-cdn.xitu.io/2019/11/10/16e540cb9c0eac2e?w=581&h=369&f=png&s=26675)
#### 修饰符  `.`
1. lazy  敲回车或者失去焦点才进行变量更新
2. number 就是在输入框输入文字的时候默认是string类型，写上`.number`的时候，就会转换成number类型。
3. trim 去除开头和结尾的空格。


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