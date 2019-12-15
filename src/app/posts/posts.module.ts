import { NgModule } from '@angular/core';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostListComponent } from './post-list/post-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostListShopComponent } from './post-list/post-list-shop/post-list-shop.component';


@NgModule({
    declarations: [
        PostCreateComponent,
        PostListComponent,
        PostListShopComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AngularMaterialModule,
    ]
})

export class PostsModule {

}