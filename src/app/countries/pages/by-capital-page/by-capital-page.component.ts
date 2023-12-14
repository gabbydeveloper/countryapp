import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  public placeholderTake: string = 'Busca por capital';

  constructor(private countriesServices: CountriesService){}


  searchByCapital(term: string) {
    this.countriesServices.searchCountry('capital',term)
      .subscribe(countries => {
        this.countries = countries;
      });
  }
}
