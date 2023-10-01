require("express-async-errors");
const express = require("express");
const routes = require("./routes");

const AppError = require("./utils/AppError");
const migrationsRun = require("./database/sqlite/migrations");
const app = express(); //inicializa o express na variavel app
app.use(express.json())

app.use(routes)

migrationsRun()


app.use((error, requests, response, next) => {
    if(error instanceof AppError){ //erro gerado pelo lado do cliente 
        return response.status(error.statusCode).json({
            message: error.message
        })
    }
    console.error(error)
    return response.status(500).json({
        status: "error",
        message: `Internal server error ${error.message}`
    }) //erro gerado pelo lado do servidor
})


const PORT = 3333; //porta que o servidor vai rodar


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}) //inicializa o servidor na porta 3333