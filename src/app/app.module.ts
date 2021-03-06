import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import { SigninComponent } from './components/signin/signin.component';
import { UserService } from './service/user.service';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SidebarComponent } from './components/messages/components/sidebar/sidebar.component';
import { AuthGuard } from './auth/auth.guard';
import { ActivityRequestComponent } from './components/activity-request/activity-request.component';
import { HeaderComponent } from './components/header/header.component';
import { ActivityComponent } from './components/activity/activity.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent} from './components/profile/profile.component';
import { ConversationComponent } from './components/messages/components/conversation/conversation.component';
import { SendMessageComponent } from './components/messages/components/send-message/send-message.component';
import { APIInterceptor } from './interceptors/api.interceptor';
import { AuthService } from './service/auth.service';


import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    MessagesComponent,
    SidebarComponent,
    ActivityRequestComponent,
    ConversationComponent,
    HeaderComponent,
    SendMessageComponent,
    HeaderComponent,
    ActivityComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    IonicModule.forRoot(AppComponent),
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService, AuthGuard,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
