import {Injectable} from 'angular2/core';
import {COUNTRIES} from './mock-countries';
import {Country} from './country'

@Injectable()
export class CountryService {
    getCountries() : Country[] {
        return COUNTRIES
    }

    getAllRegions(): string[] {

        let regions: string[] = COUNTRIES.map( country => country.region.trim() );    
        let uniqueRegions: string[] = [];

        regions.forEach(region => {
            if (region && uniqueRegions.indexOf(region) < 0) {
                uniqueRegions.push(region);
            }
        });

        return uniqueRegions;
    }

    getAllSubRegions(): string[] {

        let subRegions: string[] = COUNTRIES.map( country => country.subregion.trim() );    
        let uniqueSubRegions: string[] = [];

        subRegions.forEach(subRegion  => {
            if (subRegion && uniqueSubRegions.indexOf(subRegion) < 0) {
                uniqueSubRegions.push(subRegion);
            }
        });

        return uniqueSubRegions;
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
        let code = id.trim();
        let lookup;

        if(code.length === 2) {
            lookup = "cca2"
        } else if (code.length === 3){
            if(parseInt(id, 10)){
                lookup = "ccn3"
            } else {
                lookup = "cca3"
            }
        } else {
            return;
        }

        return COUNTRIES.filter(country => country[lookup].toUpperCase() === id.toUpperCase())[0];
    }

    getCountryName(id: string): string {
        let country = this.getCountry(id);
        return country.name || "";
    }

    getCountryByName(name: string): Country {
        return COUNTRIES.filter(country => country["name"].toUpperCase() === name.trim().toUpperCase())[0];
    }

    getCountriesByRegion(region: string): Country[] {
        return COUNTRIES.filter(country => country["region"].toUpperCase() === region.trim().toUpperCase());        
    }

    getCountriesBySubRegion(subregion: string): Country[] {
        return COUNTRIES.filter(country => country["subregion"].toUpperCase() === subregion.trim().toUpperCase());        
    }
}