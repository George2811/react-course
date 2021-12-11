import { Link, Route, Routes, useParams } from "react-router-dom";

const Topic = () => {
    let { topic } = useParams();

    return(
        <h4>{topic}</h4>
    );
}

// Nested Routes
const ReactTopicsPage = () => {

    return(
        <div>
            <h3>React Topics</h3>
            <ul>
                <li>
                    <Link to="jsx">JSX</Link>
                </li>
                <li>
                    <Link to="props">Props</Link>
                </li>
                <li>
                    <Link to="state">State</Link>
                </li>
                <li>
                    <Link to="components">Components</Link>
                </li>
            </ul>
            <Routes>
                <Route path=":topic" element={<Topic />} />
            </Routes>

        </div>
    );

}

export default ReactTopicsPage