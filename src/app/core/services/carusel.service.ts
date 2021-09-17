/* import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICarusel } from "../models/home/iCarusel";

@Injectable({
    providedIn: 'root'
})

export class CaruselService {
    private caruselBaseUrl = 'api/home/carusel'

    constructor(private http: HttpClient) { }

    getCarusel(): Observable<ICarusel[]> {
        return this.http.get<ICarusel[]>(this.caruselBaseUrl);
    }
} */