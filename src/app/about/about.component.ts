import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  constructor() {
   }

  ngOnInit() {
  }

  setUserName(newname: string) {
    alert("Name has been set to " + newname);
    sessionStorage.setItem('name', newname);
  }

}
