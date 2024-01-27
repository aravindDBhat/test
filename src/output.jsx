import Node from "./components/nodes";
function Output() {
  return (
    <div className="output">
      1
      <Node cls="node1" bc="#4C6234" />
      <div className="circle"></div>
      <div className="node326">
        3
        <Node cls="node3" bc="#4C6234" />
        <hr className="hr34"></hr>
        <Node cls="node2" bc="#4C6234" />2<hr className="hr6"></hr>
        6
        <Node cls="node6" bc="#A52B2A" />
      </div>{" "}
      <hr className="hr25" />
      <div className="node45">
        4
        <Node cls="node4" bc="#4C6234" />
        <hr className="hr45" />
        5
        <Node cls="node5" bc="#4C6234" />
        <hr className="hr5" />
      </div>{" "}
      <hr className="hr38"></hr>
      <div className="node-8">
        <hr className="hr87"></hr>
        8
        <Node cls="node8" bc="#A52B2A" />
        <hr className="hr89"></hr>
      </div>{" "}
      <div className="node79">
        7
        <Node cls="node7" bc="#87570A" />
        <Node cls="node10" />
        9
        <Node cls="node9" bc="#4C6234" />
      </div>{" "}
    </div>
  );
}
export default Output;
