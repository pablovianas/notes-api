class AppError{
    message;
    statusCode;

    constructor(message, statusCode = 400){ //é carregado automaticamente quando a classe é instanciada
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;