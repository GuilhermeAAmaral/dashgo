import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker'

type User = {
    name: string
    email: string
    created_at: string
}

export const makeServer = () => {

    const server = createServer({

        models:{//como se fosse o banco de dados 
            user: Model.extend<Partial<User>>({})
        },

        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `User ${i + 1}`
                },
                email() {
                    return faker.internet.email()

                },
                createdAt() {

                }
            })
        },

        seeds(server) {

        },

        routes() {
            this.namespace = 'api' // exemplo de nome para chamar a rota api/users

            this.timing = 750 // é utilizado para gerar um tempo a requisição simulando a realidade,
                             // usado para testar carregamentos 

            this.get('/users')
            this.post('/users')

            this.namespace = '' // reseta o name space para não prejudicar as rotas do frontend, 
                                // deve inserir para evitar conflito com as rotas 

            this.passthrough() //obrigatório no Next
        }
    })

    return server;
}

export default makeServer