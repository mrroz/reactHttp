import  { Component } from 'react';
import Card_model from './card_model'
import axios from 'axios'


class Card_loop extends Component {

  
       
    state = { 
        posts:[]
     }

    componentDidMount(){

        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{

        this.setState({posts:response.data.slice(0,4)})
        

        })
    }
    render() { 

        const all=[
            {title:' salam1',body:' morteza'},
            {title:' salam2',body:' morteza'},
            {title:' salam2',body:' morteza'},
            {title:' salam4',body:' morteza'},
       ]

        return ( 
             <div>

            {this.state.posts.map((item,index)=>{
                
              return< Card_model id={item.id} title={item.title} body={item.body}

            /> })}
        </div>
         );
    }
}
 




//    const Card_loop = () => {

//               const all=[
//               {title:' salam1',body:' morteza'},
//               {title:' salam2',body:' morteza'},
//               {title:' salam2',body:' morteza'},
//               {title:' salam4',body:' morteza'},
//          ]

//          componentDidMount(){}


//     return ( 
//         <div>
//             {all.map((item)=>{
//            return< Card_model title={item.title} body={item.body}
//             /> })}
//         </div>
//      );
// }
 
 
export default Card_loop;