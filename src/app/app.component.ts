import { Component, OnInit } from '@angular/core';
import { LordgasmicService } from './services/lordgasmic/lordgasmic.service';
import { logger } from 'codelyzer/util/logger';

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
    });
  }
}
