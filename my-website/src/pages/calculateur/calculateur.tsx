import React from 'react';
import {FormEvent, useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import Select from 'react-select'
import './styles.css';

function Calculateur() {
    const optionsAge = [
        { value: 1, label: 'Moins de 21 ans' },
        { value: 2, label: 'De 21 ans à 25 ans' },
        { value: 3, label: '26 ans et plus' }
      ]
      const optionsDiplome = [
        { value: 10, label: 'Inférieur au bac ou niveau 4' },
        { value: 20, label: 'Supérieur ou égal au Bac' }
      ]

    const [age, setAge] = useState(0);
    const [diplome, setDiplome] = useState(0);
    const [salaire, setSalaire] = useState(0);

      const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setAge(Number(e.target[1].value))
        setDiplome(Number(e.target[3].value))
      }

        useEffect(() => {   
            if (age + diplome === 11) {
                setSalaire(960.96)
            } else if (age + diplome === 12) {
                setSalaire(1223.04)
            } else if (age + diplome === 13) {
                setSalaire(1747.20)
            } else if (age + diplome === 21) {
                setSalaire(1135.68)
            } else if (age + diplome === 22) {
                setSalaire(1397.76)
            } else if (age + diplome === 23) {
                setSalaire(1747.20)
            } else {
                setSalaire(0)
            }
        }, [age, diplome])


  return (
    <Layout>
      <div className='calculateur_container'>
        <h1>Calcul du salaire mensuel d'un alternant en fonction de sa situation</h1>
        <form onSubmit={handleSubmitForm} className='form'>
        <h2>Âge</h2>
        <Select options={optionsAge} className='select' name='age'/>
        <h2>Diplôme</h2>
        <Select options={optionsDiplome} className='select' name='diplome' />
        <button type='submit'>
            Calculer
        </button>
        </form>
    {salaire != 0 && <p className='resultat-salaire'>Le salaire mensuel de l'alternant est de {salaire} € brut</p>}
      </div>
    </Layout>
  );
}

export default Calculateur;