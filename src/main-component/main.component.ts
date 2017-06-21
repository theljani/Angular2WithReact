import {Component, ViewChild, OnInit} from '@angular/core';
import {IRouteEntity} from './_entities/routeEntity';
import {HeaderComponent} from '../common/header/header.component';
import {headerActions} from '../common/header/_store/actions';
import {headerState} from '../common/header/_store/headerState';

@Component({
    selector: 'pt-main',
    moduleId:module.id,
    templateUrl: '_templates/main.component.html',
    styleUrls: ['_styles/main.component.css']
})
export class MainComponent implements OnInit {
    @ViewChild(HeaderComponent) headerComponent: HeaderComponent;    
    filter: string = '';
closeResult: string;
    constructor(private headerActionsDispatcher: headerActions) {}
//   open(content:any) {
//     this.modalService.open(content).result.then((result) => {
//       this.closeResult = `Closed with: ${result}`;
//     }, (reason) => {
//       this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
//     });
//   }

//   private getDismissReason(reason: any): string {
//     if (reason === ModalDismissReasons.ESC) {
//       return 'by pressing ESC';
//     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
//       return 'by clicking on a backdrop';
//     } else {
//       return  `with: ${reason}`;
//     }
//   }
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