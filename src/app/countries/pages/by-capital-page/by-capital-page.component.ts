import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html'
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  public placeholderTake: string = 'Busca por capital';

  constructor(private countriesServices: CountriesService){}

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }


  searchByCapital(term: string) {

    this.isLoading = true;

    this.countriesServices.searchCapital(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      });
  }
}
