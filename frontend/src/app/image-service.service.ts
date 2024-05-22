import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  URL = "https://api.openai.com/v1/images/generations"
  
  constructor(private http: HttpClient) { }
  generateImage(prompt: any,api_key:any) {
   
    
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${api_key}`

    })

    const body = {
      prompt: prompt,
      n: 1,
      size: "1024x1024"

    }

    return this.http.post(this.URL, body, { headers })

  }

  private image = new BehaviorSubject<any>('assets/images/project1.jpg')
  public Generate_image_url = this.image.asObservable()
  update_imgage_url(img: any) {
    this.image.next(img)
  }
}
