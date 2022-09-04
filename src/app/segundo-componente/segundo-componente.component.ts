import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css'],
})
export class SegundoComponenteComponent {
  nome = 'gabolandia';
  dataDeNascimento = '2003-06-25';
  imageUrl = '../../assets/github_avatar.jpg';

  mostrarDataNascimento() {
    alert(`A data de nascimento do ${this.nome} é ${this.dataDeNascimento}`);
  }
}
