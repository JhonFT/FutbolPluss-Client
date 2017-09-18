import { Routes, RouterModule } from '@angular/router';
import { LoginPage} from './page/login/login.pages.component';
const ROUTES: Routes = [
    { path: '', component: LoginPage },
    { path: '**', redirectTo: '' }
]
export const APP_ROUTING = RouterModule.forRoot(ROUTES, { useHash: true });
