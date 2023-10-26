// promises:

function calculoDemorado(numero){
    // executar em tempo linear em n. O(n)
    const p = new Promise(function(resolve, reject){
        // promise é um objeto que você identifica e que vai ficar responsável por uma função potencialmente demorada
        let res = 0
        for (let i=1; i<= numero; i++) res += i
        
        resolve(res)
    })
    return p
}

// o código abaixo é o codigo client. o código cliente que vai decidir o que fazer com a promisse
// quando usamos o comando resolve, estamos passando o que deu certo para o then. com o resultado da promise, no método then, estamos dizendo o que qremos fazer com ele. (metodo then)
// const resultado = calculoDemorado(10)
// console.log(resultado)
// console.log('outras coisas')

const promessa = calculoDemorado(10)
// faça o cálculo demorado e então (deixar a função regitrada para execução no futuro)
// quando chamamos a função resolve, estamos chamando a própria função que passamos como parâmetro no then
promessa.then((valor) => {console.log(`valo calculado: ${valor}`)})
console.log( 'outras coisas')
// o fluxo principal continua enquanto a promise é gerada - e ela é calculada depois.


// as promises já podem nascer do estado fullfied. se o calculo for rapido, às vezes nem compensa ela nascer do estado pending.

const calcular = (numero) => {
    // se o usuário informar um número positivo, fazer como antes
    Promise.resolve
    // se não, ou seja, se ele informar um número negativo, devolver uma promise no estado rejected com a mensagem "o núero deve ser positivo"

    // desafio 2: refazer usando o operador ternário
}