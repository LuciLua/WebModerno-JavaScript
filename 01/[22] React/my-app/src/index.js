// tem que ser improtado o React pois quando o JSX for convertido pras funcoes internas a dependencia do react vai ser usada
import React from 'react';
import ReactDOM from 'react-dom';

import './styles/globals.css'

import QualquerNome from './components/First';
import GoodMorning from './components/GoodMorning';
// não posso colocar componentes com letra minuscula

import Multi, { BoaNoite } from './components/Multiplos';

import Saudacao from './components/Saudacao';
import Pai from './components/Pai';

import Filho from './components/Filho'

const elementos = (
<main>
    <h1>Exercícios React!</h1>
    <QualquerNome />
    <GoodMorning name="Luci" age={20} />
    <BoaNoite name="Luci" />
    <Multi.BoaTarde name="luci"/>
    <hr/>
    <Saudacao tipo="Bom dia" nome="Maria!" />
    <Pai  nome="Paulo" sobrenome="Silva">
        <Filho nome="Pedro" />
        <Filho nome="Paulo" sobrenome="Silva"/>
        <Filho nome="Carla" sobrenome="Silva"/>
    </Pai>
</main>
)
// nõa é possivel alterar aas propriedades que voce recebeu em um componente

ReactDOM.render(
    // esse h1 nao é html puro, mas sim JSX (JS extendido), que será convertido em "HTML" atravez do react
    elementos, document.getElementById('root') // colocando h1 dentro de root
)

// reactNative para dispositivos


