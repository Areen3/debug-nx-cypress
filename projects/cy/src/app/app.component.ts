import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cy';

  constructor() {
    // const myData: IModelData = { data: 'test data from angular' };
    // console.log(modelDataTest(myData));
    console.log('from my component')
  }
}
