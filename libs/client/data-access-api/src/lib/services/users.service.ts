/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { OmitTypeClass } from '../models/omit-type-class';
import { UserDto } from '../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userControllerGetAllUser
   */
  static readonly UserControllerGetAllUserPath = '/api/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerGetAllUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerGetAllUser$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<OmitTypeClass>>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UserControllerGetAllUserPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OmitTypeClass>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userControllerGetAllUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userControllerGetAllUser(params?: {
    context?: HttpContext
  }
): Observable<Array<OmitTypeClass>> {

    return this.userControllerGetAllUser$Response(params).pipe(
      map((r: StrictHttpResponse<Array<OmitTypeClass>>) => r.body as Array<OmitTypeClass>)
    );
  }

  /**
   * Path part for operation userControllerCreateUser
   */
  static readonly UserControllerCreateUserPath = '/api/users';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userControllerCreateUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerCreateUser$Response(params: {
    context?: HttpContext
    body: UserDto
  }
): Observable<StrictHttpResponse<OmitTypeClass>> {

    const rb = new RequestBuilder(this.rootUrl, UsersService.UserControllerCreateUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<OmitTypeClass>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userControllerCreateUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  userControllerCreateUser(params: {
    context?: HttpContext
    body: UserDto
  }
): Observable<OmitTypeClass> {

    return this.userControllerCreateUser$Response(params).pipe(
      map((r: StrictHttpResponse<OmitTypeClass>) => r.body as OmitTypeClass)
    );
  }

}
