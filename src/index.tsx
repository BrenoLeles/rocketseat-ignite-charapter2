import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs';

createServer({
    models: {
        transacoes: Model
    },

    seeds(server) {
        server.db.loadData({
            transacoes: [{
                id: 1,
                titulo: 'Freelancer de website',
                tipo: 'retirada',
                categoria: 'Dev',
                valor: 6000,
                createdAt: new Date('2021-11-24 23:00:00')
            },{
                id: 2,
                titulo: 'Freelancer de Sistemas',
                tipo: 'deposito',
                categoria: 'Dev',
                valor: 3000,
                createdAt: new Date('2021-11-24 11:00:00')
            }]
        })
    },

   routes() {

       this.namespace = 'api';

       this.get('/transacoes', () => {
           return this.schema.all('transacoes')
       });

       this.post('/transacoes', (schema, request) => {
           const data = JSON.parse(request.requestBody);
           schema.create('transacoes', data)
           return data;
       })
   }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
