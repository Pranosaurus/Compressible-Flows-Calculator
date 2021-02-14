class Flow {
    //Define Static Methods to Interface or Create Instaces of Flow
    Mach = 0;
    TotalTemp = 0;
    TotalPressure = 0;
    gamma = 1.4;
    R = 8.134;
    //When You Store in Database, only Store these 3 properties
    //expression = (1+(gamma-1)/2*Math.pow(Mach,2));
    //{Mach=0, TotalTemp = 0, TotalPressure =0, gamma=1.4, R=8.134}
    constructor () {this.Mach =0; this.TotalTemp=0; this.TotalPressure=0; this.gamma=1.4; this.R=8.134;};

    static MachFromPressureRatio = (flow, PR) => {
        const Mach = (Math.pow(PR,flow.gamma/(flow.gamma-1)-1)*2/(flow.gamma-1));
        return new Flow({Mach:Mach, TotalPressure:flow.TotalPressure, TotalTemperature:flow.TotalTemperature});
    }

    static MachToPressureRatio = (flow) =>{
        return Math.pow((1+(flow.gamma-1)/2*flow.Mach^2),(-flow.gamma/(flow.gamma-1)));
    }

    static MachFromTemperatureRatio = (TR,flow) => {
        const Mach = (TR-1)*2/(flow.gamma-1);
        return new Flow({Mach:Mach, TotalPressure:flow.TotalPressure, TotalTemperature:flow.TotalTemperature});   
    }   

    static MachToTemperatureRatio = (flow) => {
        return (1+(flow.gamma-1)/2*flow.Mach^2);
    }

    static MachFromDensityRatio = (DR,flow) => {
        const Mach = (Math.pow((DR-1),1/(flow.gamma-1))-1); 
        return new Flow({Mach:Mach, TotalPressure:flow.TotalPressure, TotalTemperature:flow.TotalTemperature});
    }

    static MachToDensityRatio = (flow) => {
        return Math.pow((1+(flow.gamma-1)/2*flow.Mach^2),(-1/(flow.gamma-1)));
    }


    static callSetProperties (flow) {
        return { //This Should BE static.... wtf are you doing....
        DR : Flow.MachToDensityRatio(flow),
        PR : Flow.MachToPressureRatio(flow),
        TR : Flow.MachToTemperatureRatio(flow),
        Mach : flow.Mach,
        }
    }    
}


exports.Flow = Flow;
