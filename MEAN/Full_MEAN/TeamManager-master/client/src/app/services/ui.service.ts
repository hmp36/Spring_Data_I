import {Injectable} from '@angular/core';
import * as $ from 'jquery';

@Injectable()
export class UiService {
    constructor() {}
  
    public toggleClass(selector:string, classForToggle:string, delay:number = 1) {
        setTimeout(() => {
            let block = document.querySelector(selector);
            block.classList.toggle(classForToggle);
        }, delay);
    }

    public scrollTo(targetId:string, time:number = 300) {
        targetId = '#' + targetId;
        $('html, body').animate({scrollTop: $(targetId).offset().top}, time);
        return false;
    }

    /** @example */
    public anotherUiMethod (str: string) {
    }
}
