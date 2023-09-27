import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  memberName = "Jade";
  constructor(private postService: PostService){}

  @Input() index: number = 0;
  @Input() post?: Post;


  ngOnInit(): void {
    console.log(this.post);
  }
  delete(){
    this.postService.deleteButton(this.index);
  }
}