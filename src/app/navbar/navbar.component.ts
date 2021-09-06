import { Component, OnInit } from '@angular/core';
import { PostPublicationService } from '../post-publication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  profileMenuActive = false;

  clearingTimeout: any;

  addForm = {
    checked: false,
    active: false,
    url: "",
    title: "",
    body: "",
    valid: true,
    safe: true
  };

  constructor(private _postPublication: PostPublicationService) { }

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

  toggleAddForm = () => {
    this.addForm.active = !this.addForm.active;
  }

  checkUrl = () => {
    if (this.addForm.url) {
      this._postPublication.checkUrl(this.addForm.url).subscribe(res => {
        if (res.valid) {
          this.addForm.title = res.title;
          this.addForm.body = res.body;
        } else {
          this.addForm.valid = false;
        }
        if (!res.safe) {
          this.addForm.safe = false
        }
      },
        err => {
          console.log(err);
        });
    }
  }

  handleSubmit = () => {
    this._postPublication.addPublication({
      url: this.addForm.url,
      title: this.addForm.title,
      body: this.addForm.body
    }).subscribe(res => {
      console.log(res);
    },
      err => {
        console.log(err)
      });
  }

}
