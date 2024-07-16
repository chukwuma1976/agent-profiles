import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-bank-card',
  standalone: true,
  imports: [MatCardModule, MatDividerModule],
  templateUrl: './bank-card.component.html',
  styleUrl: './bank-card.component.css'
})
export class BankCardComponent {
  bank: any;

  constructor(private router: Router){
    this.bank = this.router.getCurrentNavigation()?.extras.state;
  }
}
