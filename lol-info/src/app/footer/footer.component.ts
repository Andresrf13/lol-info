import { Component } from '@angular/core';
import { Paths } from 'src/Paths';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  github = Paths.gitHubUrl;

  githubAutor = Paths.gitHubAuthor;


}
