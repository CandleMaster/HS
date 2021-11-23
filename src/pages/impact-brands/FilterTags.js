// import React from 'react'
// import ReactDOM from 'react-dom'
// import CheckBox  from './Checkbox'

// export default class FilterTags extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state= { 
//                 hullo:false,
//                 tackle_oppression:false,
//                 tackle_inequality:false,
//                 checkedList:[]
//             }
//         this.addChecked=this.addChecked.bind(this)
//         }
//     addChecked(e){
//         this.setState(prev=>{
//             prev[e.target.name] = !prev[e.target.name]
//             const { checkedList } = prev
//             if (checkedList.includes(e.target.name)){
//                 const index=checkedList.indexOf(e.target.name)
//                 checkedList.splice(index,1)
//             }else{
//                 checkedList.push(e.target.name)
//             }
//             console.log(prev)
//             return prev
//     })}
    
//     render(){
//         return (
//             <div>
//                 <CheckBox tag="tackle_inequality" onChange={this.addChecked}/>
//                 <CheckBox tag="tackle_oppression" onChange={this.addChecked}/>
//                 <CheckBox tag="hullo" onChange={this.addChecked}/>
//             </div>
//         )
//     }
// }
    
    // const [checked,setChecked]=useState({
        //     hullo:false,
        //     tackle_oppression:false,
        //     tackle_inequality:false
        // })
        // const [checkedList, setCheckedList]=useState([])
        // nodes.forEach(node=>{
        //   (node.tags.impactType.forEach(type=>console.log(checkedList.includes(type))))})
    
        // function handCheck(e){
        //     console.log(e.target.name) 
        //     setChecked(prev=>{
        //         prev[e.target.name] = !prev[e.target.name]
        //         return prev
        //     })
        //     setCheckedList(prev=>{
        //         if (prev.includes(e.target.name)){
        //             const newList=prev.filter(function(element){
        //                 return element !=e.target.name
        //             })
        //             return newList
        //         }else{
        //             return ([...prev,e.target.name])
        //             }
        //         })
        // console.log(checkedList,checked)  
        //   }

