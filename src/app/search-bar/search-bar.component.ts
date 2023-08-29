import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchGameForm?: FormGroup;
  search: string = "";



  constructor(
    private router: Router
  ) { }


  ngOnInit() {

    this.searchGameForm = new FormGroup({
      'search': new FormControl('')
    })
  }

  onSubmit(form: FormGroup) {
    if (this.search != "") {
      this.router.navigate(['search', form.value.search]);
    }
  }

  redirectToHome(){
    this.router.navigate([''])
    this.searchGameForm.reset();
  }
}
