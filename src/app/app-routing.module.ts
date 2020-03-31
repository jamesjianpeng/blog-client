import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
// import { VersionListComponent } from './modules/version/version-list-page/version-list.component'
const routes: Routes = [
  // { path: 'version', component: VersionListComponent },
  { path: 'article', loadChildren: () => import('src/app/modules/article/article.module').then(m => m.ArticleModule) },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
