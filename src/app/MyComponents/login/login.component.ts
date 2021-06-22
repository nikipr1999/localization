import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  
  constructor( private formBuilder: FormBuilder,) {
    
   }

  ngOnInit(): void {
  }
  onSubmit(): void {
//     var uname = document.getElementById("Username").value;
// 		var pwd = document.getElementById("Password").value;
// 		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
// 		if(uname =='')
// 		{
// 			alert("please enter user name.");
// 		}
// 		else if(pwd=='')
// 		{
//         	alert("enter the password");
// 		}
// 		else if(!filter.test(uname))
// 		{
// 			alert("Enter valid email id.");
// 		}
// 		else if(pwd.length < 6 || pwd.length > 6)
// 		{
// 			alert("Password min and max length is 6.");
// 		}
// 		else
// 		{
// 	alert('Thank You for Login & You are Redirecting to Campuslife Website');
//     console.warn('Your are logged in');
//     this.checkoutForm.reset();
//   }

}
}