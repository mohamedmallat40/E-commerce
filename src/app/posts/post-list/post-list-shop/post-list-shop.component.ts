import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/Services/post.service';
import { Post } from '../../post.model';

@Component({
  selector: 'app-post-list-shop',
  templateUrl: './post-list-shop.component.html',
  styleUrls: ['./post-list-shop.component.css']
})
export class PostListShopComponent implements OnInit {

  basketSub: Subscription;

  my_basket: Post[] = [];

  constructor(
    private postService: PostService
  ) {}


  ngOnInit() {
    this.basketSub = this.postService.getBasketSub().subscribe( post => {

      if(this.my_basket.includes(post)) {
        this.my_basket = this.my_basket.filter(post => post != post);
        return;
      }
      else {
        this.my_basket.push(post);
        return;
      }

    })
  }


  onDelete(post) {
    this.postService.addToBasket(post);
  }

}
