import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  form: FormGroup;
  buttonClicked:string;

  constructor(public fb: FormBuilder ) {
    this.refreshTablesData();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      location: [''],
      date: [new Date()],
      time: [''],
      sits: ['']
    });
  }

  refreshTablesData() {
    const firstFloor = []; 
    let names = ['singlet', 'Duet', 'Triplet', 'quartet','quintet','familyPack'];
    let chairs = ['1', '2', '3', '4', '5', '8'];
    let tableCounts = ['5', '5', '3', '3','2', '1'];
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const chair = chairs[i];
      const tableCount = tableCounts[i];
      firstFloor.push({ name, chairs, tableCount });
    }
  }

  submit() {
      if(this.buttonClicked == 'checkEligibility') {
        console.log(this.form.value);
      } else {
        console.log(this.form.value);
      }
  }

}
