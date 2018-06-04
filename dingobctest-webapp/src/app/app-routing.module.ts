/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { MainEquipmentComponent } from './MainEquipment/MainEquipment.component';
import { ComponentComponent } from './Component/Component.component';
import { HistComponentComponent } from './HistComponent/HistComponent.component';
import { ObservationComponent } from './Observation/Observation.component';


  import { CompanyComponent } from './Company/Company.component';


  import { attachComponentToMEComponent } from './attachComponentToME/attachComponentToME.component';  
const routes: Routes = [
     //{ path: 'transaction', component: TransactionComponent },
    {path: '', component: HomeComponent},
		
		{ path: 'MainEquipment', component: MainEquipmentComponent},
    
		{ path: 'Component', component: ComponentComponent},
    
		{ path: 'HistComponent', component: HistComponentComponent},
    
		{ path: 'Observation', component: ObservationComponent},
    
    
      { path: 'Company', component: CompanyComponent},
      
      
        { path: 'attachComponentToME', component: attachComponentToMEComponent},
        
		{path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
