import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import logoImg from '../../assets/logo.svg'

export default function NewIncident() {
  const [name, setName] = useState('')
  const [document, setDocument] = useState('')
  const [phone, setPhone] = useState('')

  const history = useHistory()

  async function handleNewIncident(e) {
    e.preventDefault()
    const data = {
      name,
      document,
      phone,
    }
    try {
      await api.post('/accounts', data)

      history.push('/')
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente.')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1> Cadastrar Novo Caso </h1>
          <p> Descreva o caso detalhadamente para encontrar um herói para resolver isso. </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          <textarea placeholder="Documento" value={document} onChange={e => setDocument(e.target.value)} />
          <input placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
          <button className="button" type="submit"> Cadastrar </button>
        </form>
      </div>
    </div>
  )
}
