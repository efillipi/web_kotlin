import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

export default function Profile() {

  const [incidents, setIncidents] = useState([])


  useEffect(() => {
    api.get('/accounts').then(response => {
      setIncidents(response.data)
    })
  }, [])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/accounts/${id}`)

      setIncidents(incidents.filter(incident => incident.id !== id))
    } catch (err) {
      alert('Erro ao deletar caso, tente novamente.')
    }
  }


  return (
    <div className="profile-container">
      <header>
        <Link className="button" to="/new"> Cadastrar novo caso </Link>
      </header>
      <h1> Casos Cadastrados </h1>
      <ul>
        {incidents.map(incident => (
          <li key={incident.id}>
            <strong> CASO: </strong>
            <p> {incident.name} </p>

            <strong> DESCRIÇÃO: </strong>
            <p> {incident.document} </p>

            <strong> VALOR: </strong>
            <p> {incident.phone} </p>

            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
