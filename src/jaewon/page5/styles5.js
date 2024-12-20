export const style={
    pageContainer: {
        margin: "30px",
    },
    pageTitle: {
        display: "flex",
        alignItems: "center", 

    },
    titleText: {
        backgroundColor: "#F6FFCC",
        paddingRight: "5px",
        paddingLeft: "5px",
        borderRadius: "5px",
    },
    potIcon: {
        color: "green",
        fontSize: "30px",
    },
    contents: {
        padding : "35px",
        paddingTop: "0px",

    },
    problemTextContainer: {
        border: "solid 2px lightgreen",
        borderRadius: "5px",
        padding: "5px",
        display: 'flex',
        flexDirection: 'column',  
        alignItems: 'center',   

    },
    problemImg: {
        width: "150px",

    },
    answerInput: {
        width: '150px',  
        borderRadius: '20px',  
        borderTop: 'none',
        borderRight: '2px solid black',
        borderBottom: 'none',
        borderLeft: '2px solid black',
        outline: 'none',
        fontSize: '16px',  
        marginLeft: 'auto',  
        display: "flex",
        textAlign: "center",
    },
    iconMessage: {
        color: "red",
        position: 'absolute', 
        top: '50%', 
        left: '1.5%', 
        transform: 'translate(-50%, -50%)', 
        zIndex: 2,
        fontSize: "50px",

    },
    passMessage: {
        position: "fixed",
        zIndex: "10",
        top: '50%', 
        left: '42%', 
        transform: 'translate(50%, 50%)',
        zIndex: 10, 
        fontSize: '30px', 
        color: 'green', 
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        fontWeight: 'bold'
    },
    questionTextContainer: {
        position: "relative",
        display: "inline-block",
        height: "24px",
    }
    
}