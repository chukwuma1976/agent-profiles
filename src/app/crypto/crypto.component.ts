import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [ MatIconModule],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.css'
})
export class CryptoComponent {
  crypto: any;

  constructor(private router: Router){
    this.crypto = this.router.getCurrentNavigation()?.extras.state;
  }
}
