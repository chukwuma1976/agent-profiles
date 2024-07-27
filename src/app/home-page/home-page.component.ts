import { Component } from '@angular/core';
import { backgroundUrls } from '../../imageUrl';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  backgroundPic = backgroundUrls[0];

  ngOnInit(){
    let index = Math.floor(Math.random()*backgroundUrls.length)
    this.backgroundPic = backgroundUrls[index];
  }
}
