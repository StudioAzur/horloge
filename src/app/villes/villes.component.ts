import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.scss'],
})
export class VillesComponent implements OnInit {
  countries: any[] = [
    { name: 'Paris', timezone: 'Europe/Paris' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { name: 'Canberra',  timezone: 'Australia/Canberra' },
    { name: 'Troll', timezone: 'Antarctica/Troll' },
    { name: 'Ouagadougou', timezone: 'Africa/Ouagadougou' }
  ];

  constructor() {}

  ngOnInit(): void {}

  setHour(timezone: string) {
    const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
    const time = date.split(" ")[1];
    /* setTimeout((this.setHour), 1000); */
    return time;
  }
}
