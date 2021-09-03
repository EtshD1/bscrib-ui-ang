import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  @Input() user: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
