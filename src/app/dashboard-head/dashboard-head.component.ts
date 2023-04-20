import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { LayoutBreakpoints } from 'resources/shared.resources';
import { Observable, Subscription, filter } from 'rxjs';
import { Breeds, Top10 } from 'src/lib/models/models';
import { AutocompleteService } from 'src/lib/services/autocomplete.service';

@Component({
  selector: 'app-dashboard-head',
  templateUrl: './dashboard-head.component.html',
  styleUrls: ['./dashboard-head.component.scss']
})
export class DashboardHeadComponent implements AfterViewInit, OnInit {

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
  subs= new Subscription();
  desktop_header='https://img.icons8.com/ios-glyphs/90/null/dog-jump.png';
  tab_header='https://img.icons8.com/ios-glyphs/60/null/dog-jump.png';
  breeds:Observable<Breeds[]>;
  top10:Observable<Top10[]>;

  breedOption= new FormControl(null);
  isLoading: boolean= true;
  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    public autocompleteService: AutocompleteService,
    private cd: ChangeDetectorRef,
  ) {
    this.breeds=this.autocompleteService.getAllBreeds();
    this.top10=this.autocompleteService.getTop10('4')
    console.log('this.breeds',this.breeds);
  }



  ngOnInit(){
    this.top10.subscribe((v)=>{
        this.isLoading=false;
    });
  }

  ngAfterViewInit(){
    const subs1 = this.breakpointObserver.observe([
      LayoutBreakpoints.DESKTOP,
      LayoutBreakpoints.LARGE_DESKTOP,
      LayoutBreakpoints.MOBILE,
      LayoutBreakpoints.TAB
    ]).subscribe(()=> this.cd.markForCheck());

    const subs2 = this.breedOption.valueChanges.pipe(filter(v=>v!=null)).subscribe((v)=>{
      console.log(v);
    })
  }


  onClick(event: Event){
    // event.preventDefault();
    console.log('clicked');
    // console.log(this.breeds);
    console.log('this.breeds',this.breeds);
  }

  onOptionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event);
    this.navigateToBreed(event.option.id)
  }

  navigateToBreed(id:string){
    console.log(this.breedOption.value)
    this.router.navigate([`/breeds/${this.breedOption.value}`]);
  }


}
