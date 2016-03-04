import {Injectable} from 'angular2/core';
import {COUNTRIES} from './mock-countries';
import {Country} from './country'

@Injectable()
export class CountryService {
    getCountries(): Country[] {
        return COUNTRIES;
    }
}