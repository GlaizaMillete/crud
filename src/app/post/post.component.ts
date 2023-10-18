import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  
  memberName = "Jade";
  constructor(private postService: PostService, private router: Router, private actRoute: ActivatedRoute){}

  @Input() index: number = 0;
  @Input() post?: Post;
  newComment: string = '';


  ngOnInit(): void {
    console.log(this.post);
  }
  delete(){
    this.postService.deleteButton(this.index);
  }
  onEdit(){
    this.router.navigate(['/post-edit', this.index]);
  }
  onClick() {
    this.postService.likePost(this.index);
    }
  addComment(comment: string) {
    this.postService.addComment(this.index, comment);
    this.newComment = '';
  }
}