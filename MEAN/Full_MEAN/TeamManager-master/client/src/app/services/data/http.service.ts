import { Injectable } from '@angular/core';

@Injectable()
export class HttpService<T> {
  private instanceType;
  constructor() { }

  public createInstance(): T {
    return new this.instanceType;
  }

  public set type(type){
    this.instanceType = type;
  }

  public get type(): any{
    return this.instanceType;
  }
}

/*let test = new HttpService<MyClass>(MyClass);

let example = test.createInstance();
example.hi();*/
/*
* 1. Заинжектить сервис в компонент
* 2. Вызвать метод setType для определения типа, с которым работает сервис
* */
