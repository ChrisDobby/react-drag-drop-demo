import React from "react";
import DragList from "./DragList";
import DropList from "./DropList";
import "./App.css";

function App() {
    const [dragListItems, setDragListItems] = React.useState([
        "Item 1",
        "Item 2",
        "Item 3",
        "Item 4",
        "Item 5",
        "Item 6",
        "Item 7",
        "Item 8",
        "Item 9",
        "Item 10",
    ]);
    const handleDroppedItem = item => setDragListItems(dragListItems.filter(listItem => listItem !== item));
    return (
        <div className="container-fluid" style={{ height: "100vh" }}>
            <div className="row" style={{ height: "100%" }}>
                <div className="col-6" style={{ height: "100%", padding: "20px" }}>
                    <DragList items={dragListItems} />
                </div>
                <div className="col-6" style={{ height: "100%", padding: "20px" }}>
                    <DropList onItemDropped={handleDroppedItem} />
                </div>
            </div>
        </div>
    );
}

export default App;
