import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpParamsInterceptor implements HttpInterceptor {

    constructor () {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({
            setParams: {
                key: '4d208def1ef74b11aaa261bb738eebe3'
            }
        });
        return next.handle(req);
    }
}