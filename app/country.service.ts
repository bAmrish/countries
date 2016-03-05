import {Injectable} from 'angular2/core';
import {COUNTRIES} from './mock-countries';
import {Country} from './country'

@Injectable()
export class CountryService {
    getCountries() : Country[] {

        return COUNTRIES
    }

    searchCountries(searchTerm: string): Country[] {

        if (!searchTerm || !searchTerm.trim()) {
            return COUNTRIES;
        }

        let expression = searchTerm.split('').map(t => '[^' + t + ']*' + t).join('');
        let exp = new RegExp(expression, "gim");

        return COUNTRIES.filter(c => exp.test(c.name));
    }

    getCountry(id: string): Country {
        return COUNTRIES.filter(country => country.cca2.toUpperCase() === id.toUpperCase())[0]
    }

}