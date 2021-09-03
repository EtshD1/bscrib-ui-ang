import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sighup',
  templateUrl: './sighup.component.html',
  styleUrls: ['./sighup.component.scss']
})
export class SighupComponent implements OnInit {

  userData = {
    username: "",
    password: "",
    passwordCheck: ""
  }

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  handleSubmit = () => {
    if (this.userData.password !== this.userData.passwordCheck) {
      this._auth.registerUser(this.userData)
        .subscribe(res => {
          localStorage.setItem("token", res.token);
          this._router.navigate(["/homepage"]);
        }, err => {
          console.log(err);
        });
    }
  }

}
