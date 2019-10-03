export class Nave{
  constructor (public propulsor: string){}

  IperEspaco(){
    console.log(`entrando no super espaco ${this.propulsor}`)
  }
}

//interface
export interface Carga{
  container?: number
}

//export{Nave, Carga}
