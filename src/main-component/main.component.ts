import {Component, ViewChild, OnInit} from '@angular/core';
import {IRouteEntity} from './_entities/routeEntity';

import {HeaderComponent} from '../common/header/header.component';

@Component({
    selector: 'pt-main',
    moduleId:module.id,
    templateUrl: '_templates/main.component.html',
    styleUrls: ['_styles/main.component.css']
})
export class MainComponent implements OnInit {
    @ViewChild(HeaderComponent) headerComponent: HeaderComponent;    
    filter: string = '';
    products: any[] = [
        {
            "name": "product 1",
        },
        {
            "name":"product 2"
        }
    ];

    headerItems: any[] = [
        {
            "label": "Sign In",
            "route": "/account/signin"
        },
        {
            "label": "Register",
            "route": "/account/register"
        }
    ]

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