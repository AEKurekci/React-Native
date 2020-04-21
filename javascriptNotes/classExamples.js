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

class translateTrEn{
    constructor(tr,en,cumle){
        this.tr= tr;
        this.en = en;
        this.cumleler = cumle;
    }
    anlamEkle(anlam){
        this.en.push(anlam);
    }
    cumleEkle(cumle){
        this.cumleler.push(cumle)
    }
    get anlam(){
        return this.en;
    }
    get sentence(){
        return this.cumleler;
    }
    get word(){
        return this.tr;
    }
}