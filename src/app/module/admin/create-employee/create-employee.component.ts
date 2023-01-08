import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/shared/service/Employee/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private formbuilder:FormBuilder, private service:EmployeeService) {  }
 
  selectedphoto:any ;
  selectedpan: any;
  selectedaadhar: any;  
  
  imageSrc1: any;
  imageSrc2: any;
  imageSrc3:any; 

  reader = new FileReader();
 
  registerationForm:FormGroup
  ngOnInit(): void {
    this.registerationForm=this.formbuilder.group({
      id:[],
      fName:['', [Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      lName:['',[Validators.required]],
      role:['',[Validators.required]], 
      address:['',[Validators.required]],
      contactNo:[ ,[Validators.required]],
      photo:[],
	    pan:[],
	    aadhar:[],
      userName:['',Validators.required],
      password:['',Validators.required],      
      email:['',Validators.required],
    })
  }

  createaccount(){
    alert("welcome")
    const employeeData = JSON.stringify(this.registerationForm.value);
    // create object formdata
    const uploadDocument = new FormData();
    // store file formdata
    uploadDocument.append("photo", this.selectedphoto);
    uploadDocument.append("pan", this.selectedpan);
    uploadDocument.append("aadhar", this.selectedaadhar);
    uploadDocument.append("employee", employeeData);


    this.service.saveData(uploadDocument).subscribe();
    console.log("Upload Method")


    // window.location.reload();

  }
  fillForm(){
    
  }
  resetData(){

  }
 onselectedFile1(event: any) {
    alert("hello")
    this.selectedphoto = event.target.files[0];
    alert(this.selectedphoto);
    const file1 = event.target.files[0];
    this.reader.onload = e => this.imageSrc1 = this.reader.result;
    this.reader.readAsDataURL(file1);
  }
  onselectedFile2(event: any) {
    this.selectedpan = event.target.files[0];
    const file2 = event.target.files[0];
    this.reader.onload = e => this.imageSrc2 = this.reader.result;
    this.reader.readAsDataURL(file2);

  }
  onselectedFile3(event: any) {
    this.selectedaadhar = event.target.files[0];
    const file3 = event.target.files[0];
    this.reader.onload = e => this.imageSrc3 = this.reader.result;
    this.reader.readAsDataURL(file3);

  }

  // image() {
  //   this.common.getData().subscribe((d: Document[]) => {

  //     this.retrievedDoc = d;

  //   });
  // }
}
