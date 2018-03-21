import { Injectable } from '@angular/core';
import { ConnectionBackend, RequestOptions, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { AppConstants } from './config.constants';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class InterceptedHttp extends Http {
    public reqUrl: any;
    public baseuri: any = AppConstants;
    loading: any;
    userId: any;

    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }
    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        url = this.updateUrl(url);
        this.beforeRequest();
        return super.get(url, this.getRequestOptionArgs(options)).catch(this.catchErrors()).do((res: Response) => {
            this.onSuccess(res);
        }, (error: any) => {
            this.onError(error);
        })
        .finally(() => {
            this.onFinally();
        });
    }
    private onSuccess(res: Response): void {

    }
    private onError(error: any): void {
        console.log(error);
    }

    private onFinally(): void {
        this.afterRequest();
    }
    private beforeRequest(): void {

    }
    private afterRequest(): void {

    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.post(url, body, this.getRequestOptionArgs(options)).timeout(20000).catch(this.catchErrors());
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.put(url, body, this.getRequestOptionArgs(options)).catch(this.catchErrors());
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        url = this.updateUrl(url);
        return super.delete(url, this.getRequestOptionArgs(options)).catch(this.catchErrors());
    }

    private updateUrl(req: string) {
        this.reqUrl = req;
        return AppConstants.CONSTANTS.baseURL + req;
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        let headers: any;
        headers = new  Headers({ 'Content-Type': 'application/json' });
        options = new  RequestOptions({ headers: headers });
        return options;
    }

    private catchErrors() {
        return (res: Response) => {
            return Observable.throw(res);
        };
    }
}
