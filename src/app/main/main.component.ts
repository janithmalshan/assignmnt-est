import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  accounts = [
    {"id":1, "name": "n26"},
    {"id":2, "name": "you"},
    {"id":3, "name": "metal"} 
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onSelect(account){
    this.router.navigate(['/account', account.id]);
  }

}
