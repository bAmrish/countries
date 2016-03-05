import {Component, OnInit} from 'angular2/core';
import {Country} from './country';
import {CountryService} from './country.service'
import {MapLinkPipe} from './map-link.pipe';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component ({
    selector: 'country-list',
    templateUrl: 'app/country-list.component.html',
    pipes: [MapLinkPipe],
    directives: [ROUTER_DIRECTIVES]
})
export class CountryListComponent implements OnInit {

    public searchTerm: string;
    public countries: Country[] = [];

    constructor(
        private _countryService: CountryService
    ){};

    ngOnInit() {
        this.countries = this._countryService.getCountries();
    }

    onSearch() {
        this.countries = this._countryService.searchCountries(this.searchTerm);
    }
}