import React from 'react';
import { useState, useEffect } from "react";

let contador = 0
function Forms() {
    
    const [vendedor,setVendedor] = useState("")
    const [salarioBase,setSalarioBase] = useState("")
    const [venda,setVenda] = useState("")
    const [lista, setLista] = useState([])
    
    function salarioTotal(salarioBase, venda){
        let salarioTotal = salarioBase + ((15*venda)/100)
        return salarioTotal
    }

    const round = (num, places) => {
        return +(parseFloat(num).toFixed(places));
    }
    
    function handleSaller(ev){
        ev.preventDefault();
        let listaAux = []
        if(vendedor && salarioBase && venda){
        listaAux.push(vendedor)
        listaAux.push(salarioBase)
        listaAux.push(venda)
        listaAux.push(salarioTotal(round(Number(salarioBase),2),round(Number(venda)),2))
        lista.push(listaAux)
        setVendedor("")
        setSalarioBase("")
        setVenda("")
        }
        localStorage.setItem('vendedoresData',JSON.stringify(lista));
    }

    return (
        <>
        <form onSubmit ={handleSaller}>
            <h1>Cadastro de Vendedores</h1>
            <input onChange={(ev) => setVendedor(ev.target.value)} value = {vendedor} placeholder="Digite seu nome"type="text"></input>
            <input onChange={(ev) => setSalarioBase(ev.target.value)} value = {salarioBase} placeholder="Digite o seu salario base"type = "number"></input>
            <input onChange={(ev) => setVenda(ev.target.value)} value = {venda} placeholder="Digite a quantidade de vendas em dinheiro"type = "number"></input>
            <button type="submit">Enviar</button>
        </form>
        <table>
                <tr class="first">
                    <th>Vendedor</th>
                    <th>Salario Base</th>
                    <th>Vendas em Dinheiro</th>
                    <th>Salario Total</th>
                </tr>
                {lista.map(element =>{
                        contador++
                        return(
                            <tr className= {contador%2 ? 'white' : 'gray'}>
                                <th className="repeat">{element[0]}</th>
                                <th className="repeat" >{element[1]}</th>
                                <th className="repeat">{element[2]}</th>
                                <th className="repeat">{element[3]}</th>
                            </tr>
                            )      
                        }
                    )}
        </table>
        </>
    );
  }
  
  export default Forms;