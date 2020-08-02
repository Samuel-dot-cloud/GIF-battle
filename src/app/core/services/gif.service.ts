import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Gif} from '../../models/gif.model';
@Injectable({
  providedIn: 'root'
})
export class GifService {
  apiUrl = 'https://wt-8a8bf3a2c952984defbd6bb48304b38e-0.run.webtask.io/gif-battle';

  constructor(private http: HttpClient) { }

  // CREATE =============================================
  getRandom():Observable<Gif>{
return this.http.get<Gif>(`${this.apiUrl}/random`);
  }

  // Store a gif
  save(id:string, url:string, caption:string):
  Observable<any>{
return this.http.post(this.apiUrl, {id, url, caption, votes: 0});
  }


  // BATTLE =============================================
//get a battle (2 gifs)
getBattle(): Observable<Gif[]>{
return this.http.get<Gif[]>(`${this.apiUrl}/versus`);
}

//vote on a gif
vote(id):Observable<any>{
return this.http.post(`${this.apiUrl}/vote`, {id});
}




  // LEADERBOARD ========================================
  getLeaderboard():Observable<Gif[]>{
    return this.http.get<Gif[]>(`${this.apiUrl}/leaderboard`);

  }



}
