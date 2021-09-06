import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  profileMenuActive = false;

  clearingTimeout: any;

  constructor() { }

  ngOnInit(): void {
  }

  toggleProfileMenu = () => {
    this.profileMenuActive = !this.profileMenuActive;
    if (this.profileMenuActive) {
      this.clearingTimeout = setTimeout(() => {
        this.profileMenuActive = false;
      }, 5000);
    } else {
      clearTimeout(this.clearingTimeout);
    }
  }

}
