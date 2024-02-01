import { Component } from '@angular/core';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Neutrinos-App';
  convertedJSON!: string;
  fileUpload(event:any){
    
    console.log(event.target.files);
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsBinaryString(selectedFile);
    fileReader.onload = (event) =>{
      console.log(event);
      let binaryData = event.target?.result;
      let workbook = XLSX.read(binaryData, {type:'binary'});
      workbook.SheetNames.forEach(sheet =>{
        const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
        console.log(data);
        this.convertedJSON = JSON.stringify(data);
      })
      console.log(workbook);
      
    }


  }
}
