import {Component} from 'angular2/core';
import {Country} from './country';
import {CountryService} from './country.service'
import {MapLinkPipe} from './map-link.pipe';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component ({
    selector: 'country-list',
    templateUrl: 'app/country-list.component.html',
    pipes: [MapLinkPipe],
    inputs: ['countries'],
    directives: [ROUTER_DIRECTIVES]
})
export class CountryListComponent {

    public searchTerm: string;
    public countries: Country[] = [];

    constructor(
        private _countryService: CountryService
    ){};
}