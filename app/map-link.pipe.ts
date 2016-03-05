import {Pipe, PipeTransform} from 'angular2/core';


@Pipe({name: 'mapLink'}) 
export class MapLinkPipe implements PipeTransform {
    transform(value: number[], args: string[]): string{
        let lat = value[0];
        let long = value[1];
     //   return "https://www.google.com/maps/preview/@" + lat + "," + long + ",5z";
        return 'https://www.google.com/maps/place/' +lat +',' + long + '/@' + lat + ',' + long + ',5z';
    }
}