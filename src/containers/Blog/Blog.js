import React, { Component } from 'react';

import Posts from '../posts/posts';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios'
import { Route ,NavLink,Switch} from 'react-router-dom'

class Blog extends Component {

    state={
        post:[],
        deletpost :null
    }

    addpost = (title,body,author) => {
        console.log(title,body,author)
        const data = {
            title:title,
            body:body,
            author:author
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',data).then( p => {
            console.log(p)
        })
    }


    render () {
       
        

        return (
            <div>
                 <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/post'>Home</NavLink></li>
                            <li><NavLink to='/new-post'>Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                
                {/* <Route path='/' component={Post} />  */}

                
            <Switch>
                    <Route path='/new-post' render={() => {return(
                        <section>
                            <NewPost clicked={this.addpost}/>
                        </section>
                    )}} />

                    <Route path='/post'  render={() => {return(
                            <Posts/>
                    )}} />  
            </Switch>
                
                
                
                
            </div>
        );
    }
}

export default Blog;