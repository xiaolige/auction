import { Component, OnInit,Input,Output,EventEmitter, OnChanges, SimpleChange } from '@angular/core';


@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit,OnChanges {
  @Input()
  private readonly:boolean= true;
  @Input()
  private  rating:number = 0;
  @Output()
  private  ratingChange:EventEmitter<number>= new EventEmitter();
  private stars:boolean[];
  constructor() { }

  ngOnInit() {
    this.stars =[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
  }
  ngOnChanges(){
    this.stars =[];
    for(let i=1;i<=5;i++){
      this.stars.push(i>this.rating);
    }
   
  }
  clickStar(index:number){
    if(!this.readonly){
      this.rating = index +1;
      this.ratingChange.emit(this.rating);
    }
  }

}
