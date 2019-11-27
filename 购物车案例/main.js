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
            // 1.正常的
            // for (let i = 0; i < this.books.length; i++) {
            //     totalPrice += this.books[i].price * this.books[i].count                
            // }

            // 2. 用in
            // for(let i in this.books){
            //     totalPrice += this.books[i].price * this.books[i].count             
            // }

            // 3. 用of
            for(let i of this.books){
                totalPrice += i.price * i.count             
          
            }
            return totalPrice
        }
    }

})