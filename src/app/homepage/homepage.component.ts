import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  publications = [];

  constructor(
    private _feed: FeedService
  ) { }

  ngOnInit(): void {
    this._feed.getFeed().subscribe(res => {
      this.publications = res;
    },
      err => {
        console.log(err);
      });
  }

}
