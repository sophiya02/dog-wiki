import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LayoutBreakpoints } from 'resources/shared.resources';
import { Observable } from 'rxjs';
import { Top10 } from 'src/lib/models/models';
import { AutocompleteService } from 'src/lib/services/autocomplete.service';

@Component({
  selector: 'app-top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.scss']
})
export class Top10Component implements AfterViewInit {

  get isDesktopScreen() : boolean {
    return this.breakpointObserver.isMatched([LayoutBreakpoints.DESKTOP])
  }

  get isLargeDesktopScreen() : boolean {
    return this.breakpointObserver.isMatched([LayoutBreakpoints.LARGE_DESKTOP])
  }

  get isMobileScreen() : boolean {
    return this.breakpointObserver.isMatched([LayoutBreakpoints.MOBILE])
  }

  get isTabScreen() : boolean {
    return this.breakpointObserver.isMatched([LayoutBreakpoints.TAB])
  }
  isLoading=true;
  top10: Observable<Top10[]>;
  constructor(
    private autocompleteService : AutocompleteService,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef,
  ) {
    this.top10=this.autocompleteService.getTop10('10');
  }

ngOnInit(){
  this.top10.subscribe(()=>{
    this.isLoading=false;
  })
}

  ngAfterViewInit(){
    const subs1 = this.breakpointObserver.observe([
      LayoutBreakpoints.DESKTOP,
      LayoutBreakpoints.LARGE_DESKTOP,
      LayoutBreakpoints.MOBILE,
      LayoutBreakpoints.TAB
    ]).subscribe(()=> this.cd.markForCheck());
  }

}
