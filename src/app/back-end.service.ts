import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private postService: PostService, private http: HttpClient) { }



  saveData() {
    this.postService.getPost().subscribe(listOfPost => {
      this.http.put('https://cc105-jade-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json', listOfPost)
        .subscribe((res) => {
          console.log(res);
        })
    });
  }

  fetchData() {
    firebase.database().ref('/posts')
      .on('value', (snapshot) => {
        const listOfPost: Post[] = snapshot.val();
        listOfPost.forEach(post => {
          if (!Array.isArray(post.comments)) {
            post.comments = [];
          }
          post.dateCreated = new Date(post.dateCreated);
        });
        this.postService.setPost(listOfPost);
        this.postService.listChangeEvent.emit(listOfPost); // Emit the event here
      });
  }

}
