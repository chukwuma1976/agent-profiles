import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-card',
  standalone: true,
  imports: [],
  templateUrl: './bank-card.component.html',
  styleUrl: './bank-card.component.css'
})
export class BankCardComponent {
  bank: any;

  constructor(private router: Router){
    this.bank = this.router.getCurrentNavigation()?.extras.state;
  }
}
