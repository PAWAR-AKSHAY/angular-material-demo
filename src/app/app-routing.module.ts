import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { InputsComponent } from './inputs/inputs.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { TypographyComponent } from './typography/typography.component';
import { VirtualScrollingComponent } from './virtual-scrolling/virtual-scrolling.component';


const routes: Routes = [ 
    { path: '', redirectTo: '/badge', pathMatch: 'full'},
    { path: 'badge', component: BadgeComponent },
    { path: 'button', component: ButtonComponent },
    { path: 'card', component: CardComponent },
    { path: 'dialog', component: DialogComponent },
    { path: 'expansion-panel', component: ExpansionPanelComponent },
    { path: 'grid-list', component: GridListComponent },
    { path: 'inputs', component: InputsComponent },
    { path: 'list', component: ListComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'progress-spinner', component: ProgressSpinnerComponent },
    { path: 'snack-bar', component: SnackBarComponent },
    { path: 'stepper', component: StepperComponent },
    { path: 'table', component: TableComponent },
    { path: 'tabs', component: TabsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'virtual-scrolling', component: VirtualScrollingComponent },
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
    CardComponent,
    DialogComponent,
    ExpansionPanelComponent,
    GridListComponent,
    InputsComponent,
    ListComponent,
    MenuComponent,
    PageNotFoundComponent,
    ProgressSpinnerComponent,
    SnackBarComponent,
    StepperComponent,
    TableComponent,
    TabsComponent,
    TypographyComponent,
    VirtualScrollingComponent
]