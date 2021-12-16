import { Component, OnInit } from '@angular/core';
import { list_products } from 'src/app/data';
import * as _ from 'underscore';


@Component({
  selector: 'app-page-accueil',
  templateUrl: './page-accueil.component.html',
  styleUrls: ['./page-accueil.component.scss']
})
export class PageAccueilComponent implements OnInit {
listdata = list_products  
public listCategoriesFilter!: string[]


// evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

  constructor() {

    this.listCategoriesFilter = []
   }

  ngOnInit(): void {
    console.log(this.listdata)

    /**
     * technique avec underscore.js pour récuperer les categories uniques
     */
    const lisAllCategories = this.listdata.map(product => product.product_breadcrumb_label)

    const listUniqCategories = _.uniq(lisAllCategories)
    console.log(listUniqCategories)
    
    /**
     * technique native js pour récuperer les categories uniques
     */

const listUniqJSCategories = [...new Set(lisAllCategories)];
console.log(listUniqJSCategories)

this.listCategoriesFilter = listUniqCategories

    
  }
}





