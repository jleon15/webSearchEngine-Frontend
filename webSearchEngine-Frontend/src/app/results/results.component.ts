import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QueryProcessorService} from '../services/query-processor.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  showedResults = [];
  results = ['1abababababababababaa1abababababababababaa1abababababababababaa1abababababababababaa1abababababababababaa', 2, 3, 4, 5, 6, 7, 8, 9, 10];

  pageSize = 5;
  currentPage = 0;

  resultsLoaded = false;

  constructor(private route: ActivatedRoute, private queryProcessorService: QueryProcessorService, private router: Router) {
  }

  ngOnInit() {
    const query = this.route.snapshot.queryParamMap.get('query');
    this.processQueryRequest(query);
  }

  onPageChange() {
    if (this.results) {
      this.showedResults = this.results.slice((this.currentPage - 1) * this.pageSize, ((this.currentPage) * this.pageSize));
    }
  }

  processQueryRequest(query: string) {
    this.queryProcessorService.processQueryRequest(query).then(response => {
      console.log(response);
      this.resultsLoaded = true;
    });
  }

  onSearch(value: string) {
    this.router.navigate(['/results'], {  queryParams: {query: value}});
    this.resultsLoaded = false;
    this.processQueryRequest(value);
  }

}
