import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket-book',
  templateUrl: './ticket-book.component.html',
  styleUrls: ['./ticket-book.component.css']
})
export class TicketBookComponent implements OnInit {

  title = 'ticket-book-system';
  movieList =[
    {
      name:'Mission Mangal',
      path:'assets/mission-mangal.jpeg',
      price:230,
      bookedTicket:[]
    },
    {
      name:'Saho',
      path:'assets/saho.jpeg',
      price:250 ,
      bookedTicket:[]
    },
    {
      name:'X-Man:Dark Phenix',
      path:'assets/xman.jpeg',
      price:250,
      bookedTicket:[] 
    },
    {
      name:'Kabir Singh',
      path:'assets/kabirsingh.jpg',
      price:150,
      bookedTicket:[] 
    },
    {
      name:'Iron Man',
      path:'assets/ironman.jpg',
      price:230,
      bookedTicket:['A1','A2','B1','B7']
    },
     {
      name:'Alita',
      path:'assets/alita.jpeg',
      price:200 ,
      bookedTicket:['A1','A2','B1','B7']
    },
  ]
  noOfTicket:any = 1;
  selectedMovieName:any;
  value:any;
  totalAmount:any = 0;
  selectedMovieData:any = null;
  seatRows:any=['A','B','C','D','E','F','G','H','I','j']
  seatCols:any=[1,2,3,4,5,6,7,8,9,10];
  seatValue :any = [];
  seatNo:any;
  selectedSeats:any = [];
  showTicketWindow:boolean = false;
  config = {
    animated: true,
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'recognise-modal'
  };
  constructor() { }

  ngOnInit() {
  }

  
  selected(value){
    this.noOfTicket = value;
  }

  getMovieDetail(data){
    this.selectedMovieData = data
  }

  selectedSeat(i,j){

    if(this.selectedSeats.length+1 > this.noOfTicket ){
      this.selectedSeats.length = 0;
    }else{
      this.selectedSeats.push(i+j)
    }
       
  }

  isSelected(i,j){
    let val = i+j;
    let data = this.selectedSeats.find(x=> x == val)
    let booked = this.selectedMovieData.bookedTicket.find(x=> x == val)
    if(data != undefined ){
      return 'selected'
    }else if(booked != undefined){
      return 'reserved'
    }
    else{
      return 'deselected'
    }
    
  }

  conform(){
    this.selectedSeats.forEach(element => {
      this.selectedMovieData.bookedTicket.push(element)
    });
    this.selectedSeats = [];  
  }
  
}

