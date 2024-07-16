import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-filter-table',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './filter-table.component.html',
  styleUrl: './filter-table.component.css'
})
export class FilterTableComponent {
  @Output() nameEvent  = new EventEmitter<string>();
  @Output() roleEvent  = new EventEmitter<string>();

  roles: string[] = ['admin', 'user', 'moderator'];
  name: string | undefined;

  changeRole(event: Event) {
    const role = (event.target as HTMLSelectElement).value;
    this.roleEvent.emit(role);
  }
  changeName(name: string){
    this.nameEvent.emit(name);
  }


}
