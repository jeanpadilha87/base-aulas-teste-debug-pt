class Service {
    Somar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Valores inválidos")
        }

        return Number(num1) + Number(num2)
    }

    Subtrair(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Valores inválidos")
        }

        return Number(num1) - Number(num2)
    }

    Multiplicar(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Valores inválidos")
        }

        return Number(num1) * Number(num2)
    }

    Dividir(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Valores inválidos")
        }

        if (Number(num2) === 0) {
            throw new Error("Divisão por zero")
        }

        return Number(num1) / Number(num2)
    }

    Potencia(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Valores inválidos")
        }

        return Math.pow(Number(num1), Number(num2))
    }

    Raiz(num1) {
        if (isNaN(num1)) {
            throw new Error("Valor inválido")
        }

        if (Number(num1) < 0) {
            throw new Error("Raiz de número negativo")
        }

        return Math.sqrt(Number(num1))
    }
}

export default new Service()