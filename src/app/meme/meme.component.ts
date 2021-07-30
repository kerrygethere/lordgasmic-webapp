import { ChangeDetectorRef, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { MemeResponse } from '../models/MemeResponse';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {
  @ViewChild('search') search: ElementRef;

  memeResponse: Array<MemeResponse> = [];

  hidden: boolean;

  constructor(private lordgasmicService: LordgasmicService, private route: ActivatedRoute, private router: Router, private zone: NgZone) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      if (params.keys.length === 0) {
        this.hidden = true;
      } else {
        const tag = params.get('tag');
        this.lordgasmicService.getMemes(tag).subscribe((value) => {
          this.memeResponse = value;
          this.hidden = false;
        });
      }
    });
  }

  submit($event: Event): void {
    $event.preventDefault();

    const tag = this.search.nativeElement.value;
    this.zone.run(() => this.router.navigate([`/memes`], { queryParams: { tag } }));
  }

  copyToClipboard(url: string): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = `${location.hostname}${url}`;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

    //todo: toast
    //todo: move style into css
    //todo: fix size of copy png
  }
}
