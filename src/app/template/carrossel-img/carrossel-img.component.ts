import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrossel-img',
  templateUrl: './carrossel-img.component.html',
  styleUrls: ['./carrossel-img.component.scss']
})
export class CarroselImgComponent implements OnInit {

  constructor() { }
  @Input() inputCarrossel = 100;
  ngOnInit(): void {
  }

}
