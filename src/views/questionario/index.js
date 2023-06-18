import Menu from "../../components/menu";

export default function Questionario() {
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
        borderRadius: "10px",
        borderStyle: "solid",
        borderColor: "#404040",
        fontSize: "28px",
        textAlign: "justify",
        fontFamily: "sans-serif",
    };
    const divbut = {
        display: "flex",
        flexDirection: "row-reverse",
        marginTop: "2%",
        marginLeft: "55%",
    }
    const but = {
        overflow: "hidden",
        backgroundColor: "#ffd000",
        padding: "2%",
        paddingLeft: "7.5%",
        paddingRight: "7.5%",
        margin: "auto",
        textAlign: "center",
        borderRadius: "10px",
        fontSize: "24pt",
        fontWeight: "bold",
    };
    const but2 = {
        overflow: "hidden",
        backgroundColor: "#ffd000",
        padding: "2%",
        margin: "auto",
        textAlign: "center",
        borderRadius: "10px",
        fontSize: "24pt",
        fontWeight: "bold",
    };
    const questions = {
        display: "flex",
        flexDirection: "column",
        marginRight: "80%",
    };
    const question = {
        display: "flex",
        flexDirection: "row",
        padding: "1%",
    };
    return (
        <div style={page}>
            <Menu />
            <div style={body}>
                <h1 style={{ textAlign: "center" }}>Revisão para a prova 1</h1>
                <p>1. O sistema de controle automotivo SisAut foi modelado orientado a objetos. O SisAut possui a classe Veículo, que compartilha seu código-fonte com suas subclasses: Carro e Moto. As subclasses Carro e Moto aproveitam os métodos e atributos da classe Veículo.Em orientação a objeto, o mecanismo pelo qual uma classe pode estender outra classe ou ser estendida por outra classe é:</p>
                <div style={questions}>
                    <div style={question}>
                        <input type="checkbox" id="a" name="interface" />
                        <label for="a">Interface</label>
                    </div>
                    <div style={question}>
                        <input type="checkbox" id="b" name="heranca" />
                        <label for="b">Herança</label>
                    </div>
                    <div style={question}>
                        <input type="checkbox" id="c" name="pacotes" />
                        <label for="c">Pacotes</label>
                    </div>
                    <div style={question}>
                        <input type="checkbox" id="d" name="encapsulamento" />
                        <label for="d">Encapsulamento</label>
                    </div>
                    <div style={question}>
                        <input type="checkbox" id="e" name="abstracao" />
                        <label for="e">Abstração</label>
                    </div>
                </div>
                <div style={divbut}>
                    <button style={but}>Enviar</button>
                    <button style={but2}>Próximo</button>
                    <button style={but2}>Anterior</button>
                </div>
            </div>
        </div>
    );
}
