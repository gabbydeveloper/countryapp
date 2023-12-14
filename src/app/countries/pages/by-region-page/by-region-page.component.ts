import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html'
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  public placeholderTake: string = 'Busca por región';

  constructor(private countriesServices: CountriesService){}


  searchByRegion(term: string) {
    this.countriesServices.searchCountry('region',term)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
