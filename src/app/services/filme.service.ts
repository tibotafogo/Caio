import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {
private filme: Filme[]= [];
  constructor() { }

  public getFilme(): Filme[]{
    return this.filme;
  }
}

interface Filme{
  nome: string;
  done?:boolean;
}