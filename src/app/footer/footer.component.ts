import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { LayoutBreakpoints } from 'resources/shared.resources';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements AfterViewInit {
  get isDesktopScreen(): boolean {
    return this.breakpointObserver.isMatched([LayoutBreakpoints.DESKTOP]);
  }

  get isLargeDesktopScreen(): boolean {
    return this.breakpointObserver.isMatched([LayoutBreakpoints.LARGE_DESKTOP]);
  }

  get isMobileScreen(): boolean {
    return this.breakpointObserver.isMatched([LayoutBreakpoints.MOBILE]);
  }

  get isTabScreen(): boolean {
    return this.breakpointObserver.isMatched([LayoutBreakpoints.TAB]);
  }

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    const subs1 = this.breakpointObserver
      .observe([
        LayoutBreakpoints.DESKTOP,
        LayoutBreakpoints.LARGE_DESKTOP,
        LayoutBreakpoints.MOBILE,
        LayoutBreakpoints.TAB,
      ])
      .subscribe(() => this.cd.markForCheck());
  }
}
