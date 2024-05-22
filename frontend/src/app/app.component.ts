import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImageServiceService } from './image-service.service';
import { PrivateService } from './private.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
constructor(private service:ImageServiceService,private secret:PrivateService){}
  ngOnInit(): void {
   this.service.Generate_image_url.subscribe((url)=>{
this.image_url=url
   })
   this.Api_key=this.secret.API_KEY
  }

  description=""
image_url:any=""

//api key of the openai api
Api_key:any
// loading=false
text_loading=false
// progress_bar="progress-complete"
progress_text="text-complete"
  generate(){
    if (this.description!="") {
      this.image_url=''
      this.text_loading=true
      this.service.generateImage(this.description,this.Api_key).subscribe((res:any)=>{
        console.log(res);
        
        this.service.update_imgage_url(res.data[0].url)
        // this.loading=true
      })
      console.log(this.description);
      // this.loading=true

    }
    this.description=''
   this.text_loading=false
  }
  
  

}
