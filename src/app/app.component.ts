import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { AuthService } from './shared/service/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'patient-app';

   constructor(public translate: TranslateService, public authService: AuthService ) {
    translate.addLangs(['English', 'Spanish'])
    translate.setDefaultLang('English');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/English|Spanish/) ? browserLang : 'English');
  }
}
