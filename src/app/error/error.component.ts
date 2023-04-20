import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LayoutBreakpoints } from 'resources/shared.resources';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, AfterViewInit {
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
  constructor(
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    const subs1 = this.breakpointObserver.observe([
      LayoutBreakpoints.DESKTOP,
      LayoutBreakpoints.LARGE_DESKTOP,
      LayoutBreakpoints.MOBILE,
      LayoutBreakpoints.TAB
    ]).subscribe(()=> this.cd.markForCheck());

  }

}
