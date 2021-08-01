var Product = /** @class */ (function () {
    function Product(_name, _scale) {
        this.name = _name;
        this.scale = _scale;
    }
    Product.prototype.getScale = function () {
        return this.scale;
    };
    Product.prototype.getName = function () {
        return this.name;
    };
    return Product;
}());
var Scales = /** @class */ (function () {
    function Scales(se_) {
        this.se = se_;
    }
    Scales.prototype.add = function (_product) {
        this.se.addItem(_product);
    };
    Scales.prototype.getSumScale = function () {
        var _sumScale = 0;
        for (var i = 0; i < this.se.getCount(); i++) {
            _sumScale = _sumScale + this.se.getItem(i).getScale();
        }
        return _sumScale;
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.se.getCount(); i++) {
            var name_1 = this.se.getItem(i).getName();
            nameList.push(name_1);
        }
        return nameList;
    };
    return Scales;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (_product) {
        this.products.push(_product);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        var item = this.products[index];
        return item;
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.products.length;
    };
    return ScalesStorageEngineArray;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.key = "Prod";
        localStorage.Prod = [];
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (_product) {
        var a;
        if (localStorage.Prod) {
            a = JSON.parse(localStorage.Prod);
        }
        else {
            a = [];
        }
        a.push(_product);
        localStorage.Prod = JSON.stringify(a);
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var a = JSON.parse(localStorage.Prod);
        return new Product(a[index].name, a[index].scale);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var a = JSON.parse(localStorage.Prod);
        return a.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var scalesStorageEngine1 = new ScalesStorageEngineArray();
console.log("ScalesStorageEngineArray1", scalesStorageEngine1);
var Scales1 = new Scales(scalesStorageEngine1);
console.log("Scales1", Scales1);
var product1 = new Product("Apple", 223);
var product2 = new Product("Apple2", 233);
Scales1.add(product1);
Scales1.add(product2);
console.log("Scales1.getSumScale()", Scales1.getSumScale());
console.log("Scales1.getNameList()", Scales1.getNameList());
var scalesStorageEngine2 = new ScalesStorageEngineLocalStorage();
var Scales2 = new Scales(scalesStorageEngine2);
console.log("Scales2", Scales2);
var product3 = new Product("Apple22", 223);
var product4 = new Product("Apple222", 233);
Scales2.add(product3);
Scales2.add(product4);
console.log("Scales2.getSumScale()", Scales2.getSumScale());
console.log("Scales2.getNameList()", Scales2.getNameList());
//# sourceMappingURL=App.js.map