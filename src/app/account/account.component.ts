import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public accountId;
  public accountName;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.accountId = id;
     
    switch (id){
      case 1:
      this.accountName='N26';
      break;
      case 2:
      this.accountName='N26 You';
      break;
      case 3:
      this.accountName='N26 Metal';
      break;
      default:
      this.accountName='N26 Invalid';
      break;
    }
  }

}
