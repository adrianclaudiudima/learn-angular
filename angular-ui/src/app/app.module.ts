import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {UrlResolverService} from './services/url-resolver.service';
import {UsersService} from './services/users.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [UrlResolverService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
