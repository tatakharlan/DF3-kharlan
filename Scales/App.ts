
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

    products: Array<Product>;          

    constructor() {
        this.products =[];   
    }

    add(_product:Product):void {
        this.products.push(_product);
    }

    getSumScale():number {        
        let _sumScale = 0;   
       
        this.products.forEach(function(prod){
            let scale = Object.getOwnPropertyDescriptor(prod,"scale").value;
            _sumScale = _sumScale + scale;            
        })
        return _sumScale;
    }
    getNameList():Array<string> { 
        let nameList:Array<string> = [];  

        this.products.forEach(function(prod){
            let name = Object.getOwnPropertyDescriptor(prod,"name").value;
            nameList.push(name);            
        })
        return nameList;
    }
}
let apple1:Apple=new Apple("Apple1",125);
let apple2:Apple=new Apple("Apple1",135);
let tomato1:Tomato=new Tomato("tomato1",235);

let apple21:Apple=new Apple("Apple2",555);
let tomato21:Tomato=new Tomato("tomato2",225);

let scales:Scales=new Scales();
scales.add(apple1);
scales.add(apple2);
scales.add(apple21);
scales.add(tomato21);
scales.add(tomato1);

let sumscale = scales.getSumScale();
let numList = scales.getNameList();

console.log( "sumscale" , sumscale);
console.log( "numList" , numList);



console.log( "apple21" , apple21);
console.log( "tomato21" , tomato21);