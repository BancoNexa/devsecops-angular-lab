import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-upload-inseguro',
  template: `<h3>Cargar documento</h3><input type='file' (change)='onFileSelected($event)' />`
})
export class FileUploadInseguroComponent {
  constructor(private http: HttpClient) {}
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    // ❌ Sin validación ni restricción de tipo o tamaño
    const formData = new FormData();
    formData.append('file', file);
    this.http.post('/api/uploads', formData).subscribe(resp => console.log('Subido', resp));
  }
}