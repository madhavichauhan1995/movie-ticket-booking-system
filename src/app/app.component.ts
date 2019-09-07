import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticket-book-system';
  movieList =[
    {
      name:'Mission Mangal',
      path:'assets/mission-mangal.jpeg',
      price:150
    },
    {
      name:'Saho',
      path:'assets/saho.jpeg',
      price:150 
    },
    {
      name:'X-Man:Dark Phenix',
      path:'assets/xman.jpeg',
      price:150 
    },
    {
      name:'Kabir Singh',
      path:'assets/kabirsingh.jpg',
      price:150 
    },
    {
      name:'Iron Man',
      path:'assets/ironman.jpg',
      price:150 
    },
     {
      name:'Alita',
      path:'assets/alita.jpeg',
      price:150 
    },
  ]
  noOfTicket:any;
  selectedMovieName:any;
  value:any;
  totalAmount:any = 0;
  selectedMovieData:any;
  seatRows:any=['A','B','C','D','E','F','G','H','I','j']
  seatCols:any=[1,2,3,4,5,6,7,8,9,10];

  seatValue :any = [];
  seatNo:any;
  selectedSeats:any = [];
  
  selected(value){
    this.noOfTicket = value;
    this.totalAmount = this.noOfTicket * this.selectedMovieData.price;
  }

  getMovieDetail(data){
    this.selectedMovieData = data
    console.log(data)
  }

  selectedSeat(i,j){
    this.selectedSeats.push(i+j)
  }

  isSelected(i,j){
    let val = i+j;
    let data = this.selectedSeats.find(x=> x == val)
    if(data == undefined ){
      return 'selected'
    }else{
      return 'deselected'
    }
    
  }
}
