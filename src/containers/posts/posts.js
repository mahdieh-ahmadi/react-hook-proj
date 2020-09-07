import React, { Component } from 'react';

import axios from 'axios'
import Post from '../../components/Post/Post'
import FullPost from '../../components/FullPost/FullPost'
import {Route,Link} from 'react-router-dom'
 
class posts extends Component{
    state={
        posts:[],
        deletpost :null
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(p => {
            
            const data = p.data.slice(0,4)
            const newdata = data.map(p => {
                return{
                    ...p,
                    author:'max'
                }
               
            })
            this.setState({posts:newdata})
        }).catch(e => {
            this.setState({error:true})
        })
    }

    delethandler = (id) => {
        this.setState({deletpost:this.state.posts[id-1]})
        console.log(this.props)
        /* this.props.history.push({pathname:'/'}) */
    }

    deletpost = () => {
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.state.deletpost.id).then(p => {
            console.log(p)
        })

    }

    render(){
        let deletpost 
        if (this.state.deletpost == null){
            deletpost = <p style={{textAlign:'center'}}>please select a post</p>
        }else{
            deletpost = <FullPost 
            title={this.state.deletpost.title} 
            content={this.state.deletpost.author}
            cllicked={this.deletpost}/>
        }

        let post = <p>this is wrong!</p>
        if(!this.state.error && this.state.posts !== null){
            post = this.state.posts.map(p => {
                return(
                    <Link to={'/post/' + p.id} key={p.id}>
                      <Post
                        id={p.id}
                        key={p.id}
                        title={p.title}
                        author={p.author}
                        clicked={() => this.delethandler(p.id)}/>
                    </Link>
                ) 
             })
        }

        return(<div>
            <section className="Posts">
                {post}
            </section>
            
            <Route path='/post/:id' render={() => {return(
            <section>
                {deletpost}
            </section>
            
        )}} />
        </div>)
}
}

export default posts;