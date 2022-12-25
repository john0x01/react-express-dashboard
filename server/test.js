const axios = require('axios')

const getBalance = (backendData) => {
    let balancesArray = []
    for(let i in backendData) {
        const monthBalance = {
            month: backendData[i].month,
            balance: backendData[i].startingBalance ? 
                // Se o mês tiver startingBalance (apenas Janeiro), será
                // o saldo
                backendData[i].startingBalance : ( 
                    balancesArray[i - 1] ? balancesArray[i - 1].balance +
                       // Se o saldo do mês anterior estiver setado, somar
                       // ele com o netProfit do mês atual 
                        backendData[i].revenue - 
                        backendData[i].soldGoodsCosts - 
                        backendData[i].operatingCosts -
                        (backendData[i].taxes * backendData[i].revenue) :
                            ''

                )
            
        }
        balancesArray.push(monthBalance)
    }
    console.log(balancesArray)
}

axios.get('http://localhost:4000/api')
    .then(res => res.data)
    .then(data => getBalance(data))