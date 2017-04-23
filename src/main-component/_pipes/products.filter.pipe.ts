import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

    transform(list: any[], filterBy: string) {
        filterBy = filterBy? filterBy.toLocaleLowerCase() : null;

        return filterBy ? list.filter((product: any) => product.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : list; 
    };
}