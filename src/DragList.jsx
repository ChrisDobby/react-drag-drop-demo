import React from "react";
import Drag from "./Drag";
import logo from "./logo.png";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 10"];

export default () => {
    return (
        <div className="drag-drop-container">
            {items.map(item => (
                <Drag key={item} dataItem={item} dragImage={logo} dropEffect="link">
                    <div className="item">{item}</div>
                </Drag>
            ))}
        </div>
    );
};
