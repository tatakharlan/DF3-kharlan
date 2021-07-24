
class Product {

    name:string;
    scale:number;    

    constructor(_name:string,_scale:number) {        
        this.name = _name;
        this.scale= _scale; 
    }

    getScale(_scale:number):void {
        this.scale=_scale;
    }

    getName(_name:string):void {
        this.name=_name;
    }
    
}
class Apple extends Product {
  
}
class Tomato extends Product {
 
}
class Scales {

    products: Array<object>;      
    

    constructor(_products:Array<object>) {              
        this.products = _products;
        
    }

    add(_product:object):void {
        this.products.push(_product);
    }

    getSumScale(_products: Array<object>):number {        
        let _sumScale = 0;   
       
        this.products.forEach(function(prod){
            let scale = Object.getOwnPropertyDescriptor(prod,Object.getOwnPropertyNames(prod)[1]).value;
            _sumScale = _sumScale + scale;            
        })
        return _sumScale;
    }
    getNameList(_products: Array<object>):Array<string> { 
        let nameList:Array<string> = [];  

        this.products.forEach(function(prod){
            let name = Object.getOwnPropertyDescriptor(prod,Object.getOwnPropertyNames(prod)[0]).value;
            nameList.push(name);            
        })
        return nameList;
    }
}
let apple1:Product=new Product("Apple1",125);
let apple2:Product=new Product("Apple2",225);
let tomato1:Product=new Product("tomato1",125);
let tomato2:Product=new Product("tomato2",225);

console.log( apple1 );
console.log( apple2 );
console.log( tomato1 );
console.log( tomato2 );

let product_arr = [];

product_arr.push(apple1);
product_arr.push(apple2);
product_arr.push(tomato1);
product_arr.push(tomato2);

let scales:Scales=new Scales(product_arr);

scales.add(apple1);
scales.add(apple2);
let sumscale = scales.getSumScale(product_arr);
let numList = scales.getNameList(product_arr);
console.log("product_arr" , product_arr);
console.log( "sumscale" , sumscale);
console.log( "numList" , numList);

let apple21:Apple=new Apple("Apple2",555);
let tomato21:Tomato=new Tomato("tomato2",225);

console.log( "apple21" , apple21);
console.log( "tomato21" , tomato21);