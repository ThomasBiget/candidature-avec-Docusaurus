import React from 'react';
import Layout from '@theme/Layout';
import data from '../../data/alternance.json';
import './styles.css';

interface Avantage {
    text: string;
    id: number;
  }
  
  interface AlternanceProps {
    salaire: number;
    duree: number;
    cout_entreprise: number;
    aide: number;
    OPCO: string;
    url: string;
    tel: string;
    type: string;
    age: number;
    inconvenients: string[];
    avantages: Avantage[];
  }

function Alternance() {

  const infos = data as AlternanceProps;

  return (
      <Layout>
          <div className='alternance_container'>
              <h1>Mon projet alternance</h1>
              <h2>{infos.type}</h2>
              <p>Suite à mes recherches j'ai pu rassembler plusieurs informations:</p>
              <ul>
                  <li>Mon âge ({infos.age} ans) implique de verser 100% du SMIC mais sur lequel tu ne paies pas de charges patronales</li>
                  <li>Le coût de mon recrutement serait d'environ {infos.cout_entreprise} € /mois (simulation effectuée sur le site du gouvernement (<a href="https://alternance.emploi.gouv.fr/simulateur-employeur/etape-1">lien ici</a>)</li>
                  <li>Le salaire que je toucherais serait donc de {infos.salaire} € brut</li>
                  <li>La durée de mon contrat serait de {infos.duree} mois + 2 mois supplémentaires 100% en entreprise (facultatif)</li>
                  <li>Etant donné que je serai demandeur d'emploi, une aide de {infos.aide} € devrait t'être accordée (à confirmer)</li>
                  <li>Afin d'avoir plus d'informations, tu peux te rapprocher de ton OPCO, qui normalement est {infos.OPCO}</li>
                  <li>Le liens de leur site est <a href={infos.url}>{infos.url}</a> et leur numéro de téléphone pour les entreprises est le {infos.tel}</li>
                  <li>Valider ces infos avec un expert comptable</li>
              </ul>
              <h3>Inconvénients</h3>
                <ul>
                    <li>{infos.inconvenients[0]}</li>
                </ul>
                <h3>Avantages</h3>
              <ul>
                  {
                      infos.avantages.map((avantage) => {
                          return <li key={avantage.id}>{avantage.text}</li>
                      })
                  }
              </ul>
          </div>
      </Layout>
  );
}

export default Alternance;