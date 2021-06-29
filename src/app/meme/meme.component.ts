import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LordgasmicService } from '../services/lordgasmic/lordgasmic.service';
import { MemeResponse } from '../models/MemeResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meme',
  templateUrl: './meme.component.html',
  styleUrls: ['./meme.component.scss']
})
export class MemeComponent implements OnInit {
  @ViewChild('search') search: ElementRef;

  memeResponse: Array<MemeResponse>;

  hidden: boolean;

  constructor(private lordgasmicService: LordgasmicService, private router: Router) {}

  ngOnInit(): void {
    this.hidden = true;
  }

  submit(): void {
    const tag = this.search.nativeElement.value;

    this.lordgasmicService.getMemes(tag).subscribe((value) => {
      this.memeResponse = value;
      console.log(value);
      this.hidden = false;
    });
  }
}
