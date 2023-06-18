import Menu from "../../components/menu";

export default function Perfil() {
    const page = {
        backgroundColor: "#ffe469",
        height: "100vh",
    };
    const body = {
        backgroundColor: "#ffffff",
        height: "70%",
        width: "80%",
        margin: "auto",
        padding: "2%",
    };
    const perf = {
        overflow: "hidden",
        width: "60%",
        backgroundColor: "#ffd000",
        margin: "auto",
        textAlign: "center",
        alignItems: "center",
        borderRadius: "10px",
        padding: "2%",
        paddingTop: "3%",
        paddingBottom: "3%",
        fontSize: "20px",
    };
    const but = {
        overflow: "hidden",
        backgroundColor: "#ffd000",
        padding: "1%",
        paddingLeft: "2%",
        paddingRight: "2%",
        margin: "auto",
        textAlign: "center",
        borderRadius: "10px",
        fontSize: "24px",
        fontWeight: "bold",
        marginLeft: "5%",
        marginRight: "5%",
    }
    return (
        <div style={page}>
            <Menu />
            <div style={body}>
                <div style={perf}>
                    <img style={{overflow: "hidden", borderRadius: "100%"}} src={require('../../assets/icons/mulherPerfil.png')} alt="Mulher Perfil"/>
                    <p style={{fontWeight: "bold", fontSize: "24px"}}>Ana Soares Ribeiro Neves</p>
                    <p>Bacharelado em Engenharia de Software</p>
                    <p>4º Período</p>
                    <p>Dois Vizinhos</p>
                    <div>
                        <button style={but}>Voltar</button>
                        <button style={but}>Sair</button>
                    </div>
                </div>
            </div>
        </div>
    );
}