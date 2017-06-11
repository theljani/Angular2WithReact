import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: '_templates/company.dashboard.html',
    styleUrls: ['_styles/company.dashboard.css']
})
export class CompanyDashboardComponent {
    companyName: string = "H-DAYS";
    sideBarToggled: boolean;

    constructor(private _route: ActivatedRoute){}

    // ngOInit(): void {
    //    // this.companyName = this._route.snapshot.data['companyData'].companyName;
    // }

    toggleSideBar(): void {
        this.sideBarToggled = !this.sideBarToggled;
    }

    getSidebarWidth(): number {
        if(this.sideBarToggled) 
            return 220;
        
        return 60;
    }
}