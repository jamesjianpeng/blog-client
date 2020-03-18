import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  public data: any = {
    text: 'onne',
    value: '0000'
  };
  public tags: string[] = [
    'test',
    'good'
  ] as string[]
}
