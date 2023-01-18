import Fastify from "fastify"
const { PrismaClient } = require('@prisma/client')

const app = Fastify()
const prisma = new PrismaClient()

/*
Metodo HTTP ~ Get, Post, Put, Patch, Delete
*/

//ROTA
app.get ('/', async () =>
{
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: "Estudar"
            }
        }
    })
    return habits
})


app.listen ( {
    port: 3333,
}).then(() =>{
    console.log("Servidor HTTP em execução")
})