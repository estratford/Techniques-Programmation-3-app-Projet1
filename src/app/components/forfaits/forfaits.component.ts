import { Component, OnInit } from '@angular/core';
import { Forfait } from 'src/app/Forfait';
import { FORFAITS } from 'src/app/mock-forfaits';

@Component({
  selector: 'app-forfaits',
  templateUrl: './forfaits.component.html',
  styleUrls: ['./forfaits.component.scss']
})
export class ForfaitsComponent implements OnInit {
  forfaits: Forfait[] = FORFAITS;

  constructor() { }

  ngOnInit(): void {
  }

}
