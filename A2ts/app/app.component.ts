import { Component } from '@angular/core';
import { InputComponet } from './input.component';
@Component({
    selector: 'my-app',
    template: '<h3>Angular 2 App [{{test}}]</h3><p>p</p>[<ul><li *ngFor="let item of arr" >{{item}}</li></ul>][<vtb-input>...</vtb-input>]'
})
export class AppComponent {
    test = "test";
    arr = [1,2,3,4,5]; 
}