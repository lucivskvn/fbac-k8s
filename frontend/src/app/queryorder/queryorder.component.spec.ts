import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { QueryorderComponent } from "./queryorder.component";

describe("QueryorderComponent", () => {
  let component: QueryorderComponent;
  let fixture: ComponentFixture<QueryorderComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [QueryorderComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
