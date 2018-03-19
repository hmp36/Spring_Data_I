import {Injectable} from '@angular/core';

@Injectable()
export class ReformatStringService {
    constructor() {}
  
    public clean (url: string):string {
        url = url.replace(/[^\w\s]/gi, '');
        url = url.split(' ').join('');
        return url;
    }

    /** @example */
    public anotherReformatStringMethod (str: string):string {
        return str;
    }
}
