export const style ={
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
    pageNum: {
        display: "flex",
        justifyContent: 'flex-end',

    },
    contents: {
        padding : "35px",
        paddingTop: "0px",

    },
    ProblemList: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-end',
    },
    arrowIcon: {
        width: "7%",
        fontSize: "20px",
        color: "red",
        marginTop: "10px",      
        height: "190px",
        display: "flex",
        alignItems: "center", 
        justifyContent: 'center',
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
    problemContainer: {
        border: '1px solid black',
        width: '25%',
        height: "150px",
        marginBottom: '30px',
        marginTop: '30px',

    },
    problemNum: {
        margin: '0px',
        paddingLeft: '3px',
        position: "relative",

    },
    iconMessage: {
        color: "red",
        position: 'absolute', 
        top: '50%', 
        left: '5%', 
        transform: 'translate(-50%, -50%)', 
        zIndex: 2,
        fontSize: "45px",

    },
    inputText: {
        boxSizing: 'border-box',
        outline: 'none',
        border: 'none',
        width: '95%',
        height: '70%',
        textAlign: 'center',
    },
    message: {
        position: 'absolute', 
        color: 'black',
        fontWeight: 'bold',
        zIndex: '3',
    }
    

}