const calculoRapidinho = (numero) => {
    return Promise.resolve(
        (numero/2) * (numero + 1)
    )
}

//  essa promise já nasce fullfied.

calculoRapidinho(10).then(function(res) {console.log(res)})
// toda vez que nós criamos uma promise, temos que dizer depois o que vamos fazer com ela


const calcular = (numero) => {
    // desafio 01
    // se o usuario informar um numero positivo, fazer como antes
    
}