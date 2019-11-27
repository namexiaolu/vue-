## 基本数据类型
- number
- string
- boolean
- null
- undefined
- object

## 强制类型转换

### toString();
```
var a= 123;
a= a.toString();
```
- toString 是转换成字符串，而不是自己的值改变。
- NaN和Undefined没有这个方法，要直接调用String方法。`String(NaN);`

### 转换为number
- string->number
    - "123"可以转换为123；
    - "abc"装换为NaN；
    - 空值或者空格转换为0
    - parseInt();
        - "123px"->123
        - 123.648px->123
        - a123->NaN
    - parsFloat();
        - 123.648px->123.648
        - 123.456.789->123.456
    
- NUll->number
    - 0
### 隐式类型转换
所有的非number进行运算，会将这些值转换为number再运算。

- 任何值和NaN运算都是NaN。
- ` "123"+"456"=123456 `如果对两个字符串相加会拼串。
- 任何值和字符串相加都会转换为字符串。
- 将数字转换为字符串常用`c=c+" "`

![](https://user-gold-cdn.xitu.io/2019/9/18/16d446292b413b4a?w=301&h=74&f=png&s=22079)
结果是33。
* 除了字符串加法，其余都转化为number。
###  ->boolean（其他语言转换不了，只有js可以）

    调用boolean（）方法。
   - 数字 0和NaN是false，其他都是ture。
   - 字符串 空串是fasle 其他都是ture
   - null fasle
   - undefined fasle
   - 对象 ture
 ## 运算符（也叫操作符）
- typeof的返回值是string
- 对于和字符串相加，都会转换为字符串进行相加。
- 除了上边这种情况，其他都是转换为数字进行计算。
- undefined ->NaN
- 2*null=0
- 可以利用这个做隐式类型转换。`+0 -0 *1 /1 `


### 一元运算符
- 正号 +
    - 隐式转换 +字符串转换为number `1 + +'2'+3  =>6`

- 负号 
    - 就是取反
#### 自增
- 自增 a++；
    - 会影响原变量。
    - a 是一个变量 a++是一个表达式，这两个不是一个东西。
    变量有变量的值，表达式有表达式的值。
    a++等于自增以前的值。++a是新值。

![](https://user-gold-cdn.xitu.io/2019/9/19/16d46fc623235cfe?w=259&h=53&f=png&s=12605)

```
d=20;
d=d++
```
分析：`d=d++`先执行等号后边的运算。`d++是20;d是21;`,然后再赋值给前边的d。所以最后的d是20;
#### 逻辑运算符
- ！非运算
    - 对非boolean取反 ，先转换，再取反。
    - 两次取反，隐式类型转换为boolean
- && 与运算
    - 两端都是ture，返回ture。
    - js中是短路的与，如果第一个是fasle则直接不继续判断了。
    - `false && alert('哈哈哈');`哈哈哈就不会显示。
- || 或
   - 只要有一个ture就返回ture。
   - 或也是短路的。
 - 非boolean值
    - 先将他转换为boolean，再运算，并返回原值。
    - 与 &&
        - 第一个为ture，直接返回第二个值，跟断路有关系。
        - 第一个为fasle，直接返回第一个。
        - 两个有false，返回前边的值。
    - 或 || 
        - 第一个为ture，直接返回第一个。
        - 第一个为fasle，直接返回第二个。
#### 比较运算符
- 字符串和字符串相比较是比较Unicode编码，一个一个比较。
- 其他情况是转换为数字进行比较。
- NaN不等于任何数，包括他自己
- 判断一个值是不是NaN要用isNaN（）函数来判断。
- ！== 这个是非全等
#### 优先级
- && 比 || 的优先级高
## 判断
#### 提示框
- prompt()  弹出带输入框的提示框。并把输入的值返回。
`var a = prompt("请输入内容");`
#### if判断语句
没啥写的 就正常
#### switch语句
```
switch(a){
    case 1:语句1;
    case 2：语句2;
    case 3:语句3;
    default: 语句4;
}
```
a等于的话，输出语句2和语句3和语句4;想要只执行语句2，就在后边加上break;

#### 循环
- 向页面中输出：document.write("内容");
- while(){} 先判断后执行。
- do ... while 先执行 后判断。保证至少执行一次。
- for循环
```
for(初始化;条件;更新表达式){
    
}
```
#### 质数练习
用根号算。`Math.sqrt(i);`
#### 输出99乘法表
```
   for(var i=1;i<=9;i++){
            
            for(var j=1;j<=i;j++){
                document.write(j+'*'+i+'='+i*j);
            }
            document.write("<br/>");
        }
    
```
#### break和continue
不能在单独if中使用。
- break退出当前循环
- continue 跳过当次循环
- 可以为循环语句创建一个label来标志当前循环。
```
outer:
        for(var i=1;i<5;i++){
            console.log("外层循环"+i);
            break outer;
            //continue outer;效果一样;
            console.log("内层循环");
        }
```
#### 程序计时器
`console.time('test');`
`console.timeEnd('test');`

### 对象Object
- 基本数据类型都是单一的值
- 值和值之间没有任何联系
- 对象属于复合数据类型，
- 对象的分类
    1. 内建对象  
        - ES标准中定义的对象（目前主要指由浏览器提供的对象）。
        - 比如Math String Boolean Function Object ...
    2. 宿主对象
        - 由js的运行环境提供的对象，主要指路蓝旗提供的对象
        - BOM DOM
    3. 自定义对象
## 对象
- 创建对象
`var obj = new Object();`
    - 对象的属性名随便用，不遵守标志符的规范。
    - 但是尽量遵守。
    - obj.123会报错。采用`obj["123"]=789;`取数据的时候也这样`console.log(obj["123"]);`
    - 中括号方式更加灵活，可以传变量。
- 读取对象
    - `console.log(obj.name);`
    - 读取没有的属性，会返回undefined;
- 修改
    - obj.name= "tom";直接改就行;
- 删除
    - delete obj.name; 
- in 运算符
    - 检查一个对象中是否含有指定的属性，（对象中没有，原型中有的话也会返回true）返回true或fasle。`console.log("test2" in obj);`
#### 基本数据类型和引用数据类型
- 基本数据类型
    - 直接保存在栈内存中，每个值修改不互相改变值。 
![](https://user-gold-cdn.xitu.io/2019/9/20/16d4c3280ab9bacf?w=183&h=221&f=png&s=11480)
- 对象
    - 保存在堆内存中 
![](https://user-gold-cdn.xitu.io/2019/9/20/16d4c32ded7ad3e4?w=349&h=293&f=png&s=36390)
    - 每创建一个新的对象，
    - 对象保存的是地址。
![](https://user-gold-cdn.xitu.io/2019/9/20/16d4c35759ffa788?w=513&h=297&f=png&s=56630)

![](https://user-gold-cdn.xitu.io/2019/9/20/16d4c382b14a1c87?w=830&h=258&f=png&s=36190)
#### 字面量方法
## 函数
- 判断数字是不是偶数
 ```
 function isOu(){
     return num%2==0;
     //这个式子的返回值就是ture或者fasle，所以可以直接写return。
 }
 ```
 - console.time函数
    `console.time('jishi');`
    中间写运行的函数，
    `console.timEnd('jishi');`
    最后输出所用时间。
- 函数返回值类型
    返回值是任意类型。包括函数和对象。

### 立即执行函数
- 调用一次就不用了。
- `function(){};`像这样的匿名函数直接调用会报错，在外边加一个（）就不会报错了。
- 要想调用要这样写
    ```
    (function(){
    alert('我是立即调用函数';
    })();
    ```

![](https://user-gold-cdn.xitu.io/2019/9/21/16d52fbb021010fc?w=177&h=58&f=png&s=13571)
### 方法
如果一个函数作为一个对象的属性值，那么这个函数是这个函数的方法。
调用函数就是调用函数的方法。

![](https://user-gold-cdn.xitu.io/2019/9/21/16d5306588f15148?w=317&h=140&f=png&s=31696)
箭头中两个调用只有名字的区别没有本质区别。

### 枚举对象中的属性
` for in `语句

```
var obj = {
    name : 'xiaolu';
    age : '18';
    add:'songlanbao';
}
for(var n in obj){
    //每次执行时，会将对象中的一个属性的名字赋值给变量n。
    console.log(obj[n]);
    //此处不能写 console.log(obj.n);因为obj吗没有n这个属性，这样写会输出undefined
};
```
### 作用域
- 一个变量的作用的范围
- js中分为全局和局部作用域
    - 全局作用域 在页面打开时创建，关闭时销毁。
    - 全局对象window可以直接使用。
        - 在全局作用域中，创建的变量都会作为window的属性保存。 `var a=1;console.log(window.a);`
        - 创建的函数都会作为window的方法保存。
### 变量的声明提前
所有被var关键字生命的变量，会在所有的代码之前被声明，但是不会赋值。
### 变量寻找规则
- 先在当前作用域寻找，如果没有则向上一级寻找，再没有就再向上找，如果一直找到全局作用域没找到，就报错。`ReferenceError`
- 如果就想用全局的就写`window.a` 就是全局的。
```
  var a = 1;
        function fun(){
            console.log(a);
            // var a = 2;
        }
        fun();
```
上边代码没有注释的话就是undefined，有注释就是1，因为没有注释的时候是声明提前，有注释的时候就是向外寻找变量。
- 函数声明也会在所有代码之前进行声明，跟var似的。

```
 var a = 1;
        function fun(){
            console.log(a);
            a = 2;
        }
        fun();
        console.log(a);
```
在函数中没有写var直接给a赋值，就是给全局作用域赋值，最终输出为`1`和`2`。
```
var e = 23;
        function fun2(e){
            //var e;
            alert(e);
        }
        fun2();
```
定义形参就相当于在函数中声明变量，所以上边的代码输出undefined

### 函数作用域
- 调用函数的时候创建函数作用域，函数执行完毕后，函数作用域销毁。
- 每调用一次函数，就会创建一个函数作用域。他们相互独立。
- 函数作用域可以访问全局作用域，但是全局作用域无法访问函数作用域。

### debug
 60集 火狐脚本调试
### this

![](https://user-gold-cdn.xitu.io/2019/9/22/16d585bac7c531e2?w=427&h=129&f=png&s=74314)

### 使用工厂方式创建对象
```
  function creatperson(name,age,gender){
            var obj = new Object();
            obj.name= name ;
            obj.age = age;
            obj.gender = gender;
            obj.sayName = function(){
            alert(this.name);
            };
            return obj;
        }  
        var obj1=creatperson("swk",18,'nan');
        console.log(obj1);
```
输出:
        
![](https://user-gold-cdn.xitu.io/2019/9/24/16d609cd3ff2188d?w=185&h=102&f=png&s=5347)

### 构造函数(难点)
- 使用工厂方法创建的对象都是Object类型,导致无法区分出多种类型的对象，（例如：狗和人都是object，用的时候不好区分。）
- 构造函数创建的对象就是你起的名字。
```
 function creatperson(name,age,gender){
            var obj = new Object();
            obj.name= name ;
            obj.age = age;
            obj.gender = gender;
            obj.sayName = function(){
            alert(this.name);
            };
            return obj;
        }  
        var obj1=creatperson("swk",18,'nan');
        console.log(obj1);//输出的object
        function Persion(name,age,gender){
            this.name = name;
            this.age = age;
            this.geder = gender;
            this.sayName = function(){
                alert(this.naem);
            };
        }
        var per1 = new Persion('xiaolu',18,'man');
        console.log(per1);//输出的是Persion
```
- 构造函数首字母大写
- 通过instanceof可以检查一个对象是否是一个类的实例。`对象 instance 构造函数`
- 构造函数执行流程
    1. 立刻创建一个新的对象
    2. 将新建的对象设置为函数中this，在构造函数中可以使用this来引用新建的对象
    3. 逐行执行函数中的代码
    4. 将新建的对象作为返回值返回
- 使用用一个构造函数创建的对象，我们称为一类对象，也将一个构造函数称为一个类，我们将通过一个构造函数创建的对象，称为是该类的实例。
- this的情况
    1. 当以函数调用的时候，this是window
    2. 当以方法调用时，谁调用方法this就是谁
    3. 构造函数 this就是新创建的对象
    
#### 构造函数修改
构造函数每次调用都会创建一个空间，很占内存，给他弄成全局的函数，就不会每次都创建了，每次调用就行啦。如下所示：
```
function Persion(name,age,gender){
            this.name = name;
            this.age = age;
            this.geder = gender;
            // this.sayName = function(){
            //     alert(this.naem);
            // };
            this.sayName = fun;
        }
        function fun(){
            alert("hello，我叫"+this.name);
        }
        var per1 = new Persion('xiaolu',18,'man');
        per1.sayName();
```
### 原型对象prototype
上边的方法虽然解决了很占内存的弊端，但是声明的一个全局变量，这样以后如果也创建一个同样名字的函数的时候，就会覆盖掉这个。所以引出了原型对象来解决这个问题。


- 我们创建的每一个函数，解释器都会向函数中添加一个属性prototype，
    - 这个属性对应着一个对象，这个对象就是我们所谓的原型对象。 
- 如果函数作为普通函数调用prototype没有任何作用
- 以构造函数的形式调用的时候，可以通过`__proto__`来访问该属性
- 当我们访问对象的一个属性或者方法时，他会先在对象自身中寻找，如果有则直接使用，如果没有则会去原型对象中寻找，如果找到就直接使用。**没有找到的话继续找原型的原型，再没有就再找，这个有几层不一定，看你的函数是怎么写的了，一般情况下是两层  直到找到object的原型，若没有找到就返回undefined**  *object的原型是null，相当于没有原型*
- 以后我们创建构造函数时，可以将这些对象共用的属性和方法，统一添加到构造函数的原型对象中，这样不用分别为每一个对象添加，也不会影响到全局作用域，就可以使每个对象都具有这些属性和方法了。
- `has OwnProperty()`来检查对象自身中是否含有某个元素，不包括原型中的对象。（和 in 运算符作比较）。返回true fasle
- 

```
function Persion(name,age,gender){
            this.name = name;
            this.age = age;
            this.geder = gender;
            // this.sayName = function(){
            //     alert(this.naem);
            // };
            // this.sayName = fun;
            Persion.prototype.sayName=function(){
            alert("hello，我叫"+this.name);
            }
        }
        // function fun(){
        //     alert("hello，我叫"+this.name);
        // }
       
        var per1 = new Persion('xiaolu',18,'man');
        per1.sayName();
```
### toString
console.log(per);展示的是per的toString方法。会显示[object object]
无法复现。难受。

### 垃圾回收（GC）（概念）
- 当一个对象没有任何变量或者属性对它进行引用，此时我们无法操作该对象。该对象就成为一个垃圾。垃圾多了就会占用内存空间，导致程序运行变慢。
- js中有自动垃圾回收机制，会自动将这些垃圾从内存中销毁
- 我们只需要将不再使用的对象设置为null即可。
### 数组
- 数组也是对象
- 数组的存储性能比普通对象好
- 读取不存在的数组回返回undefined
- 获取数组的长度
    - length返回最大索引值+1（非连续的数组回不知道有多少位）。
    - 修改长度 length=10; (如果改的数比之前的小，则把最后以为截没)
    
- 想数组最后添加元素`arr[arr.length]=10;`
- 创建数组
    - `var arr = new Array(10,20,30);`
    - 字面量方法 `var arr = [1,2,3];`
    - 注意：
        - 当`var arr = new Array(10);`代表的是创建的数组中有10个元素，都是空，
        - `var arr= [10];`代表的是数组中有一个元素 10
- 数组的方法
    - push（）向数组末尾添加一个或多个元素，返回新数组的长度。`arr.push(1,2,3);`
    - pop() 删除数组最后一个元素，并返回删除的元素。`arr.pop()`
    - unshfit() 向数组开头添加一个或多个元素，返回新数组的长度
    - shift（）删除数组第一个元素，返回删除的元素
- 数组的遍历
    for循环（略）
    - forEach方法（ie8以上）
        - 需要函数作为参数
        - 像这种函数，由我们创建但是不由我们调用的，我们称为回调函数。
        - 数组中有几个元素就会循环几次。
        - 回调函数中会传递三个参数：
            1. 当前正在遍历的元素
            2. 当前索引
            3. 就是整个数组。
    ```
        var arr = ['swk','zbj','shs'];
        arr.forEach(function(a,b,c){
            console.log(a);
            console.log(b);
            console.log(c);
        });
    ```
    结果：
![](https://user-gold-cdn.xitu.io/2019/9/24/16d60d7394ebd931?w=222&h=219&f=png&s=6161)
- slice(start，end)
    - 截取数组中指定的元素
    - 不改变原数组
    - 参数
        - 包括开始的索引
        - 不包括结束的索引
        - 第二个参数可以省略不写，表示截取之后的所有。
        - 如果是负值，就是从后往前数
- splice ()
    - 删除数组中指定的元素
    - 改变原数组
    - 参数
        - 开始位置的索引
        - 删除的**数量**
        - 第三个参数 传进来新元素，放在删除的元素那里。可以第二个参数写0，直接插入新的元素。
- 练习去除数组中重复的数据。
    - 
- concat（）
    - 连接两个或多个数组，返回新数组
    - 不改变原数组
- join（）
    - 将数组转换为字符串
    - 不改变原数组
    - join中可以指定一个字符串作为连接符。（不指定的话默认为` ，`）
- reverse()
    - 反转数组
    - 改变原数组
- sort（）
    - 对数组中的元素进行排序
    - 改变原数组，按照unicode进行排序，排序数字的时候回出现错误，所以要写回调函数。
        - 回调函数：系统自动调用的函数叫回调函数
        - sort的回调函数是传入两个值，如果返回值>1就交换位置。
    ```
      var arr = [1,2,22,3,4,11];
        arr.sort(
            function(a,b){
                return a-b;
            }
        );
        console.log(arr);
    ```
- 函数对象的方法
    - call()和apply()   

- arguments
    - 是一个类数组对象
    - 判断是不是数组用判断或者`Array.isArray(arguments)`
    - 调用函数时，我们所传递的实参保存在arguments中。
    - 有个callee的属性，返回函数对象 
- Date对象
    - 当前时间`var d = new Date();`
    - 指定时间  `var d2 = new Date("12/03/2019 11:10:30");`
    - getDate() 几日
    - getDay  周几 0为周日
    - getTime（） 1970.1.1 到当前的毫秒数
- Math
    - 不是构造函数，不用创建对象，是工具类，拿过来直接用。
    - abs（） 绝对值
    - ceil() 向上取整
    - floor()向下取整
    - round（）四舍五入
    - round（） 生成随机数0-1
        - [ ] 生成 x-y的随机数？
    - max() 取最大值
    - min() 最小值
    - pow(x,y) x的y次幂
    - sqrt() 开方
- 包装类
    -  浏览器底层自己用的，开发的时候不会用，目的是临时将基本数据类型转换为对象，就可以给基本数据类型加属性了，比如`num.tostring();`
- 字符串相关方法
    -  字符串是以数组的形式存放的，所以数组能用的属性他都能用。
    - ` str.charAt(2);` 取下标为2的字符 相当于`str[6];`
    - `charCodeat(2);` 返回unicode编码
    - `String.formChartCode（）` 根据字符编码获取字符(**通过string函数调用，特殊**)
    - concat（） 字符串拼接
    - indexOf（）
        - 检索一个字符串中有没有指定内容，返回第一次出现的索引，没有找到返回-1
        - 第二个参数是从第几个开始数。
    - lastIndexOf（） 从后往前找
    - slice（） 和数组一样，包括开始，不包括结束。
    - substring() 和slice类似，
        - 不能传负数 写负数相当于0
        - 自动会把数组的参数从小到大排。
    - sunstr（） 不建议使用  第一个参数是开始位置，第二个是截取的长度。
    - aplit() 拆分字符串为数组，参数写根据什么拆。
    - toUpperCase() 转为大写
    - toLowerCase() 转为小写
- 正则表达式
    - 用于定义字符串规则，检查一个字符串是否符合规则。
    - 创建正则表达式对象
        - `var reg = new RegExp("正则表达式","匹配模式");`
        - `var reg = /正则表达式/匹配模式;`
    - 匹配模式为
        - i 忽略大小写 
        - g 全局匹配
    - 使用reg.test(arr);来检查arr这个字符串是否符合reg这个正则
    - `|`表示或   `/a|b/`a或b
    - `[]`  `/[a-z]/` 也是或的意思
        - `/[A-z]/`表示任意字母
        - `/a[bde]c/` abc.adc.aec
        - `/[^ac]/` 除了ac
        - `/[^0-9]/` 除了数字
    - 字符串和正则相关的方法
        - splice()
            - 拆字符串为数组
        ```
        var arr = "1a2b3c4d5f6g7h";
        var result = arr.split(/[A-z]/);
        console.log(result);//["1", "2", "3", "4", "5", "6", "7", ""];
        ```
        - search() 字符串中是否含有指定的内容。返回第一次出现的索引。
            - `search(/a[bef]c/);`查找有没有abc或aec或afc
            **即使设置全局匹配也没用。只能返回找到的第一个。**
            - `match(/[a-z]/ig)`提取符合要求的字符。
                - 默认情况只会找到第一个
                - 把正则写成全局匹配模式，就会找全。
                - 返回值为数组
        - `replace('旧值'，'新值');` 将字符串中指定内容替换为新内容。默认只替换第一个。
        - `repace(/[a-z]/ig,"-");`
    - 通过量词设置出现的次数。`/a{3}/`;
    - `/ab{3}/` 三个b
    - `/ab{1,3}c/` ac中间有1到3个b就行（含1和3）
    - `/ab{3,}c/` ac中间有3次以上b。
    - `+` 表示至少一个
    - `*` 有没有都行相当于{0,}
    - `?` 0个或者1个 {0,1}
    - `^`表示是否开头（注意和中括号中的区分）`/^a/`
    - ` $ ` 表示结尾` /a$/ `
    - `/^abc$/` 同时使用，要求必须完全符合。
    - `/^a|a$/` 表示a开头或者a结尾
    - 手机号练习
    ```
        var phone = "13681234560";
        var reg = /^1[3-9][0-9]{9}$/;
        result = reg.test(phone);
        console.log(result);
    ```
    - 检查字符串是不是有`.`
    - `/./` `.`表示任意字符
    - 转义字符`\` 
        - 字面量方法：`/\./`
        - 构造函数方法: `reg = new regExp("\\.");`要写两个`\`,因为字符串中的`\`也是转义字符。
    - `\w` 字母数字下划线
    - `\W` 除了字母数字下划线
    - `\d` 数字
    - `\s` 空格
    - `\b` 单词边界  `/\babc\b/`用于检测abc是独立单词，如果是sdabcsd就错了。
    - 练习去除开头和结尾的空格
    ```
    var arr4 = "   aaa  aa   ";
        console.log(arr4);
        result = arr4.replace(/^\s*|\s*$/,"");
        console.log(result);
    ```
    - 电子邮件练习
    fasdf.12324_fasd@fsdf.com
        - 任意数字字母下划线 `\w+`
        - `.`和任意字母下划线。`\.[A-z0-9]`
        - @ `@`
        - 任意字母`[A-z]*`
        - `.`和任意字母`\.[A-z]*$`
        - `/^\w*(\.[A-z0-9])*@[A-z0-9]*(\.[A-z]+){1,2}$/`
## DOM
### 事件
    就是用户和浏览器之间的交互行为。
    两种方法：
    1. 直接在HTML中写属性。
    2. 分离出来在js中写。
### 文档的加载
    自上而下的加载。
    可以用`window.onload=function(){}`来绑定页面加载完成后再执行js代码。
### dom 的方法
1. getElementById();    
返回元素
2. getElementsByTagName()
返回数组
3. getElementsByName()
返回数组
- innerHTML 用于获取元素内部的html代码，如果元素没有内部，那就没法获取。eg：input是自结束标签，他就没有。想要获取元素中的属性，直接元素.属性名。
- 因为class是保留关键字，所以不能.class要用className。
- 练习图片切换
```
     <style>
        div {
            width: 500px;
            height: 332px;
            margin: 0 auto;
        }
        div:nth-child(2) {
            float: right;
        }

    </style>
    <script>
        window.onload=function(){
            var prev = document.getElementById("prev");
            var next = document.getElementById("next");
            var img = document.getElementById("img");
            var index = 1;
            next.onclick = function(){
                index++;
                if(index>5){
                    index=1;
                }
                img.src = "./img/"+index+".jpg";
            }
            prev.onclick = function(){
                index--;
                if(index<1){
                    index=5;
                }
                img.src = "./img/"+index+".jpg";
            }
        }
    </script>
</head>
<body>
    <div>
         <img id="img" src="./img/1.jpg" alt="">
    </div>
    <div>
        <button id="prev">
            <
        </button>
        <button id="next">
            >
        </button>
    </div>
</body>
```
4. 获取元素节点的子节点
    1. getElrmentsByTagName() 获取当前节点的指定标签名后代节点。
    2. childNodes 表示当前节点的所有子节点。**没有括号**会获取文本节点、空格、回车。**ie8不会将空白当成子节点**
    3. firstChild 第一个子节点 **会将空白当成子节点 返回text**
    4. firstElementChild 不会获取空白。**ie8不支持**
    5. lastChild 最后一个子节点

5. 获取父节点和兄弟节点
    1. parentNode 父节点
    2. previousSibling 前一个兄弟节点
    3. nextSibling 后一个兄弟节点
- innerText 获取元素中的text文本内容
```
<script type="text/javascript">
			function Myclick(idStr,fun){
					var btn = document.getElementById(idStr);
					btn.onclick = fun;
				};
			window.onload =function(){
				//定义通用点击函数
			
				//查找#bj节点
				var btn01 = document.getElementById("btn01");
				btn01.onclick = function(){
					var beijing = document.getElementById("bj");
					alert(beijing.innerHTML);
				}
				//查找所有li节点
				var btn02 = document.getElementById("btn02");
				btn02.onclick = function(){
					var lis = document.getElementsByTagName("li");
					for(var i=0;i<lis.length;i++){
						console.log(lis[i].innerHTML);
					}
				}
				//查找name=gender的所有节点
				var btn03 = document.getElementById("btn03");
				btn03.onclick = function(){
					var gender = document.getElementsByName("gender");
					for(var i=0;i<gender.length;i++){
						console.log(gender[i].value);
					}
				}
				//查找#city下所有li节点
				var btn04 = document.getElementById("btn04");
				btn04.onclick = function(){
					var city = document.getElementById("city");
					var citylis = city.getElementsByTagName("li");
					for(var i=0;i<citylis.length;i++){
						console.log(citylis[i]);
					}
				}
				//返回#city的所有子节点
				var btn05 = document.getElementById("btn05");
				btn05.onclick= function(){
					var city = document.getElementById("city");
					console.log(city.childNodes);
				}
				//返回#phone的第一个子节点
				var btn06 = document.getElementById("btn06");
				btn06.onclick=function(){
					var phone = document.getElementById("phone");
					console.log(phone.firstChild);
					console.log(phone.firstElementChild);
				}
				//返回#bj的父节点
				Myclick("btn07",function(){
					var beijing = document.getElementById("bj");
					console.log(beijing.parentNode);
				});
				//返回#android的前一个兄弟节点
				Myclick("btn08",function(){
					var android = document.getElementById("android");
					console.log(android.previousSibling);
					console.log(android.previousElementSibling.innerText);
				});
				//读取#username的value属性值
				Myclick("btn09",function(){
					var username = document.getElementById("username");
					console.log(username.value);
					//设置#username的value属性值
				
				});
				Myclick("btn10",function(){
					var username = document.getElementById("username");
					
					//设置#username的value属性值
					username.value = "hello world";
					console.log(username.value);
				});
				
				//返回#bj的文本值
				Myclick("btn11",function(){
					var beijing = document.getElementById("bj");
					console.log(beijing.innerHTML);
					console.log(beijing.firstChild.nodeValue);//这种麻烦
				});

			}				
				
				
		
		</script>
	</head>
	<body>
		<div id="total">
			<div class="inner">
				<p>
					你喜欢哪个城市?
				</p>

				<ul id="city">
					<li id="bj">北京</li>
					<li>上海</li>
					<li>东京</li>
					<li>首尔</li>
				</ul>

				<br>
				<br>

				<p>
					你喜欢哪款单机游戏?
				</p>

				<ul id="game">
					<li id="rl">红警</li>
					<li>实况</li>
					<li>极品飞车</li>
					<li>魔兽</li>
				</ul>

				<br />
				<br />

				<p>
					你手机的操作系统是?
				</p>

				<ul id="phone">
					<li>IOS</li>
					<li id="android">Android</li><li>Windows Phone</li></ul>
			</div>

			<div class="inner">
				gender:
				<input type="radio" name="gender" value="male"/>
				Male
				<input type="radio" name="gender" value="female"/>
				Female
				<br>
				<br>
				name:
				<input type="text" name="name" id="username" value="abcde"/>
			</div>
		</div>
		<div id="btnList">
			<div><button id="btn01">查找#bj节点</button></div>
			<div><button id="btn02">查找所有li节点</button></div>
			<div><button id="btn03">查找name=gender的所有节点</button></div>
			<div><button id="btn04">查找#city下所有li节点</button></div>
			<div><button id="btn05">返回#city的所有子节点</button></div>
			<div><button id="btn06">返回#phone的第一个子节点</button></div>
			<div><button id="btn07">返回#bj的父节点</button></div>
			<div><button id="btn08">返回#android的前一个兄弟节点</button></div>
			<div><button id="btn09">返回#username的value属性值</button></div>
			<div><button id="btn10">设置#username的value属性值</button></div>
			<div><button id="btn11">返回#bj的文本值</button></div>
		</div>
	</body>
```
### dom 的增删改
1. removeChild() 删除子节点 ` 父节点.removeChild("要删除的节点")`
2. creatElement() `document.creatElement()`
    创建元素节点,参数是 标签名 将创建好的对象返回
3. createTextNode()
4. appendChild() 把新的子节点添加到指定节点`父节点.appendChild(子节点);`
5. insertBefore() 在指定的子节点前面插入新的子节点`父节点.insertBefore(新节点,旧节点);`
6. repalceChild() 替换子节点
```
<script type="text/javascript">			
			window.onload = function() {
				//创建一个"广州"节点,添加到#city下
				myClick("btn01",function(){
					var li = document.createElement("li");
					var gz = document.createTextNode("广州");
					// console.log(li.append("广州"));
					li.append(gz);
					document.getElementById("city").append(li);
					// 简便方法（利用innerHtml）但是原理是先删除后增加，如果其中的元素绑定了元素，那么绑定就会失效。
					document.getElementById("city").innerHTML += "<li>广州</li>";

					// 折中方法
					var li = document.createElement("li");
					li.innerHTML = "广州";
					city.appendChild(li);
				});
				//将"广州"节点插入到#bj前面
				myClick("btn02",function(){
					var li = document.createElement("li");
					var gz = document.createTextNode("广州");
					li.append(gz);
					var bj = document.getElementById("bj");
					var city = document.getElementById("city");
					city.insertBefore(li,bj);
				});
				//使用"广州"节点替换#bj节点
				myClick("btn03",function(){
					var bj = document.getElementById("bj");
					var li = document.createElement("li");
					var gz = document.createTextNode("广州");
					var city = document.getElementById("city");
					li.append(gz);
					city.replaceChild(li,bj);
				});
				//删除#bj节点
				myClick("btn04",function(){
					var bj = document.getElementById("bj");
					var city = document.getElementById("city");
					// city.removeChild(bj);
					// 自杀方法
					bj.parentNode.removeChild(bj);
				});
				//读取#city内的HTML代码
				myClick("btn05",function(){
					
					var city = document.getElementById("city");
					console.log(city.innerHTML);
				});
				//设置#bj内的HTML代码
				myClick("btn06",function(){
					var bj = document.getElementById("bj");
					var city = document.getElementById("city");
					bj.innerHTML = "京北";
				});
			};
			function myClick(idStr, fun) {
				var btn = document.getElementById(idStr);
				btn.onclick = fun;
			}	
		</script>
```
### dom 的添加删除记录
例子：

![](https://user-gold-cdn.xitu.io/2019/10/2/16d8b78b50c2cce2?w=400&h=153&f=png&s=9906)
点击删除就会删除一行。
具体操作：
1. 看结构，知道要删除的是tr
2. 找delete和tr的关系   tr是delete的爷爷
3. 找到tr 
4. tr.parentNode.removeNode(tr) 完成删除
- confirm(""); 带取消和确定的弹窗。
```
<script type="text/javascript">
	window.onload=function(){
		var allA = document.getElementsByTagName("a");
		for(var i=0;i<allA.length;i++){
			allA[i].onclick = function(){
				var tr = this.parentNode.parentNode;
				var name = tr.firstElementChild.innerText;
				if(confirm("确认删除"+name+"么？")){
					tr.parentNode.removeChild(tr);
				}
				return false;//取消默认返回值
			};
		};
	};
</script>
```
添加信息：
![](https://user-gold-cdn.xitu.io/2019/10/2/16d8bb67a4cdea33?w=346&h=233&f=png&s=6576)
思路：
1. 获取提交按钮
2. 获取三个文本框
3. 添加到tr中
```
var addEmpButton = document.getElementById('addEmpButton');
		addEmpButton.onclick= function(){
			var empName = document.getElementById("empName");
			var email = document.getElementById("email");
			var salary = document.getElementById("salary");
			var employeeTable = document.getElementById("employeeTable");
			var tr = document.createElement("tr");
			console.log(empName);
			tr.innerHTML="<td>"+empName.value+"</td>"+
						"<td>"+email.value+"</td>"+
						"<td>"+salary.value+"</td>"+
						"<td><a href='javascript:;'>Delete</a></td>";
			var tbody = document.getElementsByTagName("tbody")[0];
			tbody.appendChild(tr);
```
- 函数执行顺序问题
```
 <script>
        var lis = document.getElementsByTagName("li");
        for(var i=0;i<lis.length;i++){
            alert("for循环"+i);
            lis[i].onclick = function(){
                alert("响应函数"+i);
            };
        };        
    </script>
```
先执行for循环，执行完了，再执行相应函数，相应函数不管怎么点击都是只显示 3 。
### dom操作内联样式（css）
1. 修改语法：`元素.style.样式名 = 样式值;`
- css中有`-`，这在js中不合法，要改为驼峰命名，eg:`background-color => backgroundColor`
- 这个方法改的是内联样式。
- 如果在样式中写了！important ，用js就不能覆盖这个啦。所以尽量不要加！important。

2. 读取元素样式
    1. 读取内联样式 `元素.style.样式名`
    2. 读取当前**显示**的样式`元素.currentStyle.样式名` *只有ie支持*
        - 没有设置width的时候返回width会是auto； 
    3. `getComputedStyle(要获取样式的元素,传递伪元素（一般写null））` *ie9以上*   返回对象
        - 获取的时候用返回的对象.属性
        - 没有设置width的时候返回width是真实的宽度。
    - 以上两种方法读取的样式是只读的，不能修改。修改只能通过style。
    - 兼容性问题
        - 因为ie8和其他的不一样。所以写一个判断，如果有getComputedStye的话就运行，如果没有的话就用currentStyle来运行。
        ```
        if(window.getComputedStyle){
        //此处的这个window必须要加
            var width = getComputedStyle(obj,null).width;
        }else{
            var width = currentStyle.width;
        };
        ```
        - window要加的原因：如果不加window那么这个getComputedStyle是个函数，如果找不到这个函数那就会报错，他之后的代码都不会执行了，如果加上window那这个个getComputedStyle就是一个属性，如果找不到的话就会返回undefined。
### dom 其他样式相关的属性

以下属性得返回值都不带px
- clientWidth、clientHeight 获取的是可见宽高，不带px，返回（内容区+内边距）。
- offsetWidth、offsetHeight获取整个的宽度，包括内外边距和边框。
- offsetParent 获取离当前元素最近的开启了定位的父元素
- offsetLeft offsetTop 当前元素相对于其定位元素的水平\垂直偏移量
- scrollHeight 获取整个滚动区域的高度。包括被overflow:hidded藏起来的。
- scrollLeft 获取水平滚动条滚动的距离。
- scrollHeight - scrollTop == clientHeight 时说明滚动条到底啦.
eg:

![](https://user-gold-cdn.xitu.io/2019/10/3/16d90ad08f31beec?w=222&h=196&f=png&s=7443)
```
<script>
        var p = document.getElementById("p");
        p.onscroll=function(){
            var c = document.getElementById("c");
            if(p.scrollHeight-p.scrollTop == p.clientHeight){
                
                c.disabled = false;
            };
            c.onclick=function(){
                if(c.checked){
                var z = document.getElementById("z");
                z.disabled = false;
                }
            };
            
        };
        
    </script>
```
### 事件对象
eg：显示鼠标的坐标

![](https://user-gold-cdn.xitu.io/2019/10/3/16d90aeacfaaddcf?w=281&h=89&f=png&s=5879)
```
<script>
        var area = document.getElementById("area");
        var show = document.getElementById("show");
        area.onmousemove=function(e){
            var x = e.clientX;
            var y = e.clientY;
            show.innerHTML = "X:"+x+" Y:"+y;
        };
    </script>
```
- onmousemove 鼠标移动
- 事件对象
    - 当函数响应函数触发时，浏览器每次都会将一个事件对象最为实参传递进响应函数，在事件对象中封装了当前事件的一切信息。
    - clientX 获取鼠标指针的水平坐标 
- IE8中，响应函数被触发时，浏览器不会传递事件对象，他是将对象作为window对象的属性保存的。用`window.e`,
    - 解决办法1：在前边加一个判断，`if(!e){e=window.e;}`
    - 解决办法2: 在前边加上`e = e || winsow.e;`
### div跟随鼠标移动

![](https://user-gold-cdn.xitu.io/2019/10/3/16d90e9f8fa4fcfa?w=537&h=326&f=png&s=5064)
```
<style>
        #box{
            height: 100px;
            width: 100px;
            background-color: red;
            position: absolute;
        }
    </style>
</head>
<body>
    <div id="box"></div>
    <script>
        var box = document.getElementById("box");
        document.onmousemove=function(e){
            var left = e.clientX+"px";
            var top = e.clientY+"px";
            box.style.left = left;
            box.style.top = top;
        };
    </script>
</body>
```
- clientY 相对于可见窗口的高度，而div是相对于页面定位的。如果页面大于可见的窗口（出现滚动条），那就会出现偏差。
- pageY 相对于页面的高度，用这个替换上边的可以去掉偏差。*Ie8不兼容*
- ie8解决办法： 加上scrollTop的长度就行啦，`document.documentElement.scrollTop;`
### 事件的绑定
- `对象.事件 = 函数` 这种方式只能绑定一次，绑定多次的话第二次就会覆盖第一次。
- `addEventListener("click",function(){},false);` 这种方式可以绑定多个。*ie8不支持*
    - 参数1 事件的字符串，不要on
    - 回调函数，当事件触发时该函数会被执行
    - 是否在捕获阶段触发事件，布尔值，一般为false
    - 如果返回this的话 this是绑定的对象。
- *ie8* `attachEvent("onclick",function(){});` 只有两个参数 要on；但是后绑定先执行。返回的this是window
- 定义函数用来为指定元素绑定响应函数
```
<script>
        function bind(obj,eventStr,callback){
            if(obj.addEventListener){
               //正常浏览器
               obj.addEventListener(eventStr,callback,false);
            }else{
               //兼容ie8
               obj.addEventListener("on"+eventStr,function(){
                    callback.call(obj);
                });
            }
        };
    </script>
```
### 拖拽
1. 按下鼠标，开始拖拽 onmousedown
2. 当鼠标移动时，跟随鼠标移动 onmosemove
3. 当鼠标松开的时候，被拖拽元素不动了onmouseup
```
    <script>
        var box = document.getElementById("box");
        box.onmousedown=function(){           
            document.onmousemove= function(e){
                e = e || window.e;
                var left = e.clientX;
                var top = e.clientY;
                box.style.left = left + "px";
                box.style.top = top + "px";
            };
            var song = document.onmouseup = function(){
            //这个用document是因为 如果用了box的话，当鼠标被挡住就不能固定了。（比如第二个盒子在第一个盒子上边）
                document.onmousemove = null;
                document.onmouseup = null;
            };
        }
    </script>
```
#### 改进，以上的拖拽是只能鼠标在box的左上角。

![](https://user-gold-cdn.xitu.io/2019/10/4/16d944cc811ec736?w=382&h=284&f=png&s=23855)
解决方法就是将box向左上挪一些，就是本来的top和left减去鼠标到box边的距离。
- 浏览器有默认的拖拽行为，取消它可以防止拖拽异常。`return false;`*对ie8不起作用*
```
    <script>
        var box = document.getElementById("box");
        box.onmousedown=function(e){    
            // 求出鼠标偏移量
            var x = e.clientX - box.offsetLeft;
            var y = e.clientY - box.offsetTop;
            document.onmousemove= function(e){
                e = e || window.e;
                var left = e.clientX;
                var top = e.clientY;
                box.style.left = left- x + "px";
                box.style.top = top-y + "px";
            };
            var song = document.onmouseup = function(){
                document.onmousemove = null;
                document.onmouseup = null;
            };
        };
    </script>
```
- `setCapture()`这个只有ie8有。作用是强制捕获，如果是点击的话，不管点谁，都是点击它。
### 滚轮事件
eg：随着鼠标滚轮滚动，box变长变短
- onmousewheel *火狐不支持要用`DOMMouseScroll`,用addEventListrner()绑定*
    - e.wheelDelta 可以获取滚轮方向，*火狐中使用e.detail*
- 当滚轮滚动的时候，如果浏览器有自己的滚动条，就会两个都滚动，可以取消默认行为。
```
  <script>
        var box = document.getElementById("box");
        box.onmousewheel = function(e){
            if(e.wheelDelta > 0){
                // box.style.height += 10+"px";
                // 不能这样写，因为css属性是外联的，这样读取不到。
                box.style.height = box.clientHeight + 10 +"px";
            }else{
                box.style.height = box.clientHeight - 10 +"px";
            }
        };
    </script>
```
### 键盘事件
- `onkeydown`  `onkeyup`  (onkeydown按住不松手会连续触发) 绑定给可以获取焦点的对象中，（例如输入框） 或者document。
- `keyCode` 获取按键编码
- `altKey` `ctrlKey` `shiftKey` 判断是否被按下
### Bom浏览器对象模型，操作浏览器
- Window 代表的是浏览器的窗口，也是网页中的全局对象
- Navigator 代表的是当前浏览器的信息，识别当前浏览器是什么
    - 由于历史原因，大部分属性已经识别不了了。
    - 一般使用userAgent来判断浏览器信息 但是ie11挺缺德，删除了ie相关的内容
    - 通过ie特有的属性来判断是否是ie
- Location 地址栏 获取浏览器地址栏信息和操作跳转信息
    -  打印地址
    -  修改 然后自动跳转
    -  assign() 和直接修改location一样
    - reload() 重新加载
        - 参数若为true 则强制清空缓存
- HIstory 历史记录  
    - 只能操作向前或向后，不能访问具体的历史记录，只在当成有效
    - history.back() 回退上一个页面
    - forward()
    
    - go() 1表示向前一个页面 2表示向前2个页面 -1 -2
- Screen 屏幕 显示器相关信息 *移动端用的多*
- 后边四个都是作为window的属性保存的，因为window是全局的，可以通过winsow.navigator来使用，也可以直接使用。
#### 定时器
- setInterval(); 每隔一段时间执行一次
    - 参数1 function（）{}
    - 参数2 每隔多长时间 单位毫秒
    - 返回一个number 作为定时器的位移标识
- clearInterval(timer); 关闭定时器 
- 自动切换图片的练习
```
 <script>
        var imgArrs = [];
        for(var i=1;i<= 5;i++){
            imgArrs.push("./img/"+i+".jpg");

        };        
        console.log(imgArrs);
        var index = 0;
        setInterval(function(){
            var img = document.getElementById("img");
            img.src = imgArrs[index];
            index++;
            if(index>=5){
                index=0;
            }
        },1000);
    </script>
```
#### 延时调用
- setTimeout 只会执行一次。
- clearTimeout 关闭延时调用。
#### 定时器应用

### 轮播图
- 界面框架

![](https://user-gold-cdn.xitu.io/2019/10/4/16d96e8f115bebcf?w=572&h=390&f=png&s=262031)
以下是代码，为了界面排版，放的压缩版本的。可以到这个网站解压一下。
[代码压缩](http://tool.chinaz.com/tools/jsformat.aspx)
```
<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport"content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible"content="ie=edge"><title>Document</title><style>*{margin:0;padding:0}#outer{width:520px;height:333px;margin:50px auto;background-color:aqua;padding:10px 0;position:relative;overflow:hidden}#imgList{list-style:none;position:absolute;left:0}#imgList li{float:left;margin:0 10px}#nav{position:absolute;bottom:15px}#nav a{float:left;width:15px;height:15px;background-color:red;margin:0 5px;opacity:.5;filter:alpha(opacity=50)}#nav a:hover{background-color:black}</style><script>window.onload=function(){var imgList=document.getElementById("imgList");var imgArr=document.getElementsByTagName("img");imgList.style.width=520*imgArr.length+"px";var nav=document.getElementById("nav");var outer=document.getElementById("outer");nav.style.left=(outer.offsetWidth-nav.offsetWidth)/2+"px";var index=0;var allA=document.getElementsByTagName("a");allA[index].style.backgroundColor="black"};</script></head><body><div id="outer"><ul id="imgList"><li><img src="./img/1.jpg"alt=""></li><li><img src="./img/2.jpg"alt=""></li><li><img src="./img/3.jpg"alt=""></li><li><img src="./img/4.jpg"alt=""></li><li><img src="./img/5.jpg"alt=""></li></ul><!--导航--><div id="nav"><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a></div></div></body></html>
```
- 功能实现
```
  //绑定单击响应函数
        for(var i = 0;i<allA.length;i++){
            allA[i].num=i;
            allA[i].onclick = function(){
                index = this.num;
                imgList.style.left = index*-520+"px";
                //修改正在选中的方块的颜色
                setA();
            };
           
        };

        // 创建一个方法设置选中的a
        function setA(){
          for(var i=0;i<allA.length;i++){
            allA[i].style.backgroundColor="";
            //内联样式调成空串，防止覆盖hover。
          }
          allA[index].style.backgroundColor = "black";
        };
```
- 自动切换
自动切换设置好以后，他到最后一张的时候，再转下一张的时候回回退到第一张，效果不好，解决办法：
1. 再最后加一张和第一张一样的图片
2. 偷梁换柱，把最后一张一下换成第一张，肉眼无法察觉。
此时两个动画同时执行，很难受。

完成代码：
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <style>
    * {
      margin: 0;
      padding: 0
    }

    #outer {
      width: 520px;
      height: 333px;
      margin: 50px auto;
      background-color: aqua;
      padding: 10px 0;
      position: relative;
      overflow: hidden
    }

    #imgList {
      list-style: none;
      position: absolute;
      left: 0
    }

    #imgList li {
      float: left;
      margin: 0 10px
    }

    #nav {
      position: absolute;
      bottom: 15px
    }

    #nav a {
      float: left;
      width: 15px;
      height: 15px;
      background-color: red;
      margin: 0 5px;
      opacity: .5;
      filter: alpha(opacity=50)
    }

    #nav a:hover {
      background-color: black
    }
  </style>
  <!-- 引入tools -->
  <script type="text/javascript" src="js/tools.js"></script>
  <script>
    window.onload = function () {
      var imgList = document.getElementById("imgList");
      var imgArr = document.getElementsByTagName("img");
      imgList.style.width = 520 * imgArr.length + "px";
      var nav = document.getElementById("nav");
      var outer = document.getElementById("outer");
      nav.style.left = (outer.offsetWidth - nav.offsetWidth) / 2 + "px";
      var index = 0;
      var allA = document.getElementsByTagName("a");
      allA[index].style.backgroundColor = "black"


      var timer;
      //绑定单击响应函数
      for (var i = 0; i < allA.length; i++) {
        allA[i].num = i;
        allA[i].onclick = function () {
           clearInterval(timer);   
          index = this.num;
          // imgList.style.left = index*-520+"px";
          //修改正在选中的方块的颜色
          setA();
          // 使用move函数
          move(imgList, "left", -520 * index, 20, function () {
              // 动画执行完毕，开启自动播放
              autoChange();
          });
        };

      }
      autoChange(); //开启自动切换

      // 创建一个方法设置选中的a
      // 将选中的设置为红色，其他的设置为黑色。
      function setA() {
        //判断当前索引是否是最后一张
        if(index>=imgArr.length-1){
          index = 0 ;
          // 此时显示的是最后一张图，和第一张长得一样，
          // 通过css把最后一张切换成第一张。偷梁换柱
          imgList.style.left = 0;
        }
        for (var i = 0; i < allA.length; i++) {
          allA[i].style.backgroundColor = "";
          //内联样式调成空串，防止覆盖hover。
        }
        allA[index].style.backgroundColor = "black";
      };

      function autoChange(){
        //开启定时器，定时切换
        timer =  setInterval(function(){
          //索引自增
          index++;
          
          index %=imgArr.length;

          move(imgList, "left", -520 * index ,20, function() {
            // 修改导航按钮
            setA();
          });
        }, 3000);
      };

    };

    // 自动切换图片 创建函数调整自动切换
  </script>
</head>

<body>
  <div id="outer">
    <ul id="imgList">
      <li>
        <img src="./img/1.jpg" alt=""></li>
      <li>
        <img src="./img/2.jpg" alt=""></li>
      <li>
        <img src="./img/3.jpg" alt=""></li>
      <li>
        <img src="./img/4.jpg" alt=""></li>
      <li>
        <img src="./img/5.jpg" alt=""></li>
        <li>
          <img src="./img/1.jpg" alt=""></li>
        
    </ul>
    <!--导航-->
    <div id="nav">
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
    </div>
  </div>
</body>

</html>
```

### js类的操作
- 可以通过修改元素的class来改样式
`box.className = "新class"`
- 既想要旧的css也想要新的css
`box.className += " 新class";//注意空格`
- 定义一个函数，想其中指定元素添加class属性值。
```
function addClass(obj,cn){
    //检查obj中是否有cn
    if(!hasClass(obj,cn)){
        obj.className+=""+cn;
        //加空格是因为 添加class属性值的时候 两个属性之间有空格，两个属性才能都显示。
    }
};
```
- hasClass判断一个元素中是否含有指定的class属性值，有就返回true，没有返回false
```
function hasClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    //正则，\b是判断是不是一个单词。
    return reg.test(obj.className);
};
```
- 删除一个元素中的指定的class属性
```
function removeClass(obj , cn){
				//创建一个正则表达式
				var reg = new RegExp("\\b"+cn+"\\b");
				
				//删除class
				obj.className = obj.className.replace(reg , "");
				
			}
```
- toggleClass 可以用来切换一个类如果元素中具有该类，则删除如果元素中没有该类，则添加
```
function toggleClass(obj , cn){
				
				//判断obj中是否含有cn
				if(hasClass(obj , cn)){
					//有，则删除
					removeClass(obj , cn);
				}else{
					//没有，则添加
					addClass(obj , cn);
				}
				
			}
```
### JSON
- JSON 是一个特殊格式的字符串，这个字符串可以被任意的语言所识别，并且可以转换为任意语言中的对象，JSON在开发中主要用来数据的交互
- json分类
    - 对象{}
    - 数组[]
- JSON允许的值
    1. 字符串
    2. 数值
    3. 布尔值
    4. null
    5. 对象
    6. 数组
- json --> js对象
    - JSON.parse()
        - 可以将以JSON字符串转换为js对象
        - 它需要一个JSON字符串作为参数，会将该字符串转换为JS对象并返回
- JS对象 ---> JSON
    - JSON.stringify()
    	- 可以将一个JS对象转换为JSON字符串
    	- 需要一个js对象作为参数，会返回一个JSON字符串
- eval()
	- 这个函数可以用来执行一段字符串形式的JS代码，并将执行结果返回
	- 如果使用eval()执行的字符串中含有{},它会将{}当成是代码块
		如果不希望将其当成代码块解析，则需要在字符串前后各加一个()
	- eval()这个函数的功能很强大，可以直接执行一个字符串中的js代码，
		但是在开发中尽量不要使用，首先它的执行性能比较差，然后它还具有安全隐患