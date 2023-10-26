// const calculoRapidinho = (numero) => {
//     return Promise.resolve(
//         (numero/2) * (numero + 1)
//     )
// }

// //  essa promise já nasce fullfied.

// calculoRapidinho(10).then(function(res) {console.log(res)})
// // toda vez que nós criamos uma promise, temos que dizer depois o que vamos fazer com ela


const calcular = (numero) => {
    // if(numero >=1) {
    //     return Promise.resolve(
    //         (numero/2) * (numero + 1)
    //     )
    // }
    // return Promise.reject("O número deve ser positivo")
    res = (numero >=1 ? Promise.resolve((numero/2) * (numero + 1)) : Promise.reject('o número deve ser positivo'))
    return res
}

calcular(10)
.then(res => console.log(res))
.catch(erro => console.log('erro' + erro))

calcular(-2)
.then(res => console.log(res))
.catch(erro => console.log('erro' + erro))