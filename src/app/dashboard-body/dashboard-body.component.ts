import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { LayoutBreakpoints } from 'resources/shared.resources';

@Component({
  selector: 'app-dashboard-body',
  templateUrl: './dashboard-body.component.html',
  styleUrls: ['./dashboard-body.component.scss'],
})
export class DashboardBodyComponent implements AfterViewInit {
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
