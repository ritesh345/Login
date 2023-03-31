import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, _closeDialogVia } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxOtpInputConfig } from 'ngx-otp-input/public-api';
import Swal from 'sweetalert2';
import { ApiService } from '../api.service';
export interface DialogData {
  newotp:number;
  form: any;
}
@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})

export class OtpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private router:Router,private api:ApiService) {}

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList:{
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disabled-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
     
    }
  }

  handleOtpChange(value:any):void {
    console.log(this.data.newotp);
  }

  handleFillEvent(value:any):void {
    if(value == this.data.newotp) {
      alert('validation Success');
      const ary = {otp:value,form:this.data.form};
      this.api.getApi(ary).subscribe((res)=>{
      })
      this.router.navigate(['/home']);

    }
    else {
      alert('validation Failed');
    }
  }
  ngOnInit(): void {
    
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: this.data.newotp,
      text: 'Here is your OTP',
      showConfirmButton: false,
      timer: 30000
      
    })
  }


}
