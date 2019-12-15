import { NgModule } from "@angular/core";
import {
    MatInputModule, MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule, MatProgressSpinnerModule, MatPaginatorModule, MatBottomSheetModule, MatNavList, MatListModule, MatChipsModule
  } from '@angular/material';


@NgModule({

    exports: [
        MatInputModule,
        MatCardModule,
        MatPaginatorModule,
        MatButtonModule,
        MatToolbarModule,
        MatProgressSpinnerModule,
        MatExpansionModule,
        MatBottomSheetModule,
        MatListModule,
        MatChipsModule
    ]
})
export class AngularMaterialModule {

}
