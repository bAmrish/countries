import {Component} from 'angular2/core';

import {CountryService} from './country.service';
import {Country} from './country';

@Component({
    selector: 'country-cards',
    templateUrl: 'app/country-cards.component.html',
    styleUrls: ['app/country-cards.component.css'],
    inputs: ['countries']
})
export class CountryCardsComponent {
    
    public countries: Country[] = [];

    constructor(
        private _countryService: CountryService
    ){}
}