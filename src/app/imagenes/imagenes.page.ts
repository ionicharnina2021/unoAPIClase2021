import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.page.html',
  styleUrls: ['./imagenes.page.scss'],
})
export class ImagenesPage implements OnInit {
  images: string[] = [
    "s-l1a600.jpg",
    "s-l16a00.jpg",
    "s-l16f00.jpg",
    "s-l16w00.jpg",
    "s-l160aa0.jpg",
    "s-l160s0.jpg",
    "s-l1600.ajpg.jpg",
    "s-l1600.jpg",
    "s-l1600d.jpg",
    "s-l1600f.jpg",
  ];
  path = "assets/imgs/";
  
  constructor() { }

  ngOnInit() {
  }

}
