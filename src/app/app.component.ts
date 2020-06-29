import { Component, ViewChild, HostListener } from '@angular/core';
import { MatTabGroup, MatTabChangeEvent } from '@angular/material/tabs';
import { MatRipple } from '@angular/material/core';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  @ViewChild('demoTab') demoTab: MatTabGroup;

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  titi: string[] = ['titi', 'titi', 'titi', 'titi', 'titi'];
  toto: string[] = ['toto', 'toto', 'toto', 'toto', 'toto'];

  map = {
    'typesOfShoes': this.typesOfShoes,
    'toto': this.toto,
    'titi': this.titi,
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
      if (event.key === 'ArrowRight') {
        this.demoTab.selectedIndex++;
      } else if(event.key === 'ArrowLeft') {
        this.demoTab.selectedIndex--;
      }
  }

  getKey() {
    return Object.keys(this.map);
  }

  onEnter(e: any) {
    console.warn('onEnter: ', e);
  }

  changeFocus(e: MatTabChangeEvent) {
    console.warn('changefocus: ', e)
    document.getElementById('select-' + e.tab.textLabel).focus();
  }
}
