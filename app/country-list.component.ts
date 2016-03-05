import {Component, OnInit} from 'angular2/core';
import {Country} from './country';
import {CountryService} from './country.service'
import {MapLinkPipe} from './map-link.pipe';

@Component ({
    selector: 'country-list',
    templateUrl: 'app/country-list.component.html',
    providers: [CountryService],
    pipes: [MapLinkPipe]
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