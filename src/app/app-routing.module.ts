import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  // { path: 'article', component: ArticleComponent },
  {path: 'article', loadChildren: () => import('src/app/modules/article/article.module').then(m => m.ArticleModule)},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
