import {Component, OnInit} from '@angular/core';
import {IRouteEntity} from './_entities/routeEntity';

@Component({
    selector: 'pt-main',
    moduleId:module.id,
    templateUrl: '_templates/main.component.html',
    styleUrls: ['_styles/main.component.css']
})
export class MainComponent implements OnInit {
    companyName: string = 'h-days';
    filter: string = '';
    products: any[] = [
        {
            "name": "product 1",
        },
        {
            "name":"product 2"
        }
    ];

    routes: IRouteEntity[] = [
        {
            "label": 'Se connecter',
            "link": ''
        },
        {
            "label": 'S\'inscrire',
            "link": ''
        }
    ];

    ngOnInit(): void {
        console.log('Application is started!')
    }
}