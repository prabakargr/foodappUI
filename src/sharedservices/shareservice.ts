import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ShareService {
    value:any;
    constructor(private http: Http){}

    setvalue(value){
        this.value=value
        console.log(value)
    }
    getvalue(){
        return this.value;
        console.log(this.value);
    }
}