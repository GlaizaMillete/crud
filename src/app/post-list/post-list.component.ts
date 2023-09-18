import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  n=0;
  listofPosts: Post[]=[
  new Post("The Verge", "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/the-verge-website-homepage.webp", "The Verge is a blog focused on examining how technology will change the future. This blog provides news and opinion pieces on the latest technological developments in art, culture, and science for the mainstream audience.", "Jade Raposa", 
    new Date()),
  new Post("Tech Crunch", "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/techcrunch-website-homepage.webp", "TechCrunch is a blog that provides technology and startup news, from the latest developments in Silicon Valley to venture capital funding.", "Christian Montesor", 
    new Date())
  ]
  constructor() {}
  

  ngOnInit(): void{

  }
}