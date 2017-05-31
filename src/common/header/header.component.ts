import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'hd-header',
    moduleId: module.id,
    templateUrl: '_templates/header.component.html',
    styleUrls: ['_styles/header.component.css']
})
export class HeaderComponent implements OnInit {
    companyName: string = 'h-days';
    @Input() headerItems: any[];

    constructor() {}

    ngOnInit(): void {

    }
}