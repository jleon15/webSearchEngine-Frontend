import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QueryProcessorService} from '../services/query-processor.service';

class Result {
  alias: string;
  url: string;
  cacheURL: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  static readonly CACHE_RESULT_PATH = 'http://localhost/Coleccion/';

  showedResults: Result[] = [];
  results: Result[] = [];

  pageSize = 10;
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
      const results = JSON.parse(JSON.stringify(response));
      this.processResults(results.queryResults);
      this.resultsLoaded = true;
    });
  }

  onSearch(value: string) {
    this.router.navigate(['/results'], {  queryParams: {query: value}});
    this.resultsLoaded = false;
    this.processQueryRequest(value);
    location.reload();
  }

  processResults(results: any[]) {
    results.forEach(result => {
      const newResult = new Result();
      newResult.alias = result.key;
      newResult.url = result.value;
      newResult.cacheURL = ResultsComponent.CACHE_RESULT_PATH + result.key + '.html';
      this.results.push(newResult);
    });
  }

}
