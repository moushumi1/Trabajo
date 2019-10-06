import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from './../../users-service.service';
//import jsPDF from 'jspdf/dist/jspdf.min.js';
import * as jsPDF from 'jspdf'
//import jsPDF from 'jspdf';
//import jsPDF from 'jspdf/dist/jspdf.debug'
import html2canvas from 'html2canvas'; 
@Component({ 
  selector: 'app-admin-transaction',
  templateUrl: './admin-transaction.component.html',
  styleUrls: ['./admin-transaction.component.scss']
})
export class AdminTransactionComponent implements OnInit {

  constructor(private userSer:UsersServiceService) { }

  allUsers=[]; 
  
  ngOnInit() {
    this.userSer.adminTransApproved().subscribe(
      res => this.allUsers = res,
      err => console.log(err)
    )
  }
  onClick(){
    // console.log(jsPDF);
    // var doc = new jsPDF();
 
    // doc.text('Hello world!', 10, 10)
    // doc.save('a4.pdf')
    // var pdf = new jsPDF('p', 'pt', 'letter');
    // pdf.canvas.height = 72 * 11;
    // pdf.canvas.width = 100 * 8.5;

    // var isi = document.getElementById("tran");
    // pdf.fromHTML(isi);

    //pdf.save('Purchase_Order.pdf');

    var data = document.getElementById('trantable');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      data.appendChild(canvas);
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    }); 

  //   html2canvas(document.body).then(function(canvas) {
  //     document.body.appendChild(canvas);
  // });
  }
}
