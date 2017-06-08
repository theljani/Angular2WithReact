import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: '_templates/company.dashboard.html',
    styleUrls: ['_styles/company.dashboard.css']
})
export class CompanyDashboardComponent implements OnInit {
    companyName: string;
    sideBarToggled: boolean;

    constructor(private _route: ActivatedRoute){

    }

    ngOnInit(): void {
        this.companyName = this._route.snapshot.data['companyData'].companyName;
    }

    toggleSideBar(): void {
        this.sideBarToggled = !this.sideBarToggled;
    }

    getSidebarWidth(): number {
        if(this.sideBarToggled) 
            return 300;
        
        return 40;
    }
}