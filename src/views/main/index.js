import Menu2 from "../../components/menu2";

export default function Main() {
    const page = {
        backgroundColor: "#ffe469",
        paddingBottom: "2%",
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
    }
    return (
        <div style={page}>
            <Menu2 />
            <div style={body}>
                <p>Professor Precursor</p>
                <div style={quests}>
                    <div style={quest}>
                        <p>Revisão para prova 1</p>
                        <br></br>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <label>Concluído</label>
                            <label>Expira em 6 dias</label>
                        </div>
                    </div>
                    <div style={quest}>
                        <p>Revisão para prova 2</p>
                        <br></br>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <label>Não concluído</label>
                            <label>Expira em 13 dias</label>
                        </div>
                    </div>
                    <div style={quest}>
                        <p>Revisão para prova 3</p>
                        <br></br>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <label>Indisponível</label>
                            <label>Expira em 44 dias</label>
                        </div>
                    </div>
                </div>
                <p>Aluno Carlos Chonson</p>
                <div style={quests}>
                    <div style={quest}>
                        <p>Matemática Simples</p>
                        <br></br>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <label>Não concluído</label>
                            <label>Tempo indeterminado</label>
                        </div>
                    </div>
                    <div style={quest}>
                        <p>Matemática Avançada</p>
                        <br></br>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <label>Não concluído</label>
                            <label>Tempo indeterminado</label>
                        </div>
                    </div>
                </div>
                <p>Professor CJ</p>
                <div style={quests}>
                    <div style={quest}>
                        <p>Quiz Gamer</p>
                        <br></br>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                            <label>Concluído</label>
                            <label>Expira em 4 horas</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}