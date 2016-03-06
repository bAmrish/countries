import {MapLinkPipe} from './map-link.pipe';

describe('MapLinkPipe', () => { 
    let mapLinkPipe: MapLinkPipe;

    beforeEach(() => {
        mapLinkPipe = new MapLinkPipe(); 
    })

    it('Generates right link', () => {
        let latlng = [20, 77];
        let url = 'https://www.google.com/maps/place/20,77/@20,77,5z';
        expect(mapLinkPipe.transform(latlng)).toEqual(url);
    });
});

