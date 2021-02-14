import React from 'react';
//Mach Number
//Mach Angle
// P-M Angle
// Pressure Ratio, density ratio
// p/p* same with density and temperature
// A /A* clear and copy buttons (12 Total) -- wait, what? 

const MachRows = (props) => {
    return(
    <React.Fragment>
        <Entry name={'Mach'} onChange = {props.setMach} />
    </React.Fragment>
);
}

const Entry = (props) => {
    return(
        <div>
            <div class="ui labeled input">
                <div class="ui label">
                    {props.name}
                </div>
                <input type="number" onChange={(e)=>props.handleChange(e)}></input>
            </div>
        </div> 
    );
}