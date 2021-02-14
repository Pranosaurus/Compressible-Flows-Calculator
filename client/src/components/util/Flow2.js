class Flow {
    //Does this have anything to do with anything??? 
    Mach = 0;
    Temp = 0;
    Pressure = 0;
    gamma = 1.4; 
    R = 8.134;

    constructor ({Mach =0, Temp=0, Pressure=0, gamma=1.4,R=8.134}={}) {
      this.Mach = Mach; this.Temp=Temp; this.Pressure=Pressure; this.gamma=gamma; this.R= R; 
    };
    //set TotalTemperature
    //set TotalPressure
    RestProperties ({Mach = this.Mach, Temp=this.Temp, Pressure=this.Pressure, gamma=this.gamma, R=this.R}= {}) {
      new Flow({Mach:Mach, Temp:Temp, Pressure:Pressure, gamma:gamma, R:R});
    };

    //Getters Block Here
    get expr (){ return (1+(this.gamma-1)/2*Math.pow(this.Mach,2))}; 
    get PR  () {return Math.pow(this,expr,(-this.gamma/(this.gamma-1)))}; 
    get TR() {return 1/this.expr};
    get DR () {return Math.pow(this.expr,(-1/(this.gamma-1)))};
    get V() {returnthis.Mach*Math.sqrt(this.gamma*this.R*this.Temp)}; 
    get a (){return Math.sqrt(this.gamma*this.R*this.Temp)};
    get TotalTemp() {return this.Temp*this.expr};
    //get den = () =>
    //get A/A* = () => 
    //get T -> 
    static setMach = () => {};
    static setGamma = () => {};
    static setR = () => {};
    //transformers (static functions)
    static MachFromPressureRatio = (PR,{flow=new Flow()} = {}) => {
      const Mach = (Math.pow(PR,flow.gamma/(flow.gamma-1)-1)*2/(flow.gamma-1));
      return new Flow({Mach:Mach, TotalPressure:flow.TotalPressure, TotalTemperature:flow.TotalTemperature});
    }

   static MachFromTemperatureRatio = (TR,{flow=new Flow()} = {}) => {
      const Mach = (TR-1)*2/(flow.gamma-1);
      return new Flow({Mach:Mach, TotalPressure:flow.TotalPressure, TotalTemperature:flow.TotalTemperature});   
   }  

  static MachFromDensityRatio = (DR,{flow=new Flow()} = {}) => {
      const Mach = (Math.pow((DR-1),1/(flow.gamma-1))-1); 
      return new Flow({Mach:Mach, Pressure:flow.Pressure, Temperature:flow.Temperature});
  }
  //Other Transformers???? 
  static TempFromTotalTemp = (TotalTemp, {flow=new Flow()} = {}) => {
    const Temp = flow.TotalTemperature/flow.expr;
    return new Flow({Mach:flow.Mach, })
  }

  static PressureFromTotalPressure = (TotalTemp, {flow=new Flow()} = {}) => {

  }

  
}

      