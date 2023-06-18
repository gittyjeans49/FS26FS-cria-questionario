import Menu from "../../components/menu";

export default function Main() {
    const page = {
        backgroundColor: "#ffe469",
        paddingBottom: "2%",
        height: "100vh",
    };
    const body = {
        width: "95%",
        padding: "1%",
        margin: "auto",
        fontSize: "20pt",
        borderColor: "#ffd000",
        backgroundColor: "#ffdb3d",
        borderStyle: "solid",
        borderRadius: "10px",
    };
    const quests = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: "1.5%",
        alignItems: "center",
    };
    const quest = {
        backgroundImage: "url(" + require("../../assets/icons/questionario.png") + ")",
        padding: "1%",
        color: "#ddd",
        borderRadius: "10px",
        width: "30%",
        height: "50%",
        borderStyle: "solid",
        borderColor: "#2e1d01",
    };
    const but = {
        overflow: "hidden",
        backgroundColor: "#ddd",
        paddingLeft: "10px",
        paddingRight: "10px",
        textAlign: "center",
        borderRadius: "10px",
        fontSize: "24px",
    };
    return (
        <div style={page}>
            <Menu />
            <div style={body}>
                <p style={{ textAlign: "center", fontSize: "36px", fontWeight: "bold" }}>Resultados</p>
                <p>Professor Precursor</p>
                <div style={quests}>
                    <div style={quest}>
                        <p>Revisão para prova 1</p>
                        <br></br>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <button style={but}>Ver resultados</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}