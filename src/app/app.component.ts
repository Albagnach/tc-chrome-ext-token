import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  async copyToken() {
    const tab = await chrome.tabs.query({
      active: true,
      lastFocusedWindow: true,
    });

    const url = ('https://api-' +
      tab[0].url?.slice(0, -1).substring(8)) as string;
    console.log('url :', url);
    const cookie = await chrome.cookies.get({
      name: 'access_token',
      url,
    });
    console.log('token : ', cookie?.value);
  }
}
