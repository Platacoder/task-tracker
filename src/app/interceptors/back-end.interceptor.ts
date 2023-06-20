import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Users } from '../types/users';
import { Observable, of } from 'rxjs';

const mockUsersData: Users[] = 
    [
        {
            "firstName": "Steven",
            "lastName": "Garcia",
            "userId": 1,
            "taskList": [
                {
                    "taskId": 1,
                    "dateCreated": new Date("6/19/2023"),
                    "title": "Side project 1",
                    "description": "complete task-tracker side project",
                    "complete": false,
                    "dateCompleted": null

                },
                {
                    "taskId": 2,
                    "dateCreated": new Date("6/15/2023"),
                    "title": "Brainstorm project ideas",
                    "description": "brainstorm ideas for a new project",
                    "complete": true,
                    "dateCompleted": new Date("6/17/2023")

                }
            ]
        }
    ]

@Injectable()
export class BackendInterceptor implements HttpInterceptor {
    constructor(
        private _injector: Injector
    ) {}

    
    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        if(
            request.method === 'GET' &&
            request.url === 'http:localhost:4200/getUsers'
        ){
            return of(new HttpResponse({status:200, body: mockUsersData}));
        }
        return next.handle(request);
    }
}