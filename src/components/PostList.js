import { Component } from "react";
 

export class PostList extends Component{

    state ={
        posts : []
    }

    componentDidMount() {
        console.log('Component did mount');
         let arry = this.populatePosts();
         this.setState({
             posts: arry,
             
         });
    }

     
    render(){
        return( 
            <div>
               <h2>All Posts</h2>
                 
                        {
                        this.state.posts.map(post=>(
                                <div key={post.id}> 
                                    Post ID: {post.id} <br /> User ID: {post.userId} 
                                 <br /> Title: {post.title} 
                                    <br /> {post.body}   <br />
                                </div>
                            ))
                        }
                        
                
            </div>
        );
    }

    populatePosts(){
        console.log('populate posts called...');
        let p1 = {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };

        let p2 = {
            "userId": 1,
            "id": 2,
            "title": "occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        };

        let postArray = [];
        postArray.push(p1);
        postArray.push(p2);
        return postArray;

        
    }

  
    
}