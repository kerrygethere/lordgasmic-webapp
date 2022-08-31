import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from './services/lordgasmic/lordgasmic.service';
import { WebappConstants } from './configuration/WebappConstants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lordgasmic-app';

  constructor(private lordgasmicService: LordgasmicService) {}

  ngOnInit(): void {
    this.loadSessionInfo();
  }

  private loadSessionInfo(): void {
    this.lordgasmicService.getSessionInfo().subscribe((sessionInfo) => {
      console.log('sessionInfo: ', sessionInfo);
      sessionStorage.setItem('username', sessionInfo.username);
      sessionStorage.setItem('roles', String(sessionInfo.roles));
      this.setPreviousPageUrl();
    });
  }

  private setPreviousPageUrl(): void {
    try {
      window.sessionStorage.setItem(WebappConstants.PREVIOUS_URL, window.location.href);
    } catch (e) {}
  }
}
