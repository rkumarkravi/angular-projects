import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServService } from './service/common-serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'facebook-ui-clone';
  langs = [
    'English (UK)',
    'हिन्दी',
    'मराठी',
    'اردو',
    'ਪੰਜਾਬੀ',
    'বাংলা',
    'ગુજરાતી',
    'தமிழ்',
    'తెలుగు',
    'മലയാളം',
    'ಕನ್ನಡ',
  ];
  products = [
    'Sign Up',
    'Log In',
    'Messenger',
    'Facebook Lite',
    'Watch',
    'Places',
    'Games',
    'Marketplace',
    'Facebook Pay',
    'Oculus',
    'Portal',
    'Instagram',
    'Bulletin',
    'Local',
    'Fundraisers',
    'Services',
    'Voting',
    'Information',
    'Centre',
    'Groups',
    'About',
    'Createad',
    'Create Page',
    'Developers',
    'Careers',
    'Privacy',
    'Cookies',
    'AdChoices',
    'Terms',
    'Help',
    'Settings',
    'Activity log',
  ];
  footerSwitch: boolean = true;
  constructor(private commonServ: CommonServService, private router: Router) {
    if (this.router.url == '/') {
      this.commonServ.setFooter(false);
    }
    this.commonServ.showFooter.subscribe((x) => {
      this.footerSwitch = x;
    });
  }
}
