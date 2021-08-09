import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { APIResponse, Game } from 'src/app/models';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(

    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {

  }



  Details(){

    this.router.navigate(['details']);

  }

}
