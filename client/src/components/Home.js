import React, {Fragment} from 'react';
import {useState} from 'react';
import Options from './Options';
import { useHistory } from 'react-router-dom'

const DropdownOption = (props) =>{
    const String = `content ${props.active}`;
    return(
        <Fragment>
            <div class="title active" onClick = {() => props.onClick(props.index)}
            onDoubleClick = {()=>props.ondbClick(props.index)}>
                <i class="dropdown icon"></i>
                {props.Option.title} 
            </div> 
            <div class = {String}>
                <p class="transition visible">
                    {props.Option.description}
                    <br></br> <br></br> 
                    <button onClick = {()=>props.ondbClick(props.index)}> Play </button>
                </p>
            </div>
        </Fragment>
    );
}

const Home = (props) => {
    const [ActiveIndex,setActiveIndex] = useState(null);
    const history = useHistory();
    
    const onClick = (index) => {
        setActiveIndex(index);
        console.log(ActiveIndex);
    }

    const ondbClick = (index) => {
        history.push(`/${Options[index].path}`);
    }

    const Dropdown = Options.map((Option,index)=>{
        const active = ActiveIndex === index ? 'active': '';
        return(
                <DropdownOption key={index} Option={Option} onClick={onClick}
                ondbClick = {ondbClick} active={active} index={index}/>
            );
        }
    );

    return(
        <Fragment>
            <h2> Welcome to Fluid Mechanics Calculator</h2>
            <div class="ui styled accordion">
                {Dropdown}
            </div>
        </Fragment>
    );
}

export default Home;