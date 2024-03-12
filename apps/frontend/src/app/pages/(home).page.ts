import { Component } from "@angular/core";

import { AnalogWelcomeComponent } from "./analog-welcome.component";

@Component({
  selector: "frontend-home",
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: ` <frontend-analog-welcome /> `,
})
export default class HomeComponent {}
