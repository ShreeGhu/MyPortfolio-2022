import { Component } from '@angular/core';
import {faGithub, faYoutube, faLinkedin, faCodepen,faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioProject';
  faGithub = faGithub;
  faYoutube =faYoutube;
  faLinkedin= faLinkedin;
  faCodepen =faCodepen;
  faInstagram=faInstagram;

}
