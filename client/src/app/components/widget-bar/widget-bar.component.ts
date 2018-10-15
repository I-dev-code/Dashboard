import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {ResizeEvent} from 'angular-resizable-element';
import {$} from 'jquery';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'app-widget-bar',
    templateUrl: './widget-bar.component.html',
    styleUrls: ['./widget-bar.component.scss'],
})

export class WidgetBarComponent implements OnInit {
    nav = [];
    navBarWidth = '250px';

    constructor() {
            this.nav = [this.newTab(`Pokemons`, 'assets/icons/pokemon.svg', '/pokemons'),
            this.newTab(`Steam`, 'assets/icons/basic.svg', '/steam'),
            this.newTab(`Twitter`, 'assets/icons/twitter.svg', '/twitter'),
            this.newTab(`Weather`, 'assets/icons/weather.svg', '/weather'),
            this.newTab(`Youtube`, 'assets/icons/youtube.svg', '/youtube')];
    }

    ngOnInit() {
    }

    newTab(name, svg, link) {
        return {name: name, svglink: svg, link: link};
    }

    onResizeEnd(event: ResizeEvent): void {
        console.log('Element was resized', event);
        this.navBarWidth = event.rectangle.right + 'px';
        console.log('resize');
    }
}