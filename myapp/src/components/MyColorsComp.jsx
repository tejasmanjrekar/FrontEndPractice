import React, { Component } from 'react'

 class MyColorsComp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           colors:[
            {id:1,name:"red"},
            {id:2,name:"blue"},
            {id:3,name:"green"},
            {id:4,name:"yellow"},
            {id:5,name:"grey"},
           ],
           emp:[
            {id:101,name:"Sona",post:"fullStack dev",salary:95000},
            {id:102,name:"Teja",post:"JAva dev",salary:950000},
            {id:103,name:"Suraj",post:"Python dev",salary:222000},
            {id:104,name:"Gita",post:"Android dev",salary:93000},
            {id:105,name:"Ashu",post:"database dev",salary:905000}
            
           ]
        }
      }
    render() {
const{colors,emp}=this.state;
    return (
      <div>
        <h2 className='text-primary bg-danger'>This is color component</h2>
        <ol>
        {
            colors.length>0 && colors.map((val,index)=>{
                return <li key={index} style={{color:val.id%2==0?"green":"red"}}>{val.name}</li>
            })
        }
        
        </ol>

        <hr />
        <table className='table table-hover table-striped table-dark table-bordered'>
            <thead>
                <tr className='table-primary'>
                <th>Id</th><th>Name</th><th>Post</th><th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {
                    emp.map((val,index)=>{
                        return <tr key={index}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.post}</td>
                            <td>{val.salary}</td>
                            </tr>
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}

export default MyColorsComp
