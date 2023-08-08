import { Injectable }             from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable }             from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../products/product.interface';

@Injectable()
export class ProductDetailResolveService implements Resolve<Product> {

  constructor(
    private ps: ProductService
    ) {
    //comment
    }

  resolve(route: ActivatedRouteSnapshot): Observable<any> | any {
    let id = +route.params['id'];
    return this.ps.getProduct(id)
  }

}
