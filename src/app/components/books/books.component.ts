import { CommonModule } from '@angular/common';
import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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



  getStarsArray(stars: number): number[] {
    return Array(stars).fill(0).map((x, i) => i + 1);
  }



}
