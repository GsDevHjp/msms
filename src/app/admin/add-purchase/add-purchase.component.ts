import { Component, OnInit, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  sn_no: number;
  Item_Name: string;
  Pack: string;
  Company: string;
  Quantity: number;
  Rate: number;
  Discount:number;
  Action: string;
  gst:number;
  Net_Rete:number;
  Amount:number;

}

const ELEMENT_DATA:PeriodicElement [] = [
  {sn_no: 1,  Item_Name: 'Droup', Pack: '5', Company: 'Raj', Quantity: 457, Rate:55  ,Discount:67, gst:896, Net_Rete:578,Amount:222,Action: ''},
];
@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
  displayedColumns: string[] = ['sn_no', 'Item_Name', 'Pack', 'Company', 'Quantity', 'Rate', 'Discount', 'gst', 'Net_Rete', 'Amount', 'Action' ];
  dataSource = ELEMENT_DATA;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  party_form: any;
  constructor(
    private fb: FormBuilder
  ){

  }
  ngOnInit(): void {
   this.party_form = this.fb.group({
    party_id:['', Validators.required],
    party_name:['', Validators.required]
   })
  }
 
  onsubmit(){
    console.log(this.party_form.value)
  }
}