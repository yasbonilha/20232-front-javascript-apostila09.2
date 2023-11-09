async function hello(nome) {
    return `oi, ${nome}`

}

hello("joão").then(res => console.log(res))
// ela devolve uma promise que devolve um resultado
// sim, é possível adaptar uma função síncrona como assíncrona sem mexer no corpo dessa função (que é diferente da assinatura)

function fatorial(n){
    if(n<0)
        return Promise.reject(`Valor não pode ser negativo ${n}`)
    let res = 1
    for (let i=2; i<=n; i++)
        res*= i
    return Promise.resolve(res)
}

const chamadaComThenECatch = () => {
    fatorial(10)
    .then(res => console.log(`Deu certo: 10! = ${res}`))
    .catch(err => console.log(`Falhou: ${err}`))

    fatorial(-1)
    .then(res => console.log(`Deu certo: -1! = ${res}`))
    .catch(err => console.log(`Falhou: ${err}`))
}

// quando temos uma arrow function, temos que colocar o async antes da lista de parâmetros.
// o async pode andar sozinho, mas o await só pode andar com o async
const chamadaComAsyncEAwait = async () => {
    // usamos dessa forma pois é mais fácil de debugar do que o then e catch. entretanto, não é uma verdade absoluta
    try{
        const res = await fatorial(10)
        // só podemos falar await em uma função que entrega uma promise. se não, não tem sentido. quando não colocamos o await, guardamos no res uma promise. quando colocamos o await, estamos guardando o resultado dessa promise quando ela chegar
        console.log(`Deu certo: 10! = ${res}`)
    }
    catch(err){
        console.log(`Falhou: ${err}`)
    }
    try{
        const res2 = await fatorial(-1)
        console.log(`Deu certo: -1! = ${res2}`)
    }
    catch(err){
        console.log(`Falhou: ${err}`)
    }


}
