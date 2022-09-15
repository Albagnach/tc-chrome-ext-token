import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  async copyToken() {
    const tab = await chrome.tabs.query({ active: true, lastFocusedWindow: true });

    const url = tab[0].url as string;

    chrome.cookies.get({ name: "PHPSESSID", url }, function (cookie) {
      console.log('cookie : ', cookie);
    });

  }
}
