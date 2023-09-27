import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  constructor(private postService: PostService, private router: Router) {
  }


  ngOnInit(): void {
    this.form = new FormGroup({
      title : new FormControl(null, [Validators.required]),
      imgPath: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      author: new FormControl('jade', [Validators.required])
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const title = this.form.value.title;
      const imgPath = this.form.value.imgPath;
      const description = this.form.value.description;
      const author = this.form.value.author;


    const post: Post = new Post(title, imgPath, description, author , new Date()
    );

    this.postService.addPost(post)

    this.router.navigate(['post-list']);
    } else {
      // Handle form validation errors
    }

  }
}
