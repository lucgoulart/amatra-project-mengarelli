import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteClienteComponent } from './site-cliente.component';

describe('SiteClienteComponent', () => {
  let component: SiteClienteComponent;
  let fixture: ComponentFixture<SiteClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
