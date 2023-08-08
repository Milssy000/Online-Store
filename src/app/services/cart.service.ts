import { Injectable } from '@angular/core';
import { Product } from '../products/product.interface';

@Injectable()
export class CartService {
    
    private products:Product[] = [];
    
    constructor() {
        //comment
    }
    
    addToCart(product:Product) {
        this.products.push(product);
    }
    
    getProducts() {
        return this.products;
    }
    
    get NbProducts() {
        return this.products.length;
    }    
}
