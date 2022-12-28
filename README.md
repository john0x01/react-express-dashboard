# ⚛ React & Express Dashboard

## Technologies
<ul>
  <li> ReactJS </li>
  <li> NodeJS </li>
  <li> Express </li>
  <li> Axios </li>
  <li> Victory </li>
</ul>

## Image

![screencapture-localhost-3000-2022-12-27-15_03_32](https://user-images.githubusercontent.com/78546581/209705723-e21415ad-3c0f-4a42-81e8-7b1d2f6d822f.png)

## Usage

```
cd server/ | npm run server & cd client/ | npm start
```
or
```
chmod +x start.sh
./start.sh
```

## Como funciona / How does it works?

### Requesting data

Uma vez que a aplicação está rodando, o componente `App.jsx` fará um GET via axios ao servidor e armazenará o conteúdo recebido.

Once the application is running, the component `App.jsx` will make a GET request via axios to the server and store the received data.

```
const [backendData, setBackendData] = useState([{}])

useEffect(() => {
    axios.get(baseApiUrl)
        .then(res => res.data)
        .then(data => setBackendData(data))

}, []) 
```

### Enviando Dados / Submiting data

Para enviar dados ao sistema, é necessário editar o arquivo `db.json` localizado em `server/db.json`.

In order to submit data into the system, you'll have to edit `db.json` file located on `server/db.json`.

O arquivo JSON contém um array com os meses representados por objetos dessa forma:

The JSON file is an array with months represented by objects that go like this:

```
{ 
    "month": "oct-22", 
    "revenue": 3450,
    "soldGoodsCosts": 1650,
    "operatingCosts": 1980,
    "currentAssets": 1359,
    "currentLiabilities": 4010,
    "taxes": 0.12 
},
```
As outras variáveis mostradas no dashboard são calculadas a partir dessas no banco de dados.

The other variables displayed on the dashboard are calculated from these in the database.

### Calculando Variáveis / Calculating Variables

Existem duas funções no **Componente App** que usam a constante `backendData` para calcular outras variáveis:

There are two functions on the **App Component** that use `backendData` to calculate the other variables:
  1. `getChartsArrays` which returns an object containing separated arrays for every month revenue, outgoing and balance
  2. `calculateVariables` which also returns an object containg specific variables of the defined month (if not defined, will be the latest). These are **percentage**, **outgoing** (Total Despesas), **grossProfit** (Lucro Bruto), **

A primeira função é usada para os gráficos e a segunda para os cards.

The 1st function is used for the charts and the 2nd for the displayed cards.
