import { Component, Element, Prop, Watch, Event, EventEmitter } from '@stencil/core';
import countries from './countries';

@Component({
  tag: 'st-countrylist'
})
export class StCountrylist {

  @Element() el: HTMLElement;

  @Prop() selected: string;
  @Prop() highlighted: string;
  @Prop() name: string;

  countries : { code: string, name: string }[];
  selectedCountry : { code: string, name: string };
  highlightList : { code: string, name: string }[];

  @Watch('selected')
  validateCountry(newValue: string/*, oldValue: string*/) {
    if (!newValue) return;
    this.selectedCountry = this._findByCodeOrName(newValue);
  }

  @Watch('highlighted')
  validateHighlighted(newValue: string/*, oldValue: string*/) {
    this.highlightList = [];
    if (!newValue) return;

    const list = newValue.split(',');
    list.forEach((item) => {
      const country = this._findByCodeOrName(item);
      if (country) this.highlightList.push(country);
    })
  }

  @Event() change : EventEmitter;

  constructor () {
  }

  componentWillLoad () {
    this.countries = countries;
    // Watch doesn't get called on first render
    this.validateCountry(this.selected);
    this.validateHighlighted(this.highlighted);
  }

  componentDidLoad () {
    const selectEl = this.el.querySelector('select');
    selectEl.addEventListener('change', _ => {
      const selectedOption = selectEl.options[selectEl.selectedIndex].value;
      const selectedCountry = this._findByCodeOrName(selectedOption);
      this.change.emit(selectedCountry);
    })
  }

  _findByCodeOrName (value : string) {
    if (!value) return;

    if (value.length > 2)
      return this.countries.find(c => c.name.toLowerCase() === value.toLowerCase());
    else
      return this.countries.find(c => c.code.toLowerCase() === value.toLowerCase());
  }

  _renderOption(country : { code: string, name: string}) {
    const selectedCode = this.selectedCountry ? this.selectedCountry.code : false;

    if (selectedCode === country.code)
      return (<option value={country.code} selected>{country.name}</option>);
    else
      return (<option value={country.code}>{country.name}</option>);
  }

  render() {
    // Copy array
    let otherCountries = this.countries.slice();
    // Remove highlighted countries from the list
    if (this.highlightList.length)
      otherCountries = otherCountries.filter(item => this.highlightList.some(e => e.code !== item.code));

    return (
      <select name={this.name}>
        <option disabled selected>Select Country</option>
        {this.highlightList.map((country) => this._renderOption(country))}
        <option style={{fontSize: '1pt', backgroundColor: '#000000'}} disabled></option>
        {otherCountries.map((country) => this._renderOption(country))}
      </select>
    )
  }
}
