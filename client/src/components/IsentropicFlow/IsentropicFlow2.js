import React from "react";
import { useState, useEffect } from "react";
import { Flow } from "../util/Flow";

const IsentropicFlow = (props) => {
    [active,setActive] = useState(null);
    
    MachProps = [
        {
            name : "Mach", 
            onChange : Flow.setMach(),
            set : flow.Mach(),
            index = 1,
        },
        {
            name : "density_ratio",
            onChange : Flow.MachFromDensityRatio,
            set : flow.MachToDensityRatio(),
            index = 2,
        },
        {
            name : "temperature_ratio",
            onChange = Flow.MachFromTemperatureRatio,
            set : flow.MachtoTemperatureRatio(),
            index = 3,
        },
        {
            name: "den"
        }

    ]

    
}

//THis is a Cluster FUck of a Disaster
//Add this all to Util to Analyze Things ...
//velocity, etc... Thrust is really velocity, right??? or else???, what about Pressures??
//The Pressures are all included or what???
//Think About This Question