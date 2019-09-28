import React from "react";
import DragList from "./DragList";
import DropList from "./DropList";
import "./App.css";

function App() {
    return (
        <div className="container-fluid" style={{ height: "100vh" }}>
            <div className="row" style={{ height: "100%" }}>
                <div className="col-6" style={{ height: "100%", padding: "20px" }}>
                    <DragList />
                </div>
                <div className="col-6" style={{ height: "100%", padding: "20px" }}>
                    <DropList />
                </div>
            </div>
        </div>
    );
}

export default App;
