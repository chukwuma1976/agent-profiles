import { Routes } from '@angular/router';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';
import { AddressComponent } from './address/address.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BankCardComponent } from './bank-card/bank-card.component';
import { CompanyComponent } from './company/company.component';
import { CryptoComponent } from './crypto/crypto.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AgentGalleryComponent } from './agent-gallery/agent-gallery.component';
import { AgentStatisticsComponent } from './agent-statistics/agent-statistics.component';
import { AgentListScrollComponent } from './agent-list-scroll/agent-list-scroll.component';
import { OlympicStatsComponent } from './olympic-stats/olympic-stats.component';

export const routes: Routes = [
    { path: 'agents-home-page', component: HomePageComponent },
    { path: 'agents', component: AgentListComponent },
    { path: 'agents-scroll', component: AgentListScrollComponent },
    { path: 'agent-gallery', component: AgentGalleryComponent },
    { path: 'agent-statistics', component: AgentStatisticsComponent },
    { path: 'olympic-statistics', component: OlympicStatsComponent },
    {
        path: 'agent/:id', component: AgentDetailComponent,
        children: [
            { path: '', component: AddressComponent },
            { path: 'address', component: AddressComponent },
            { path: 'bank-card', component: BankCardComponent },
            { path: 'company', component: CompanyComponent },
            { path: 'cryptocurrency', component: CryptoComponent }
        ]
    },
    { path: '', redirectTo: 'agents-home-page', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];
