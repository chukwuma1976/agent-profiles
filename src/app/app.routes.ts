import { Routes } from '@angular/router';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddressComponent } from './address/address.component';
import { BankCardComponent } from './bank-card/bank-card.component';
import { CompanyComponent } from './company/company.component';
import { CryptoComponent } from './crypto/crypto.component';

export const routes: Routes = [
    {path: 'agents', component: AgentListComponent},
    {path: 'agent/:id', 
        component: AgentDetailComponent,
        children: [
            {path: '', component: AddressComponent},
            {path: 'address', component: AddressComponent},
            {path: 'bank-card', component: BankCardComponent},
            {path: 'company', component: CompanyComponent},
            {path: 'cryptocurrency', component: CryptoComponent}
        ]
    },
    {path: '', redirectTo: 'agent-list', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}
];
