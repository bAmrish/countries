import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {CountryService} from './country.service';
import {CountryListComponent} from './country-list.component';
import {CountryDetailsComponent} from './country-details.component';

@RouteConfig([
    {
        name: 'CountryList',
        path: '/',
        component: CountryListComponent,
        useAsDefault: true   
    },
    {
        name: 'CountryDetail',
        path: '/details/:id',
        component: CountryDetailsComponent
    }
])
@Component ({
    selector: 'all-countries',
    template: `
        <h2>All Countries!</h2>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [CountryService, ROUTER_PROVIDERS]
})
export class CountriesComponent {

}