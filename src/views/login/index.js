export default function Login() {
    const page = {
        backgroundColor: "#ffd000",
        height: "100vh",
        paddingTop: "5%",
    };
    const body = {
        backgroundColor: "#ffdead",
        height: "60%",
        width: "65%",
        margin: "auto",
        padding: "2%",
        textAlign: "center",
        borderRadius: "10px",
        borderStyle: "solid",
        borderColor: "#404040",
    };
    const form = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
        fontSize: "24pt",
        padding: "2%",
    };
    const formItem = {
        borderRadius: "10px",
        fontSize: "24pt",
        padding: "0.5%",
        margin: "1%",
    };
    const divbut = {
        margin: "auto",
        marginTop: "10%",
    }
    const but = {
        overflow: "hidden",
        backgroundColor: "#ffd000",
        textAlign: "center",
        width: "400px",
        height: "60px",
        borderRadius: "10px",
        fontSize: "24pt",
        fontWeight: "bold",
    };
    const blue = {
        marginTop: "5%",
        color: "#2764FF",
        fontSize: "20pt",
        fontWeight: "bold",
    };
    return (
        <div style={page}>
            <div style={body}>
                <img src={require('../../assets/icons/utfprLogo.png')} alt="Logo UTFPR" />
                <form action='/main' method='post' style={form}>
                    <input style={formItem} type="text" name="user" placeholder="Usuário:" />
                    <input style={formItem} type="password" name="senha" placeholder="Senha:" />
                    <div style={divbut}>
                        <button style={but} type="submit">ENTRAR</button>
                    </div>
                </form>
                <p style={blue}>Se esquecer sua senha ou usuário, altere no portal do aluno</p>
            </div>
        </div>
    );
}