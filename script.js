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

const fetchTradutor = async (texto) => {
    try {
        const url = `https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=auto&tl=pt-BR&q=${encodeURIComponent(texto)}`;
        let resultado = await fetch(url);
        resultado = await resultado.json();

        return resultado[0][0];
    } catch (e) {
        console.error(e.message);
    }
}