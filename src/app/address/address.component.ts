import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  address: any;

  constructor(private router: Router){
    this.address = this.router.getCurrentNavigation()?.extras.state;
  }

}
