import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.scss'],
})
export class TimezoneComponent implements OnInit {
  @Input()
  hour!: string;
  constructor() {}

  ngOnInit(): void {}
}
