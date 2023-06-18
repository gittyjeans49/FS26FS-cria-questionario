export default function Menu2() {
    const menu = {
        padding: "2%",
        marginRight: "3%",
        alignItems: "center",
        fontSize: "24pt"
    }
    const menuitems = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
    const huhh = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 0,
        marginLeft: "auto",
        width: "50%",
    }
    const input = {
        borderRadius: "10px",
        fontSize: "24pt",
        padding: "0.5%",
        margin: "1%"
    }
    return (
        <div style={menu}>
            <div style={menuitems}>
                <img src={require('../../assets/icons/utfprLogo.png')} alt="Logo UTFPR" />
                <div style={huhh}>
                    <label>Resultados</label>
                    <label>Crie o seu</label>
                    <div style={{ display: "flex", flexDirection: "row", gap: "1%" }}>
                        <img src={require('../../assets/icons/mulherPerfil.png')} width={48} height={48} alt="Usuário" style={{ borderRadius: "100%", borderStyle: "solid" }} />
                        <input style={input} type='text' name='search' placeholder="Buscar..." />
                    </div>
                </div>
            </div>
        </div>
    );
}