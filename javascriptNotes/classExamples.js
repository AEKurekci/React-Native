class Car{
    constructor(brand, price){
        this.carname = brand;
        this.price = price;
    }

    present(){
        return "I have " + this.carname;
    }

    get carnameOf(){
        return this.carname;
    }

    get priceOf(){
        return this.price;
    }

    set cName(x){
        this.carname = x;
    }

    set cPrice(pr){
        this.price = pr;
    }
}

class Model extends Car{
    constructor(brand, price, mod){
        super(brand,price);
        this.model = mod;
    }

    show(){
        return this.present() + ", it is " + this.model + " and price is " + this.price;
    }
}