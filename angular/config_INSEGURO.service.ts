import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppConfigInseguroService {
  private config: any;
  constructor(private http: HttpClient) {}

  load(): Promise<void> {
    // ❌ Confía ciegamente en el backend y loguea secretos
    return this.http.get('https://config.banco-digital.local/app-config')
      .toPromise()
      .then((cfg: any) => {
        this.config = cfg;
        console.log('Config cargada', cfg); // ❌ Fuga de secretos
      });
  }
  get(key: string): any { return this.config ? this.config[key] : null; }
}