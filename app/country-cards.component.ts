import {Component, OnInit} from 'angular2/core';

import {CountryService} from './country.service';
import {Country} from './country';

@Component({
    selector: 'country-cards',
    templateUrl: 'app/country-cards.component.html',
    styleUrls: ['app/country-cards.component.css']
})
export class CountryCardsComponent implements OnInit {
    
    public countries: Country[] = [];

    constructor(
        private _countryService: CountryService
    ){}

    ngOnInit(){
        this.countries = this._countryService.getCountries();
    }
}