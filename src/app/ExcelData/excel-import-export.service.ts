import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ExcelImportExportService {
  private fileList = new BehaviorSubject<any[]>([]);
  fileList$ = this.fileList.asObservable();
  
  constructor() {}
  
  addfileList(fileList: any): string 
  {
    localStorage.setItem('fileList', JSON.stringify(fileList));
    return 'File List added successfully';
  }
}
