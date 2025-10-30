import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuditEvent {
  user: string;
  action: string;
  payload: any;
  timestamp: string;
}

@Injectable({ providedIn: 'root' })
export class AuditLogInseguroService {
  constructor(private http: HttpClient) {}
  logPayment(user: string, cardNumber: string, amount: number) {
    const event: AuditEvent = {
      user,
      action: 'PAYMENT',
      payload: { cardNumber, amount }, // ❌ Fuga de datos sensibles
      timestamp: new Date().toISOString()
    };
    this.http.post('https://logs.banco-digital.local/audit', event).subscribe();
  }
}