import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html'
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;;
  public initialValue: string = '';

  public placeholderTake: string = 'Busca por país';

  constructor(private countriesServices: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCountries.countries;
    this.initialValue = this.countriesServices.cacheStore.byCountries.term;
  }

  searchByName(term: string) {

    this.isLoading = true;

    this.countriesServices.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }

}
