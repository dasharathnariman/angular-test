import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  products = [
    { id: 1, pdtname: 'Alice', taxId: 2 },
    { id: 1, pdtname: 'Alice', taxId: 2 },
  ];
    taxss = [

    ]
}
