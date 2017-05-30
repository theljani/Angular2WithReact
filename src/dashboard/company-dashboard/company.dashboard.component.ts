import {Component, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: '_templates/company.dashboard.html',
    styleUrls: []
})
export class CompanyDashboardComponent implements OnInit {
    companyName: string;

    constructor(private _route: ActivatedRoute){

    }

    ngOnInit(): void {
        this.companyName = this._route.snapshot.data['companyData'].companyName;
    }
}