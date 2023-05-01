export class Todo{
  public id: number;
  public texto: string;
  public completado: boolean;

  constructor(texto: string) {
    this.texto = this.textoCapitalizar(texto);
    this.completado = false;
    this.id = Math.random();
  }

  textoCapitalizar(texto: string): string{
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

}
