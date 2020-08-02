import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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
  save(){

  }


  // BATTLE =============================================
//get a battle (2 gifs)
getBattle(){

}

//vote on a gif
vote(id){

}




  // LEADERBOARD ========================================
  getLeaderboard(){

  }



}
