
export class Product {

    #product;
    #name;
    #unitPrice;
    #quantity;
    #total;

    constructor(product, name, unitPrice){

        this.#product = product;
        this.#name = name;
        this.#unitPrice = unitPrice;
        
        this.#total = (this.#unitPrice * this.#quantity);
    }

    get product(){
        return this.#product;
    }

    get name(){
        return this.#name;
    }
    get unitPrice(){
        return this.#unitPrice;
    }

    // get quantity(){
    //     return this.#quantity;
    // }

    get total(){
        return this.#total;
    }

    // set quantity(quantity){
    //     return this.#quantity = quantity;
    // }

    set total(total){
        return this.#total = total;
    }

}