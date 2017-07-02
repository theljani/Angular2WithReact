import {Component, OnInit, ViewChild} from '@angular/core'
import {ActivatedRoute} from '@angular/router';
import {dashboardStore} from './_store/store';
import {SpinnerComponent} from '../common/spinner/spinner.component';

@Component({
    moduleId: module.id,
    templateUrl: '_templates/dashboard.html',
    styleUrls: ['_styles/dashboard.css']
})
export class DashboardComponent implements OnInit {
    @ViewChild(SpinnerComponent) spinnerComponent: SpinnerComponent;
    accountData: any;
    sideBarToggled: boolean;
    companyName: string = 'H-DAYS';

    constructor(private _route: ActivatedRoute){}

    ngOnInit(): void {
       this.accountData = this._route.snapshot.data['companyData'];

       dashboardStore.subscribe(() => {
        var state = dashboardStore.getState();

        if(state.ok) {
            this.accountData = state.companyDetails;
            console.log(JSON.stringify(this.accountData));
        } else {
            alert('Something wrong happened! We could not refresh company details.');
        }
       });
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