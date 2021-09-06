import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user = {
    owner: false,
    name: "",
    title: "",
    country: "",
    following: 0,
    followers: 0,
    bio: ""
  }

  constructor(
    private route: ActivatedRoute,
    private _profile: ProfileService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this._profile.getProfile(id!).subscribe(
      res => {
        console.log(res);
        this.user.name = `${res.info.firstname} ${res.info.lastname}`;
        this.user.title = res.info.title;
        this.user.country = res.info.title;
        this.user.bio = res.info.bio;

      },
      err => { console.log(err) }
    )
  }
}
