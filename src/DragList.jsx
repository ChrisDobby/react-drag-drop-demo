import React from "react";
import Drag from "./Drag";
import logo from "./logo.png";

export default ({ items }) => {
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
