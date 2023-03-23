import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MsmsService } from 'src/app/msms.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  disableSelect = new FormControl(false);
  customer_form!: FormGroup;
  admin = 1;
  upload: any;
  actionBtn: string = 'Add';
  course_data:any;
  add_customer_party: any;

  constructor(
    private fb: FormBuilder,
    private msms : MsmsService,
    private matref: MatDialogRef<AddCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public edit_party: any
  ) { }

  ngOnInit(): void {
    this.customer_form = this.fb.group({
      shop_name: ['', Validators.required],
      Owner_name: ['',Validators.required],
      contact_number: ['', Validators.required],
      WhatsApp_number:['', Validators.required],
      Contact_Person: ['', Validators.required],
      Email: ['', Validators.required],
      address: ['', Validators.required],
      admin_id_fk: ['', Validators.required],
    })
    this.customer_form.controls['add_edit_party'].setValue(new Date().toISOString().slice(0, 10));
    if(this.add_customer_party){
      this.actionBtn='update'
      this.customer_form.controls[ 'id'].setValue(this.add_customer_party.id)
      this.customer_form.controls[ 'shop_name'].setValue(this.add_customer_party.name)
      this.customer_form.controls[ 'Owner_name'].setValue(this.add_customer_party.Owner_name)
      this.customer_form.controls[ 'contact_number'].setValue(this.add_customer_party.contact_number)
      this.customer_form.controls[ 'WhatsApp_number'].setValue(this.add_customer_party.WhatsApp_number)
      this.customer_form.controls[ 'Contact_Person'].setValue(this.add_customer_party.Contact_Person)
      this.customer_form.controls[ 'Email'].setValue(this.add_customer_party.Email)
      this.customer_form.controls[ 'address'].setValue(this.add_customer_party.enq_address)
      this.customer_form.controls[ 'admin_id_fk'].setValue(this.add_customer_party.admin_id_fk)
    }
  }
  onsubmit(){
    console.log(this.customer_form.value)
    console.log(this.customer_form.get('shop_name')?.value)
    console.log(this.customer_form.get('Owner_name')?.value)
    console.log(this.customer_form.get('contact_number')?.value)
    console.log(this.customer_form.get('Contact_Person')?.value)
    console.log(this.customer_form.get('WhatsApp_number')?.value)
    console.log(this.customer_form.get('Email')?.value)
    console.log(this.customer_form.get('address')?.value)
    
    const customerdata = new FormData()
    customerdata.append('shop_name',this.customer_form.get('shop_name')?.value)
    customerdata.append('Owner_name',this.customer_form.get('Owner_name')?.value)
    customerdata.append('contact_number',this.customer_form.get('contact_number')?.value)
    customerdata.append('Contact_Person',this.customer_form.get('Contact_Person')?.value)
    customerdata.append('WhatsApp_number',this.customer_form.get('WhatsApp_number')?.value)
    customerdata.append('Email',this.customer_form.get('Email')?.value)
    customerdata.append('address',this.customer_form.get('address')?.value)


  }
  add_customer_reset(){
    // this.customer_form.reset()
    this.customer_form.controls['shop_name'].reset()
    this.customer_form.controls['Owner_name'].reset()
    this.customer_form.controls['contact_number'].reset()
    this.customer_form.controls['Contact_Person'].reset()
    this.customer_form.controls['WhatsApp_number'].reset()
    this.customer_form.controls['Email'].reset()
    this.customer_form.controls['address'].reset()
  }
}