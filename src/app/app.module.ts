import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './modules/components/footer/footer.component'
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment'; 
import { VersionListComponent } from './modules/version/version-list-page/version-list.component';
import { ArticleService } from 'src/app/@core/service/article';
import { ConfigService } from 'src/app/@core/service/config';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    VersionListComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MomentModule
  ],
  providers: [
    ArticleService,
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
