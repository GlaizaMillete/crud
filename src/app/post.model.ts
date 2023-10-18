export class Post {
    title: string;
    imgPath: string;
    description: string;
    author: string;
    dateCreated: Date;
    numberOfLikes: number;
    comments: { text: string, timestamp: Date }[] = [];
  
    constructor(title: string, imgPath: string, description: string, author: string, dateCreated: Date, numberOfLikes: number, comments: { text: string, timestamp: Date }[]) {
      this.title = title;
      this.imgPath = imgPath;
      this.description = description;
      this.author = author;
      this.dateCreated = dateCreated;
      this.numberOfLikes = numberOfLikes;
      this.comments = comments;
    }
}