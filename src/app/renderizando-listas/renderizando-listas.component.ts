import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css'],
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    { id: 1, nome: 'Samsung A20', descricao: 'bom e barato', esgotado: false },
    { id: 2, nome: 'Iphone X', descricao: 'melhor camera', esgotado: true },
    {
      id: 3,
      nome: 'Nokia 1500S',
      descricao: 'se cair no chao nao quebra',
      esgotado: true,
    },
    {
      id: 4,
      nome: 'Xiaomi xs',
      descricao: 'pastel  de flango',
      esgotado: false,
    },
    {
      id: 5,
      nome: 'Microsoft',
      descricao: 'na compra vc ganha o office 365',
      esgotado: false,
    },
    {
      id: 6,
      nome: 'Google',
      descricao: 'fala mais alto para a gente ouvir',
      esgotado: true,
    },
    {
      id: 7,
      nome: 'Xiaomi 2000',
      descricao: 'bateria dura 100 anos',
      esgotado: true,
    },
  ];
}
