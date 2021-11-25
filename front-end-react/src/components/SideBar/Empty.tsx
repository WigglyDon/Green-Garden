import React from "react";

export default function Empty(props: any) {
    return (
        <main className="garden_add">
            <img
                className="garden_add-button"
                src="https://raw.githubusercontent.com/nikolajjuuel/scheduler/master/public/images/add.png"
                alt="Add"
                onClick={props.onAdd}
            />
        </main>
    );
}

