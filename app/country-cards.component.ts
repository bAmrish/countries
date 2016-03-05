import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {CountryService} from './country.service';
import {Country} from './country';

@Component({
    selector: 'country-cards',
    templateUrl: 'app/country-cards.component.html',
    styleUrls: ['app/country-cards.component.css'],
    inputs: ['countries'],
    directives: [ROUTER_DIRECTIVES]
})
export class CountryCardsComponent {
    
    public countries: Country[] = [];

    constructor(
        private _countryService: CountryService
    ){}
}