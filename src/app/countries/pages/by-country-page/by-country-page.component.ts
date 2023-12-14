import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  public placeholderTake: string = 'Busca por país';

  constructor(private countriesServices: CountriesService){}


  searchByName(term: string) {
    this.countriesServices.searchCountry('name',term)
      .subscribe(countries => {
        this.countries = countries;
      });
  }

}
