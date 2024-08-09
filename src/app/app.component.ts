import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  clickedLink = {
    'home': false,
    'journey': false,
    'projects': false,
    'contact': false
  }

  onClickNav(link: 'home'|'journey'|'projects'|'contact'){
    for(let obj in this.clickedLink){
      this.clickedLink[obj as keyof typeof this.clickedLink] = false;
    }
    this.clickedLink[link] = true;
  }
}
