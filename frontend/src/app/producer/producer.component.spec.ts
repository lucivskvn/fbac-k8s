import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ProducerComponent } from "./producer.component";

describe("ProducerComponent", () => {
  let component: ProducerComponent;
  let fixture: ComponentFixture<ProducerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ProducerComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
