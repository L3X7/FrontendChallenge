import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ItunesApiService {

  constructor(private httpClient: HttpClient) { }

  getTopAlbums() {
    return this.httpClient.get(environment.API_URL.concat("topalbums/limit=100/json"));
  }
}
