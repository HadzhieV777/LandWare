import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { UserModule } from './user/user.module';
import { CoreModule } from './core/core.module'
import { DashboardModule } from './dashboard/dashboard.module';
import { LeasesModule } from './leases/leases.module';
import { AuthService } from './shared/services/auth-service.service';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './landing/landing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // Firebase modules
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,

    // Http Modules
    // HttpClientModule,
    // HttpClientXsrfModule.withOptions({
    //   cookieName: 'My-Xsrf-Cookie',
    //   headerName: 'My-Xsrf-Header',
    // }),
    

    // Application modules
    CoreModule,
    SharedModule,
    LandingModule,
    UserModule,
    DashboardModule,
    LeasesModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
