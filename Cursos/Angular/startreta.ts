import {Nave, Carga} from './base-ship'

//heranca e usando interface
export class MF extends Nave implements Carga{

  container: number

  constructor(){
    super('hyperdrive')
    this.container = 2
  }

  IperEspaco(){
    if (Math.random() >= 0.5){
      super.IperEspaco()
    }
      else {
        console.log('Falhou')
      }
  }
}
