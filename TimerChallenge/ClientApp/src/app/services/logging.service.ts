import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoggingService {

    url = 'api/logging';

    constructor(
        private http: HttpClient
    ) { }

    log$(text: string) {
        return this.http.post(this.url, { text });
    }

    clear$() {
        return this.http.post(`${this.url}/clear`, {});
    }

    get$() {
        return this.http.get(this.url);
    }

}
