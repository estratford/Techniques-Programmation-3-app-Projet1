import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from 'src/app/Forfait';
import { FORFAITS } from 'src/app/mock-forfaits';

@Component({
  selector: 'app-mini-forfaits',
  templateUrl: './mini-forfaits.component.html',
  styleUrls: ['./mini-forfaits.component.scss']
})
export class MiniForfaitsComponent implements OnInit {
  forfaits: Forfait[] = FORFAITS;
  constructor() { }

  ngOnInit(): void {
  }

}
