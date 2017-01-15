import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NoContentComponent } from './no-content/no-content.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NoContentComponent }
];

export const routing = RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
});
