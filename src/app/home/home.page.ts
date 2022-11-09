import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users: any;
  filtro: String="";
  constructor(private httpClient: HttpClient) {

    this.users= this.httpClient.get("https://raw.githubusercontent.com/fgomenr/appResponsive/main/MOCK_DATA.json");

  }

}
