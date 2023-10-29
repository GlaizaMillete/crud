import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index: number = 0;
  editMode = false;
  constructor(private postService: PostService, private router: Router, private actRoute: ActivatedRoute) {
  }


  ngOnInit(): void {

    let editTitle = '';
    let editDescription = '';
    let editImgPath = '';
    let editAuthor ='';

    this.actRoute.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);
        this.index = params['index'];

        const editPost = this.postService.getSpecPost(this.index);

        editTitle = editPost.title;
        editDescription = editPost.description;
        editImgPath = editPost.imgPath;
        editAuthor = editPost.author;

        this.editMode = true;
      }
    }
    )

    this.form = new FormGroup({
      title: new FormControl(editTitle, [Validators.required]),
      imgPath: new FormControl(editImgPath, [Validators.required]),
      description: new FormControl(editDescription, [Validators.required]),
      author: new FormControl(editAuthor, [Validators.required]),
      numberOfLikes: new FormControl(0) // Add this line for the new post to have 0 likes and add when button is clicked
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const title = this.form.value.title;
      const imgPath = this.form.value.imgPath;
      const description = this.form.value.description;
      const author = this.form.value.author;
      const numberOfLikes = this.form.value.numberOfLikes;

      let comments: { comment: string; date: Date }[] | undefined = [];
      let date: Date = new Date(); // set default date to current date

      if (this.editMode) {
        const originalPost = this.postService.getSpecPost(this.index);
        comments = originalPost.comments;
        date = originalPost.dateCreated; // set date to original post's date
      }

      const post: Post = new Post(title, imgPath, description, author, date, numberOfLikes, comments);

      if (this.editMode == false) {
        this.postService.addPost(post);
      } else {
        this.postService.updatePost(this.index, post);
      }

      this.router.navigate(['post-list']);
    } else {
      // Handle form validation errors
    }
  }
}