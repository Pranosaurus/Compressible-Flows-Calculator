exports.Nozzle = class {}

exports.Diffuser = class {}

exports.Compressor = class {
    constructor(pr, {adiabaticE=null, polytropicE=null}={}){
        this.adiabaticE = adiabaticE;
        this.polytrpicE = polytropicE;
    }

    get TotalTempIncrease(){return }

    compress(flow){
        if(this.adiabaticE){

        }
        else {

        }
    }

}

exports.Turbine = class {
    constructor({pr=null, drivenComp = null, drivenFan = null, adiabaticE=null, polytropicE=null} = {}){
        this.pr = pr; this.drivenComp =drivenComp; this.adiabaticE=adiabaticE; this.polytropicE=polytropicE;
    } //Configure if Driving fan/Compressor -> Total Temperature decrease across should...

    expand(flow){
        if(this.drivenComp || this.drienFan){
            //set this.pr ->>> 
            if(this.adiabaticE){
                
            }
            else{

            }
        }
    }
}

exports.Combustor = class {}

exports.Fan = class {}

exports.Afterburner = class{}