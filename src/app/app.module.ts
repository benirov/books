import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FTP } from '@ionic-native/ftp/ngx';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalFilterPageModule } from '../pages/modal-filter/modal-filter.module';
import { ModalCategoryPageModule } from '../pages/modal-category/modal-category.module';
import { HttpClientModule } from '@angular/common/http';   


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ModalFilterPageModule,
    HttpClientModule,
    ModalCategoryPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FTP,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
