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
    email: "",
    password: "",
    passwordCheck: "",
    fName: "",
    lName: "",
    phonenumber: "",
    country: "",
    bio: ""
  }
  warning = {
    email: "",
    password: "",
    fName: "",
    lName: "",
    phonenumber: "",
    country: "",
  };

  constructor(
    private _auth: AuthService,
    private _router: Router
  ) { }

  ngOnInit(): void {
  }

  handleSubmit = () => {
    this.warning = {
      email: "",
      password: "",
      fName: "",
      lName: "",
      phonenumber: "",
      country: "",
    };
    let submittable = true;
    if (!this.userData.email) {
      this.warning.email += "Please Enter a Valid Email";
      submittable = false;
    }
    if (this.userData.password !== this.userData.passwordCheck) {
      this.warning.password += "Passwords do not match"
      submittable = false;
    }
    if (!this.userData.fName) {
      this.warning.fName += "Please Enter Your First Name"
      submittable = false;
    }
    if (!this.userData.lName) {
      this.warning.lName += "Please Enter Your Last Name"
      submittable = false;
    }
    if (!this.userData.country) {
      this.warning.country += "Please Enter Your Country"
      submittable = false;
    }
    if (!this.userData.phonenumber) {
      this.warning.phonenumber += "Please Enter Your Phone Number"
      submittable = false;
    }
    if (submittable) {
      this._auth.registerUser(this.userData)
        .subscribe(res => {
          console.log(res)
          if (res.token) {
            localStorage.setItem("token", res.token);
            this._router.navigate(["/"]);
          } else {
            if (res.info === "User already exists!") {
              this.warning.email += "Email already used, Please use a different email!";
            }
          }
        }, err => {
          console.log(err);
        });
    }
  }

}
