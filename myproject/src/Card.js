import React from 'react';
import './style.css';

const Card = props=> {
    return (
            <div className="card">
                <img src={props.avatar} alt="Avatar" style={{width:"100%", flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}/>
                <div className="container">
                    <h4><b>{props.name}</b></h4> 
                    <p>{props.title}</p> 
                    
                    <input type='text'  onChange={props.onChangInput} value={props.name}/>
                    <p><button className="button button2" onClick={props.onChange} >change name</button></p>
                    <input type="text"  onChange={props.onChangeName} value={props.name}/>
                    <div>{props.children}</div> 
                    <button className="button button3" onClick={props.onDelete}>Delete</button>
                </div>
            </div> 
            )
}

export default Card;