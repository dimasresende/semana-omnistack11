import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    return (
        <div className="new-incident-container">
            <div className="container">
            <section>
                <img src={logoImg} alt="Be The Hero" />
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói e resolver isso.</p>
                <Link className="back-link" to="/profile"><FiArrowLeft size={16} color="#e02041" />Voltar para home</Link>
            </section>
            <form>
                <input placeholder="Título do caso" />
                <textarea placeholder="Decrição" />
                <input placeholder="Valor em Reais" />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
       </div>
    );
}