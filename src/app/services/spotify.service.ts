import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  obterUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndPoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

   obterTokenUrlCallback() {
    console.log(window.location.hash)
    if (!window.location.hash)
      return '';

    const params = window.location.hash.substring(1).split('&'); //substring de 1 remove o primeiro caracter , split quebra a string aonde tiver o & comercial.
    return params[0].split('=')[1];
  }
}
