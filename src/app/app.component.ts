import { Component } from '@angular/core';
// import { ITag } from '@smartblog/models';
// import { Observable } from 'rxjs';
// import { Store, select } from '@ngrx/store';
import { reset } from 'src/app/@core/store/tag/tag.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';
  // currentTag: Observable<ITag>;
  public data: any = {
    text: 'onne',
    value: '0000'
  };
  public tags: string[] = [
    'test',
    'good'
  ] as string[];
  public markdown = `
  # Title
  ## sub title
  
  `

  // constructor(private store: Store<{ currentTag: ITag }>) {
  //   this.currentTag = store.pipe(select('currentTag'));
  // }

  reset() {
    // this.store.dispatch(reset());
  }
}
