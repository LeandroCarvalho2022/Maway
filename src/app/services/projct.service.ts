import { Injectable } from '@angular/core';
import { Projcards } from '../interfaces/projcards';

@Injectable({
  providedIn: 'root',
})
export class ProjctService {
  private dados: { [id: string]: Projcards } = {
    id1: {
      nome: 'Capitulo Certo',
      content:
        'Projeto criado em grupo, criamos um e-commerce, utilizamos do PHP, JS, SQL ',
      url: 'https://github.com/LeonardoSaconato/E-commerce-CapituloCerto',
    },
    id2: {
      nome: 'MaChurch',
      content:
        'Este é um projeto voluntário que fiz para a igreja que frequento, foi uma atividade extra-curricular que tomou vida, utilizei apenas angular e bootstrap.',
      url: 'https://github.com/LeandroCarvalho2022/igrejja',
    },
    id3: {
      nome: 'CookSphere',
      content:
        'Projeto que fiz para estudo, apenas treinando o uso de binding, https, Consumo de API, etc. Basicamente é um gerador de receitas. Apenas html css e JS.',
      url: 'https://github.com/LeandroCarvalho2022/CookSpher',
    },
    id4: {
      nome: 'Moments',
      content:
        'Projeto angular para estudo, a ideia era criar uma aplicação que contenha um CMS, um banco de dados e o template para disparar data retornada do banco de dados ferramentas utilizadas: Angular, Typescript, AdonisJS ,html, css. ',
      url: 'https://github.com/LeandroCarvalho2022/MomentsApp',
    },
  };

  constructor() {}

  getDados(id: string) {
    return this.dados[id];
  }
}
