import {Component, Input, OnInit} from '@angular/core';
import {headerStore} from './_store/store'; 
import {headerActions} from '../header/_store/actions';
import {headerState} from '../header/_store/headerState';

@Component({
    selector: 'hd-header',
    moduleId: module.id,
    templateUrl: '_templates/header.component.html',
    styleUrls: ['_styles/header.component.css']
})
export class HeaderComponent implements OnInit {
    companyName: string = 'h-days';
    headerItems: any[];

    constructor(private headerActionsDispatcher: headerActions) {}

    ngOnInit(): void {
        headerStore.subscribe(() => {
            var state = headerStore.getState();
            this.headerItems= state.headerItems;
        });

        if(!this.headerItems) {
            var emptyState: headerState = {
                headerItems: []
            };
            
            this.headerActionsDispatcher.headerChanged(emptyState, '');
        }
    }
    
    setHeaderItems(items: any[]) {
        this.headerItems = items;
    }
}