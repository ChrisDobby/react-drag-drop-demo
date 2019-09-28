import React from "react";
import PropTypes from "prop-types";
import * as dropEffects from "./dropEffects";

const insideStyle = {
    backgroundColor: "#cccccc",
    opacity: 0.5,
};

const DropTarget = props => {
    const [isOver, setIsOver] = React.useState(false);

    const dragOver = ev => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = props.dropEffect;
    };

    const drop = ev => {
        const droppedItem = ev.dataTransfer.getData("drag-item");
        if (droppedItem) {
            props.onItemDropped(droppedItem);
        }
        setIsOver(false);
    };

    const dragEnter = ev => {
        ev.dataTransfer.dropEffect = props.dropEffect;
        setIsOver(true);
    };

    const dragLeave = () => setIsOver(false);

    return (
        <div
            onDragOver={dragOver}
            onDrop={drop}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            style={{ width: "100%", height: "100%", ...(isOver ? insideStyle : {}) }}
        >
            {props.children}
        </div>
    );
};

DropTarget.propTypes = {
    onItemDropped: PropTypes.func.isRequired,
    dropEffect: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

DropTarget.defaultProps = {
    dropEffect: dropEffects.All,
};

export default DropTarget;
