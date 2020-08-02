import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  apiUrl = 'https://wt-8a8bf3a2c952984defbd6bb48304b38e-0.run.webtask.io/gif-battle';

  constructor(private http: HttpClient) { }

  // CREATE =============================================
  getRandom(){
return this.http.get(`${this.apiUrl}/random`);
  }

  // Store a gif
  save(id:string, url:string, caption:string):
  Observable<any>{
return this.http.post(this.apiUrl, {id, url, caption, votes: 0});
  }


  // BATTLE =============================================
//get a battle (2 gifs)
getBattle(): Observable<any>{
return this.http.get(`${this.apiUrl}/versus`);
}

//vote on a gif
vote(id){
return this.http.post(`${this.apiUrl}/vote`, {id});
}




  // LEADERBOARD ========================================
  getLeaderboard(){

  }



}
