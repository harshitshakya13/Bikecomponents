const SecondComponent = () => {
    const tellUsAbout = () => {
        return "Good";
    };
    const arrowAlertfun = () => {
        alert("Hello from Second Component");
    };
    return (
        <div>
            <h2 style={{ color: "blue" }}>{tellUsAbout()}</h2>
            <button
                style={{
                backgroundColor: "green",
                padding: "10px",
                width: "100px",
                marginBottom: "10px",
            }}
                onClick={ arrowAlertfun }
                >
                Click
                
                
            </button>
        
        </div>
    );
};

export default SecondComponent;

