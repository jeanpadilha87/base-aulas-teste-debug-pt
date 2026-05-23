import { describe, it, expect } from '@jest/globals'
import service from '../src/services/exercicios.js'

// SOMA

describe('Testes da função Somar', () => {

    it('Somar caso de teste 1', () => {
        expect(service.Somar(1, 99)).toBe(100)
    })

    it('Somar caso de teste 2', () => {
        expect(service.Somar(-1, 99)).toBe(98)
    })

    it('Somar caso de teste 3', () => {
        expect(service.Somar(1, -99)).toBe(-98)
    })

    it('Somar caso de teste 4', () => {
        expect(service.Somar(-1, -99)).toBe(-100)
    })

    it('Somar caso de teste 5', () => {
        expect(service.Somar(1.5, 2.3)).toBe(3.8)
    })

    it('Somar caso de teste 6 - letras', () => {
        expect(() => service.Somar('batata', 1)).toThrow()
    })

    it('Somar caso de teste 7 - letras', () => {
        expect(() => service.Somar(1, 'batata')).toThrow()
    })

    it('Somar caso de teste 8', () => {
        expect(service.Somar(0, 1)).toBe(1)
    })

    it('Somar caso de teste 9', () => {
        expect(service.Somar(1, 0)).toBe(1)
    })

})

// SUBTRAÇÃO

describe('Testes da função Subtrair', () => {

    it('Subtrair caso de teste 10', () => {
        expect(service.Subtrair(10, 5)).toBe(5)
    })

    it('Subtrair caso de teste 11', () => {
        expect(service.Subtrair(-10, 5)).toBe(-15)
    })

    it('Subtrair caso de teste 12', () => {
        expect(service.Subtrair(10, -5)).toBe(15)
    })

    it('Subtrair caso de teste 13', () => {
        expect(service.Subtrair(-10, -5)).toBe(-5)
    })

    it('Subtrair caso de teste 14', () => {
        expect(service.Subtrair(0, 5)).toBe(-5)
    })

    it('Subtrair caso de teste 15', () => {
        expect(service.Subtrair(5, 0)).toBe(5)
    })

    it('Subtrair caso de teste 16', () => {
        expect(service.Subtrair(1.5, 0.5)).toBe(1)
    })

    it('Subtrair caso de teste 17 - letras', () => {
        expect(() => service.Subtrair('batata', 5)).toThrow()
    })

    it('Subtrair caso de teste 18 - letras', () => {
        expect(() => service.Subtrair(5, 'batata')).toThrow()
    })

})

// MULTIPLICAÇÃO

describe('Testes da função Multiplicar', () => {

    it('Multiplicar caso de teste 19', () => {
        expect(service.Multiplicar(10, 5)).toBe(50)
    })

    it('Multiplicar caso de teste 20', () => {
        expect(service.Multiplicar(-10, 5)).toBe(-50)
    })

    it('Multiplicar caso de teste 21', () => {
        expect(service.Multiplicar(-10, -5)).toBe(50)
    })

    it('Multiplicar caso de teste 22', () => {
        expect(service.Multiplicar(0, 5)).toBe(0)
    })

    it('Multiplicar caso de teste 23', () => {
        expect(service.Multiplicar(5, 0)).toBe(0)
    })

    it('Multiplicar caso de teste 24', () => {
        expect(service.Multiplicar(1.5, 2)).toBe(3)
    })

    it('Multiplicar caso de teste 25 - letras', () => {
        expect(() => service.Multiplicar('batata', 5)).toThrow()
    })

})

// DIVISÃO

describe('Testes da função Dividir', () => {

    it('Dividir caso de teste 26', () => {
        expect(service.Dividir(10, 2)).toBe(5)
    })

    it('Dividir caso de teste 27', () => {
        expect(service.Dividir(10, -2)).toBe(-5)
    })

    it('Dividir caso de teste 28', () => {
        expect(service.Dividir(-10, -2)).toBe(5)
    })

    it('Dividir caso de teste 29', () => {
        expect(service.Dividir(0, 5)).toBe(0)
    })

    it('Dividir caso de teste 30', () => {
        expect(service.Dividir(5, 2)).toBe(2.5)
    })

    it('Dividir caso de teste 31 - divisão por zero', () => {
        expect(() => service.Dividir(5, 0)).toThrow()
    })

    it('Dividir caso de teste 32 - letras', () => {
        expect(() => service.Dividir('batata', 2)).toThrow()
    })

})