import { BreakpointObserver } from '@angular/cdk/layout';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LayoutBreakpoints } from 'resources/shared.resources';
import { Observable, combineLatest, map, switchMap } from 'rxjs';
import { Breed, BreedImage } from 'src/lib/models/models';
import { AutocompleteService } from 'src/lib/services/autocomplete.service';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss'],
})
export class BreedsComponent implements AfterViewInit {
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
  id: string = '';
  breed: Observable<{
    breedDetails: Breed;
    breed_image_url: BreedImage;
    breed_images: BreedImage[];
  }>;
  isLoading: boolean = true;
  constructor(
    private actRoute: ActivatedRoute,
    private autocompleteService: AutocompleteService,
    private breakpointObserver: BreakpointObserver,
    private cd: ChangeDetectorRef
  ) {
    this.actRoute.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.breed = this.autocompleteService.getBreed(this.id).pipe(
      switchMap((breedDetails: Breed) => {
        const image_reference_id = breedDetails.reference_image_id;
        const img = this.autocompleteService.getImage(image_reference_id);
        const imgs = this.autocompleteService.getImages(image_reference_id);
        return combineLatest([img, imgs]).pipe(
          map(([breed_image_url, breed_images]) => ({
            breedDetails,
            breed_image_url,
            breed_images,
          }))
        );
      })
    );
    this.breed.subscribe((v) => {
      console.log('breeed', v);
    });
  }

  ngOnInit() {
    this.breed.subscribe((v) => {
      this.isLoading = false;
    });
  }

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
