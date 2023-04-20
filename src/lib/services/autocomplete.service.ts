import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, tap } from 'rxjs';
import { Breeds, Top10, Breed, BreedImage } from '../models/models';

const url = 'https://dog-wiki-backend.onrender.com/api/v1';
const api_key ="live_QbqRTaWtOQtvMQrPVp2MFpVU7z9i2GvfMrxHluMG3SWs8eyqtkMr5i7Xu9vjPemJ";
@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(private http: HttpClient) { }

  getAllBreeds(): Observable<Breeds[]>{
    console.log('inside getbreeds')
    let breeds:Observable<Breeds[]>;
    return this.http.get(`${url}/breeds`, {
      headers: {
        'x-api-key': api_key
      }
    }).pipe(

      map(v=>{ return(v as any).breeds}),
      // tap(v=>console.log('v1',v)),
    )

  }

  getTop10(limit:string): Observable<Top10[]>{
    console.log('inside getTop10')
    return this.http.get(`${url}/top10?limit=${limit}`, {
      headers: {
        'x-api-key': api_key
      }
    }).pipe(

      map(v=>{ return(v as any).top10}),
      // tap(v=>console.log('v1',v)),
    )

  }

  getBreed(id:string): Observable<Breed>{
    console.log('inside getBreed')
    console.log('id',id);
    return this.http.get(`${url}/breeds/${id}`, {
      headers: {
        'x-api-key': api_key
      }
    }).pipe(
      tap(v=>console.log('v',v)),
      map(v=> {return(v as any).breed})
    )
  }

  getImages(id:string): Observable<BreedImage[]>{
    return this.http.get(`${url}/images`, {
      headers: {
        'x-api-key': api_key
      },
      params:{
        limit: 8,
        breed_ids: id
      }
    },
    ).pipe(
      tap(v=>console.log('v',v)),
      map(v=> {return(v as any).imgs})
    )
  }
  getImage(id:string): Observable<BreedImage>{
    return this.http.get(`${url}/images/${id}`, {
      headers: {
        'x-api-key': api_key
      },
    }).pipe(
      tap(v=>console.log('v',v)),
      map(v=> {return(v as any).img})
    )
  }


}
