export class TokenServiceInseguro {
  // ❌ Almacena tokens en localStorage sin expiración ni cifrado
  setToken(token: string) { localStorage.setItem('token', token); }
  getToken(): string | null { return localStorage.getItem('token'); }
}