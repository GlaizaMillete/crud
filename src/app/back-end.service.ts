import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private postService: PostService, private http: HttpClient) { }



  saveData() {
    const listOfPost: Post[] = this.postService.getPost();
    this.http.put('https://cc105-jade-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', listOfPost)
      .subscribe((res) => {
        console.log(res);
      })
  }

  fetchData() {
    this.http.get<Post[]>('https://cc105-jade-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json')
      .pipe(tap((listOfPost: Post[]) => {
        // Ensure that the comments field is an array for each post
        listOfPost.forEach(post => {
          if (!Array.isArray(post.comments)) {
            post.comments = [];
          }
          // Convert the dateCreated string to a Date object
          post.dateCreated = new Date(post.dateCreated);
        });
        this.postService.setPost(listOfPost);
        this.postService.listChangeEvent.emit(listOfPost); // Emit the event here
      })
      ).subscribe()
  }

}
