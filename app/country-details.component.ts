import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Country} from './country';
import {CountryService} from './country.service';

@Component({
    selector: 'country-details',
    templateUrl: 'app/country-details.component.html',
    styleUrls: ['app/country-details.component.css']
})
export class CountryDetailsComponent implements OnInit{
    public country: Country;

    constructor(
        private _countryService: CountryService,
        private _routeParams: RouteParams
    ){}

    ngOnInit() {
        let id = this._routeParams.get('id');
        this.country = this._countryService.getCountry(id);
        console.log(this.country);
    }

    goBack(){
        window.history.back();
    }
}