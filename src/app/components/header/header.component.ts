import { Component,ViewChild  } from '@angular/core';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbCollapseDirective } from 'mdb-angular-ui-kit/collapse';
import { CommonModule } from '@angular/common';

interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MdbDropdownModule, MdbRippleModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('basicNav') basicNav!: MdbCollapseDirective;

  isMenuOpen: boolean = false;

  toggleMenuIcon(){
    this.isMenuOpen = !this.isMenuOpen;
  }


}
