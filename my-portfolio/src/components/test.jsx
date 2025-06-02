import React from "react";
import { useState } from "react";
function Test() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p> count: {count}</p>
            <button onClick={() => setCount(count+1)}> Add </button>
        </div>
    );
}
