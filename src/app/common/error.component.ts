import { ActivatedRoute, Data, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss'],

})
export class ErrorComponent implements OnInit {

    state$: Observable<any>;
    data: Data;

    constructor(
        private activatedRoute: ActivatedRoute,
        private seoService: SeoService) {
        //comment
    }

    ngOnInit() {

        this.state$ = this.activatedRoute.paramMap.pipe(map(() => window.history.state));

        this.data = this.activatedRoute.snapshot.data;
        
        this.seoService.setTitle('Erreur');
    }
}

