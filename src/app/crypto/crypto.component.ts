import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crypto',
  standalone: true,
  imports: [],
  templateUrl: './crypto.component.html',
  styleUrl: './crypto.component.css'
})
export class CryptoComponent {
  crypto: any;

  constructor(private router: Router){
    this.crypto = this.router.getCurrentNavigation()?.extras.state;
  }
}
