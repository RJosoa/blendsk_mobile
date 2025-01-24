import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRolesUpdateComponent } from './users-roles-update.component';

describe('UsersRolesUpdateComponent', () => {
  let component: UsersRolesUpdateComponent;
  let fixture: ComponentFixture<UsersRolesUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRolesUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersRolesUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
