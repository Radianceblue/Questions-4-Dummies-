import "./Status.css"

function Status({ correct, incorrect }){
    return (
        <div className="status-box">
            <h3>Current count</h3>
            <p>Correct: {correct}</p>
            <p>Incorrect: {incorrect}</p>
        </div>
    );
}

export default Status;