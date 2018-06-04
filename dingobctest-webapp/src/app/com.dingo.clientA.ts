import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace com.dingo.clientA{
   export class MainEquipment extends Asset {
      name: string;
      serial: string;
      description: string;
      components: Component[];
      HistComponents: HistComponent[];
      owner: Company;
   }
   export class Component extends Asset {
      name: string;
      serial: string;
      description: string;
      observations: Observation[];
      owner: Company;
   }
   export class HistComponent extends Asset {
      name: string;
      serial: string;
      description: string;
      observations: Observation[];
      owner: Company;
   }
   export class Observation extends Asset {
      observationNo: string;
      title: string;
      description: string;
   }
   export class Company extends Participant {
      companyName: string;
   }
   export class attachComponentToME extends Transaction {
      equipment: MainEquipment;
      component: Component;
   }
// }
