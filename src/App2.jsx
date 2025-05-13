// import React, { Component } from 'react'
// import "./App2.css"

// export default class App2 extends Component {
//     constructor(){
//         super()
//         this.state={
//             data:[],
//             loading:true
//         }
//     }
//     handlebtn=(btntype)=>{
//         let url;
//         if(btntype === "Fakestore"){
//             url="https://fakestoreapi.com/products/"
//         }else if(btntype === "Products"){
//             url="https://dummyjson.com/products/"
//         }else if(btntype === "Recepies"){
//             url="https://dummyjson.com/recipes/"
//         }else{
//             return;
//         }

        

//         fetch(url)
//         .then(res=>res.json())
//         .then(res=>{console.log(res);

//         const finalres=res.products||res.recipes||res;
//         this.setState({data:finalres,loading:false})
        
//         })
//     }
//   render() {
//     return (
//       <div id='container'>
//         <div id='child1'>
//             <button onClick={()=>this.handlebtn("Fakestore")}>Fakestore</button>
//             <button onClick={()=>this.handlebtn("Products")}>Products</button>
//             <button onClick={()=>this.handlebtn("Recepies")}>Recepies</button>
//         </div>
//         <div id='child2'>
//             {this.state.loading?"data is loading":this.state.data.map((val)=>{
//                 return(
//                     <>
//                    <h3>{val.title||val.name}</h3> 
//                     </>
//                 )
//             })}
//         </div>
//       </div>
//     )
//   }
// }


import React, { Component } from 'react'
import "./App2.css"

export default class App2 extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            loading:true
        }
    }
    handlebtn=(btn)=>{
        let url
        if(btn === "Fackstore"){
            url="https://fakestoreapi.com/products/"
        }else if(btn === "Products"){
            url="https://dummyjson.com/products/"
        }else if(btn === "Recipes"){
            url="https://dummyjson.com/recipes/"
        }else{
            return
        }

        fetch(url).then(res=>res.json())
        .then(res=>{console.log(res)

            let finalres = res.products||res.recipes||res
            this.setState({data:finalres,loading:false})

        })



    }
  render() {
    return (
      <div id='container'>
        <div id='child1'>
            <button onClick={()=>this.handlebtn("Fackstore")}>Fackstore</button>
            <button onClick={()=>this.handlebtn("Products")}>Products</button>
            <button onClick={()=>this.handlebtn("Recipes")}>Recipes</button>
        </div>
        <div id="child2">
            {this.state.loading?"wait a moment":this.state.data.map((val,index)=>{
                return(
                    <div className="card" key={index}>
                    <img src={val.image||val.thumbnail} alt="" style={{width:"200px"}}/>
                    <h1>{val.title||val.name}</h1>
                    <p>{val.description||val.ingredients}</p>
                    </div>
                )
            })}
        </div>
      </div>
    )
  }
}
