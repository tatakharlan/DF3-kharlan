
interface IStorageEngine {

    addItem(item:Product):void; 
    getItem(index:number):Product;
    getCount():number

}
class Product {

    name:string;
    scale:number;    

    constructor(_name:string,_scale:number) {        
        this.name = _name;
        this.scale= _scale; 
    }

    public getScale():number {
        return this.scale;
    }

    public getName():string {
        return this.name;
    }
    
}

class Scales<StorageEngine extends IStorageEngine>{

    se:IStorageEngine;

    constructor() {
       this.se = scalesStorageEngine;
    }

    add(_product:Product):void {
        this.se.addItem(_product);
    }

    getSumScale():number {             
        let _sumScale = 0;  
        for(let i=0; i< this.se.getCount(); i++) {
            _sumScale = _sumScale + this.se.getItem(i).getScale(); 
        }        
        return _sumScale;
    }
    getNameList():Array<string> { 
        let nameList:Array<string> = [];  
        for(let i=0; i< this.se.getCount(); i++) {
            let name:string = this.se.getItem(i).getName(); 
            nameList.push(name);
        }   
        return nameList;
    }
}

class ScalesStorageEngineArray implements IStorageEngine {
    products: Array<Product>;
    constructor() {
        this.products =[];   
    }
    addItem(_product:Product):void {
        this.products.push(_product);
    }
    getItem(index:number):Product {
        let item = this.products[index];
        return item
    }      
    getCount():number {
        return this.products.length;
    }
} 

class ScalesStorageEngineLocalStorage implements IStorageEngine {
    key:string = "Prod";
    products: Array<Product>;
    constructor() {
        this.products =[];   
    }
    addItem(_product:Product):void {
        let a:any[];
        if(localStorage.Prod) {
            a = JSON.parse(localStorage.Prod);
        }else {
            a = [];
        }
        a.push(_product) 
        localStorage.Prod= JSON.stringify(a);
    }
    getItem(index:number):Product {
        let a:any[] = JSON.parse(localStorage.Prod);
        return new Product(a[index].name, a[index].scale);
    }      
    getCount():number {
        let a:Product[] = JSON.parse(localStorage.Prod);
        return a.length;
    }
    

} 
let scalesStorageEngine = new ScalesStorageEngineArray();

console.log("ScalesStorageEngineArray1", scalesStorageEngine);
let Scales1 = new Scales<ScalesStorageEngineArray>();
console.log("Scales1", Scales1);

let product1 = new Product("Apple", 223);
let product2 = new Product("Apple2", 233);

Scales1.add(product1);
Scales1.add(product2);

Scales1.getSumScale();
console.log("Scales1.getSumScale()", Scales1.getSumScale());
console.log("Scales1.getNameList()", Scales1.getNameList());

scalesStorageEngine = new ScalesStorageEngineLocalStorage();

let Scales2 = new Scales<ScalesStorageEngineLocalStorage>();
console.log("Scales2", Scales2);

let product3= new Product("Apple22", 223);
let product4 = new Product("Apple222", 233);

Scales2.add(product3);
Scales2.add(product4);

console.log("Scales2.getSumScale()", Scales2.getSumScale());
console.log("Scales2.getNameList()", Scales2.getNameList());