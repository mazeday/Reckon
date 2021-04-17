import {Component, Input, OnInit} from '@angular/core';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.sass']
})
export class CalculationComponent implements OnInit {
  countLast: string;
  countPre: string;
  whatCount: string;
  tarif: string;
  result: number;
  resultString: string;
  labelEnergia: string;
  labelWater: string;
  labelForm: string;

  constructor() {
    this.countLast = '';
    this.countPre = '';
    this.whatCount = '';
    this.tarif = '';
    this.result = 0;
    this.resultString = '';
    this.labelEnergia = '';
    this.labelWater = '';
    this.labelForm = '';
  }

  ngOnInit(): void {

  }

  calculate(): void {
    this.result = (Number(this.countLast) - Number(this.countPre)) * Number(this.tarif);
    this.resultString = this.result.toFixed(2);
  }

  labelChange() {
    if (this.whatCount === 'one') {
      this.labelForm = 'кВт/ч';
    } else {
      this.labelForm = 'руб/м3';
    }

  }

}
