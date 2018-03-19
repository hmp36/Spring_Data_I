import {Injectable} from '@angular/core';

@Injectable()
export class ArrayService {
    constructor() {}
  
    public getRange( length: number ):Array<any> {
        let items: any[] = [];
        for(let i = 0; i < length; i++) {
            items.push(i);
        }
        return items;
    }

    /** @example */
    public anotherArrayMethod (str: string):string {
        return str;
    }
}
