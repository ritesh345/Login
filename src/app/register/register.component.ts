import { Component } from '@angular/core';
import { FormGroup, FormControl , FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from '../api.service';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  myForm!: FormGroup

  constructor(private fb: FormBuilder,private api: ApiService,public dialog: MatDialog) {
    
    this.myForm = fb.group({
      'Name': ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z\ s]{0,139}[a-zA-Z]')]],
      'City': ['',[Validators.required]],
      'Email': ['', [Validators.required, Validators.email]],
      'Pan': ['',[ Validators.required,Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]],
      'Mobile': ['',[Validators.required, Validators.pattern('^[6-9]{1}[0-9]{9}$')]]
    });
  }

  onSubmit(){
    console.log(this.myForm.value);
  }

  otp:number | undefined;


  loginUser(){
    this.otp = Math.floor(100000 + Math.random() * 900000);

      this.dialog.open(OtpComponent, {
        data: {
          newotp: this.otp,
          form: this.myForm.value
        },
      });
      console.log(this.otp);
      
  }
  

// myForm: FormGroup;

  
//   constructor() {
   

//     this.myForm = new FormGroup({
//       fullName: new FormControl('', Validators.required),
//       city: new FormControl('', Validators.required),
//       panNumber: new FormControl('', Validators.required),
//       email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9]+@[a-z.-]+\\.[a-z]{2,4}$")]),
//       password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z]).{8,30}")]),

//     });
//   }

//   onSubmit(){
//     console.log(this.myForm.value); 
//   }
  
//   OnClick(){
//     return this.myForm.value;
//   }

  

//   get email(){
//     return this.myForm.get('email');
//   }
//   get password(){
//     return this.myForm.get('password');
//   }
//   get fullName(){
//     return this.myForm.get('fullName');
//   }
//   get city(){
//     return this.myForm.get('city');
//   }
//   get panNumber(){
//     return this.myForm.get('panNumber');
//   }
}
