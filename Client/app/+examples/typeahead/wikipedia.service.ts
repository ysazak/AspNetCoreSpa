import { Component, Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WikipediaService {
    constructor(public _jsonp: Jsonp) { }

    public search(term: string) {
        let wikiUrl = 'https://en.wikipedia.org/w/api.php';
        let params = new URLSearchParams();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');

        return this._jsonp
            .get(wikiUrl, { search: params })
            // tslint:disable-next-line:whitespace
            .map(response => <string[]>response.json()[1]);
    }
}
