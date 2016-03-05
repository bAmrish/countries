import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {CountryService} from './country.service'
import {CountryListComponent} from './country-list.component'

@RouteConfig([
    {
        name: 'HeroList',
        path: '/',
        component: CountryListComponent,
        useAsDefault: true   
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