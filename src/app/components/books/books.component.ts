import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HttpClientModule],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BooksComponent implements OnInit {
  public data: any;
  slidesPerView: number = 3;
  screenWidth!:number;

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
      this.fetchDetails();

  }


  public fetchDetails(){
    this.http.get('http://localhost:8080/api/getAll').subscribe(
      (resp:any) => {
        console.log(resp);
        this.data = resp;
      }
    )
  }

  @HostListener('window:resize')
  getScreebWidth(){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth >= 500 && this.screenWidth <= 800){
      this.slidesPerView = 1;
    }
  }

  getStarsArray(stars: number): number[] {
    return Array(stars).fill(0).map((x, i) => i + 1);
  }



}
