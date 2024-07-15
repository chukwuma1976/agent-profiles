import { Component } from '@angular/core';

@Component({
  selector: 'app-header-banner',
  standalone: true,
  imports: [],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.css'
})
export class HeaderBannerComponent {
  agentImage = "data:image/png;base64,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";
  spyGlass = "data:image/png;base64,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"
}
