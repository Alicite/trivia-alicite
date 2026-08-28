const fetchTrivia = async (endpoint='', qtd=5) => {
    try{
        const url = `https://opentdb.com/api.php?amount=${qtd}${endpoint}`
        let resultado = await fetch(url);
        resultado = await resultado.json();
        
        return resultado.results;
    } catch (erro) {
        console.error(erro.message)
    }
}
