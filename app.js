function pesquisar(){
    // Obtém a secção JTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma string sem nada

if(!campoPesquisa){
    section.innerHTML = "<p>Não existem informações para buscar</p>"
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

//Inicializa uma string vazia para armazenar os resultados
let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

//para cada dado dentro da lista de dados
for(let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    // se titulo includes campoPesquisa
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        //cria um novo elemento
        resultados += `
        <div class="item-resultado imagem">
                <h2><a href=${dado.link} target="_blank">${dado.titulo}</a></h2>
                <p class="descriacao-meta">${dado.descricao}</p>
                <img src="imagens/${dado.imagem}" alt="${dado.titulo}">
            </div> 
    `
    }
   
}

if(!resultados){
    section.innerHTML = "<p>Informação não encontrada</p>"
    return

}


section.innerHTML = resultados
}
