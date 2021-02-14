import React from "react";
import { useState, useEffect } from "react";
import { Flow } from "../util/Flow";

const MachRow = (props) => {
  return (
    <tr>
      <td>
        <input type="number" /> Enter Mach{" "}
      </td>
    </tr>
  );
};

const IsentropicFlow = (props) => {
  const [flow, setFlow] = useState(new Flow({ Mach: 1 }));
  const [flowProperties, setFlowProperties] = useState({});
  const [I, setI] = useState(null);
  console.log("rerender");
  console.log(flow.gamma);
  console.log(flow.Mach);

  return (
    <div>
      <h1> ISentropic Flow </h1>
      <div className="ui sizer vertical segment">
        <div class="ui small header">Mach Properties </div>
        <table className=" ui inverted table">
          <thead></thead>
          <tbody>
            <tr>
              <td>
                <Entry
                  Change={() => setFlow(new Flow({ Mach: 1 }))}
                  name={"Mach"}
                  flow={flow}
                />{" "}
              </td>
              <td>
                <Entry
                  Change={() => setFlow(Flow.MachFromPressureRatio)}
                  name={"p/p0"}
                  flow={flow}
                />{" "}
              </td>
              <td>
                <Entry
                  Change={() => setFlow(Flow.MachFromPressureRatio)}
                  name={"p/p*"}
                  flow={flow}
                />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Entry = (props) => {
  return (
    <div>
      <div class="ui labeled input">
        <div class="ui label">{props.name} :</div>
        <input
          type="number"
          step="any"
          onChange={(event) => props.Change(props.flow, event.target.value)}
        ></input>
      </div>
    </div>
  );
};

export default IsentropicFlow;
