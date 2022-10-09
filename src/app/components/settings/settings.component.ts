import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ISettings } from 'src/models/settings.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  public settings: ISettings;

  constructor() {}

  ngOnInit(): void {
    if (localStorage.getItem('settings')) {
      this.settings = JSON.parse(localStorage.getItem('settings') as string);
    } else {
      this.settings = { soundOn: true, timerOn: true, time: 30, volume: 50 };
    }
  }

  onSubmit = (e: SubmitEvent) => {
    e.preventDefault();
    localStorage.setItem('settings', JSON.stringify(this.settings));
  };
  onDefault = (e: Event) => {
    e.preventDefault();
    this.settings = { soundOn: true, timerOn: true, time: 30, volume: 50 };
  };
}
