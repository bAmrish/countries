import {Component, OnInit} from 'angular2/core';
import {Country} from './country';
import {CountryService} from './country.service'
import {MapLinkPipe} from './map-link.pipe';

@Component ({
    selector: 'my-app',
    templateUrl: 'app/countries.component.html',
    providers: [CountryService],
    pipes: [MapLinkPipe]
})
export class Countries {
    constructor(
        private _countryService: CountryService
    ){};

    public countries: Country[] = this._countryService.getCountries();

}