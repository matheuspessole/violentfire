
let arquivo = document.getElementById("arquivo");

arquivo.addEventListener("change", () => {
    if (!arquivo.files.length) return;

    let desc = document.getElementById("arquivo_desc");

    let nome = arquivo.files[0].name;
    let partes = nome.split(".");
    let extensao = partes.pop();

    if (nome.length < 20) {
        desc.textContent = nome;
    } else {
        let texto = nome.slice(0, 19);

        if (texto.endsWith(".")) {
            texto = texto.slice(0, -1);
        }

        desc.textContent = texto + "." + extensao;
    }
});

    
function voltar() {
    let popup = document.getElementById("popup");
    popup.style.display = "none";
}

function abrir_popup(){
    let popup = document.getElementById("popup");
    popup.style.display = "flex";
}