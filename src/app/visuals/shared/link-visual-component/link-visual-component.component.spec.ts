import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkVisualComponentComponent } from './link-visual-component.component';

describe('LinkVisualComponentComponent', () => {
  let component: LinkVisualComponentComponent;
  let fixture: ComponentFixture<LinkVisualComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkVisualComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkVisualComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
