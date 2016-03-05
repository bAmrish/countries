import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

import {CountryService} from './country.service';
import {CountryListComponent} from './country-list.component';
import {CountryDetailsComponent} from './country-details.component';
import {CountryCardsComponent} from './country-cards.component';
import {CountryDashboardComponent} from './country-dashboard.component';

@RouteConfig([
    {
        name: 'CountryDashboard',
        path: '/',
        component: CountryDashboardComponent,
        useAsDefault: true
    },
    {
        name: 'CountryList',
        path: '/list',
        component: CountryListComponent,
    },
    {
        name: 'CountryCards',
        path: '/cards',
        component: CountryCardsComponent
    },
    {
        name: 'CountryDetails',
        path: '/details/:id',
        component: CountryDetailsComponent
    }
])
@Component ({
    selector: 'all-countries',
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="/" id="logo">
                        <img src="../images/app_logo_map.png" alt="" />
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><a href="#">Countries Dashboard</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [`
        #logo img {
            width: 40px;
            height: 40px;
            margin-top: -10px;
        }
    `],
    directives: [ROUTER_DIRECTIVES],
    providers: [CountryService, ROUTER_PROVIDERS]
})
export class CountriesComponent {

}