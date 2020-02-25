import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  escalacao = '';
  time = '';

  formacoes = [
    '3-1-4-2',
    '3-4-1-2',
    '3-4-2-1',
    '3-4-3',
    '3-4-3 Diamond',
    '3-4-3 Flat',
    '3-5-1-1',
    '3-5-2',
    '4-1-2-1-2 Narrow',
    '4-1-2-1-2 Wide',
    '4-1-3-2',
    '4-1-4-1',
    '4-2-2-2',
    '4-2-3-1 Narrow',
    '4-2-3-1 Wide',
    '4-2-4',
    '4-3-1-2',
    '4-3-2-1',
    '4-3-3 Attack',
    '4-3-3 Defend',
    '4-3-3 False 9',
    '4-3-3 Flat',
    '4-3-3 Holding',
    '4-4-1-1 Attack',
    '4-4-1-1 Midfield',
    '4-4-2 Flat',
    '4-4-2 Holding',
    '4-5-1 Attack',
    '4-5-1 Flat',
    '5-2-1-2',
    '5-3-2',
    '5-4-1 Diamond',
    '5-4-1 Flat'];

    times = [
      'FC Barcelona',
      'Manchester City',
      'Real Madrid',
      'Juventus',
      'PSG',
      'Liverpool',
      'FC Bayern',
      'Atletico Madrid',
      'França',
      'Espanha',
      'Alemanha',
      'Bélgica',
      'Portugal',
      'Itália',
      'Holanda'
    ];

  ngOnInit() {
  }

  sortear() {
    const timer = setInterval(() => {
      this.escalacao = this.formacoes[Math.floor(Math.random() * this.formacoes.length)];
      this.time = this.times[Math.floor(Math.random() * this.times.length)];
    }, 10);

    setTimeout(() => {
      clearInterval(timer);
    }, 500);
  }

}
