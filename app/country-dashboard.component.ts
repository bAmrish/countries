import {Component, OnInit} from 'angular2/core';
import {Country} from './country';
import {CountryService} from './country.service'
import {MapLinkPipe} from './map-link.pipe';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {CountryCardsComponent} from './country-cards.component';
import {CountryListComponent} from './country-list.component';

@Component ({
    selector: 'country-dashboard',
    templateUrl: 'app/country-dashboard.component.html',
    pipes: [MapLinkPipe],
    directives: [CountryCardsComponent, CountryListComponent, ROUTER_DIRECTIVES]
})
export class CountryDashboardComponent implements OnInit {

    public searchTerm: string;
    public countries: Country[] = [];
    public view: string = "list";

    constructor(
        private _countryService: CountryService
    ){};

    ngOnInit() {
        this.countries = this._countryService.getCountries();
    }

    onSearch() {
        this.countries = this._countryService.searchCountries(this.searchTerm);
    }

    
    setView(value: string){
        this.view = value;
    }
}