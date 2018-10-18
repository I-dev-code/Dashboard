import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {SettingsContainer} from '../objects/settings-container';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ApiService {
    apiUrl: string;

    constructor(private http: HttpClient, private router: Router) {
        this.apiUrl = environment.apiUrl;
    }

    static getHeaders() {
       if (window.localStorage.getItem('token')) {
          const token = window.localStorage.getItem('token');
//          const token = JSON.parse(window.localStorage.getItem('session')).signatureToken;
           return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': token });
       }
       return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    }

    apiGet(path) {
        const headers = ApiService.getHeaders();

        return this.http.get(`${this.apiUrl}${path}`, {headers: headers}).toPromise();
    }

    apiPost(path, data) {
        const headers = ApiService.getHeaders();

        return this.http.post(`${this.apiUrl}${path}`, data, {headers: headers}).toPromise();
    }

    apiDelete(path, body) {
        const headers = ApiService.getHeaders();

        return this.http.delete(`${this.apiUrl}${path}`, {headers: headers, withCredentials: true}).toPromise();
    }

    postWidget(settings: SettingsContainer, serviceLabel: string = null, widgetLabel: string = null, id: number = -1) {
        if (serviceLabel == null || widgetLabel == null) {
            return;
        }
        const path = serviceLabel + '/' + widgetLabel + ((id < 0) ? '' : ('/' + id + '/params'));
        console.log(settings.params);
        console.log(path);
        this.apiPost(path, settings.params).then(response => {
            console.log(response);
            settings.params = response['params'];
            settings.infos = response['infos'];
        });
    }
}
