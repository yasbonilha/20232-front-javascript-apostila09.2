const { default: nodeTest } = require('node:test')

const axios = require('axios')

require('dotenv').config()

// const APPID = process.env.APPID
// const Q = process.env.Q
// const UNITS = process.env.UNITS
// const LANGUAGE = process.env.LANGUAGE
// const CNT = process.env.LANGUAGE
// const PROTOCOL = process.env.PROTOCOL
// const URL_BASE = process.env.URL_BASE
// // não podemos deixar a chave da api por duas formas - segurança e variável de ambiente

// console.log(APPID)
// // o .env não vai ser versionado no git e, por isso, ninguém tem acesso à nossa variável


// // operador de desestruturação do js
const {APPID, Q, UNITS, LANGUAGE, CNT, PROTOCOL, URL_BASE} = process.env // vai chamar todas as propriedades que queremos obter do process.env

// htpps://api.openweathermap.org/data/2.5/forecast?q=Itu&units=metric&appid=chave&lang=pt_br&cnt=10

const url = `${PROTOCOL}://${URL_BASE}?q=${Q}&units=${UNITS}&appid=${APPID}&lang=${LANGUAGE}&cnt=${CNT}`

const minhaPromise = axios.get(url)
minhaPromise.then((res) => {
    console.log('quem é o res.data...')
    console.log(res.data)
    console.log("*********************")
    return res.data
})
.then((res) => {
    console.log("quem é o cnt...")
    console.log(res.cnt)
    console.log('*****************')
    return res
})
.then((res) => {
    console.log('quem é o list?')
    console.log(res.list)
    console.log('***********************')
    return res.list
})
.then((res) => {
    console.log('qual a temperatura mínima da primeira previsão do tempo?')
    console.log(res[0]['main']['temp_min'])
    return res
})
.then((res) => {
    for(let item=0; item < res.length; item++){
        console.log("temperatura mínima " + res[item]['main']['temp_min'])
        console.log("temperatura máxima " + res[item]['main']['temp_max'])
        console.log("umidade relativa do ar " + res[item]['main']['humidity'])
        console.log("descrição de cada previsão " + res[item]['weather'][0]['description'])
    }
})