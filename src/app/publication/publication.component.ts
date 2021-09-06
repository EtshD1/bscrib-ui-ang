import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  @Input() data: {
    userName: string,
    title: string,
    site: string,
    readTime: number,
    type: string,
    likes: string,
    views: string,
    date: string
  } = {
      userName: "",
      title: "",
      site: "",
      readTime: 0,
      type: "",
      likes: "",
      views: "",
      date: ""
    };
  @Input() owner: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

}
