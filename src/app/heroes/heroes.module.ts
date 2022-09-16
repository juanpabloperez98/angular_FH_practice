import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
    declarations: [ // Declaramos los componentes que se usan en este módulo 
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ // Los componentes que quiero hacer publicos o exportar
        ListadoComponent
    ],
    imports: [
        CommonModule
    ]

})
export class HeroesModule {}