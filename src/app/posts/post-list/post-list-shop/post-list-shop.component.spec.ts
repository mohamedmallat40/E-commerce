import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListShopComponent } from './post-list-shop.component';

describe('PostListShopComponent', () => {
  let component: PostListShopComponent;
  let fixture: ComponentFixture<PostListShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
