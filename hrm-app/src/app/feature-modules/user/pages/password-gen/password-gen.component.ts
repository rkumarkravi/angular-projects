import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-gen',
  templateUrl: './password-gen.component.html',
  styleUrls: ['./password-gen.component.css'],
})
export class PasswordGenComponent implements OnInit {
  allowedPasswordGen: { type: string; allowed: boolean }[] = [
    { type: 'Uppercase Alphabets', allowed: true },
    { type: 'Lowercase Alphabets', allowed: true },
    { type: 'Symbols', allowed: false },
    { type: 'Numbers', allowed: true },
    { type: 'Spaces', allowed: false },
  ];

  finalString: string = '';

  lengthOfPass: number = 10;
  constructor(private clipboard: Clipboard) {}

  ngOnInit() {
    this.refresh();
  }

  refresh(){
    this.generatorLogic();
  }

  copyPass() {
    this.clipboard.copy(this.finalString);
  }

  generatorLogic() {
    this.finalString = '';
    let sections = this.allowedPasswordGen.filter(
      (x) => x.allowed == true
    ).length;
    let sectionCount = this.lengthOfPass / sections;
    console.log(`section Count:${sectionCount}`)
    this.allowedPasswordGen.filter(x=>x.allowed).forEach((x) => {
      switch (x.type) {
        case 'Uppercase Alphabets':
          this.finalString += this.getRandomUpperCaseAlphabets(sectionCount);
          break;
        case 'Lowercase Alphabets':
          this.finalString += this.getRandomLowerCaseAlphabets(sectionCount);
          break;
        case 'Symbols':
          this.finalString += this.getRandomSpecialSymbol(sectionCount);
          break;
        case 'Numbers':
          this.finalString += this.getRandomNumbers(sectionCount);
          break;
        case 'Spaces':
          this.finalString += ' ';
          break;
      }
    });
let afterSplit=this.finalString.split('');
afterSplit.length=this.lengthOfPass;
    this.finalString=afterSplit.sort(function (a, b) {
      return 0.5 - Math.random();
    }).join('');
  }

  getRandomUpperCaseAlphabets(secCount: number) {
    let a: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let random: string = '';
    for (let i = 0; i < secCount; i++) {
      random += a[this.randomNumber(0, a.length - 1)];
    }

    return random;
  }

  getRandomLowerCaseAlphabets(secCount: number) {
    let a: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.toLowerCase().split('');
    let random: string = '';
    for (let i = 0; i < secCount; i++) {
      random += a[this.randomNumber(0, a.length - 1)];
    }
    return random;
  }

  getRandomSpecialSymbol(secCount: number) {
    let a: string[] = '@#$%&*+'.toLowerCase().split('');
    let random: string = '';
    for (let i = 0; i < secCount; i++) {
      random += a[this.randomNumber(0, a.length - 1)];
    }
    return random;
  }

  getRandomNumbers(secCount: number) {
    let a: string[] = '1234567890'.toLowerCase().split('');
    let random: string = '';
    for (let i = 0; i < secCount; i++) {
      random += a[this.randomNumber(0, a.length - 1)];
    }
    return random;
  }

  randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
