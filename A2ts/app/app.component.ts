import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: '<h1>My 1 First Angular 2 App [{{test}}]</h1><p>p</p>[<ul><li *ngFor="let item of arr" >{{item}}</li></ul>]'
})
export class AppComponent {
    test = "test";
    arr = [1,2,3,4,5]; 
}