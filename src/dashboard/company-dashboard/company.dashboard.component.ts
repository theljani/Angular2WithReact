import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: '_templates/company.dashboard.html',
    styleUrls: ['_styles/company.dashboard.css']
})
export class CompanyDashboardComponent implements OnInit {

    accountData: any;
    sideBarToggled: boolean;

    constructor(private _route: ActivatedRoute){}

    ngOnInit(): void {
       this.accountData = this._route.snapshot.data['companyData'];
       alert(JSON.stringify(this.accountData));
    }

    toggleSideBar(): void {
        this.sideBarToggled = !this.sideBarToggled;
    }

    getSidebarWidth(): number {
        if(this.sideBarToggled) 
            return 220;
        
        return 60;
    }
}