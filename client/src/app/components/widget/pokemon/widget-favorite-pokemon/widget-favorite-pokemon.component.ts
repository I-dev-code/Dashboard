import { Component, OnInit } from '@angular/core';
import {WidgetContainerComponent} from '../../widget-container.component';
import {MatDialog} from '@angular/material';
import {WidgetString} from '../../../../objects/widget-string';
import {WidgetBool} from '../../../../objects/widget-bool';

@Component({
  selector: 'app-widget-favorite-pokemon',
  templateUrl: './widget-favorite-pokemon.component.html',
  styleUrls: ['./widget-favorite-pokemon.component.scss']
})
export class WidgetFavoritePokemonComponent extends WidgetContainerComponent implements OnInit {
public imgUrl: string;

  constructor(public matDialog: MatDialog) {
      super(matDialog);
      console.log('hello wolrd');
      super.addVariable(new WidgetString('Pokemon Name', 'Rayquaza'));
      this.variables.push(new WidgetBool('Shiny', true));
      this.imgUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/384.png';
  }

  ngOnInit() {
  }

}
