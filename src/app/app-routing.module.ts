import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TypographyComponent } from './typography/typography.component';

const routes: Routes = [ 
    { path: '', redirectTo: '/badge', pathMatch: 'full'},
    { path: 'badge', component: BadgeComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'expansion-panel', component: ExpansionPanelComponent },
    { path: 'grid-list', component: GridListComponent },
    { path: 'list', component: ListComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'progress-spinner', component: ProgressSpinnerComponent },
    { path: 'typography', component: TypographyComponent },
    { path: "**", component: PageNotFoundComponent}
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ 
    BadgeComponent, 
    ButtonComponent,
    ExpansionPanelComponent,
    GridListComponent,
    ListComponent,
    MenuComponent,
    PageNotFoundComponent,
    ProgressSpinnerComponent,
    TypographyComponent 
]