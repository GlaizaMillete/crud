import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostService {

    listofPosts: Post[]=[
        new Post("The Verge", "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/the-verge-website-homepage.webp", "The Verge is a blog focused on examining how technology will change the future. This blog provides news and opinion pieces on the latest technological developments in art, culture, and science for the mainstream audience.", "Jade Raposa", 
          new Date(),5,[]),
        new Post("Tech Crunch", "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/12/techcrunch-website-homepage.webp", "TechCrunch is a blog that provides technology and startup news, from the latest developments in Silicon Valley to venture capital funding.", "Christian Montesor", 
          new Date(),4,[])
        ];

        getPost(){
            return this.listofPosts;
        }
        deleteButton(index: number){
            this.listofPosts.splice(index, 1)
        }
        addPost(post: Post){
            this.listofPosts.push(post)
        }
        updatePost(index: number, post: Post){
            this.listofPosts[index] = post
        }
        getSpecPost(index: number) {
            return this.listofPosts[index];
        }
        likePost(index:number) {
            this.listofPosts[index].numberOfLikes += 1;
        }
        addComment(index: number, comment: string) {
            this.listofPosts[index].comments.push({ text: comment, timestamp: new Date() });
        }
}