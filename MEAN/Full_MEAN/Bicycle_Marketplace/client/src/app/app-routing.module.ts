import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from "./user/user.component";
import {BrowseComponent} from "./browse/browse.component";
import {ListingsComponent} from "./listings/listings.component";
import {ListingComponent} from "./listing/listing.component";
import {LotdComponent} from "./lotd/lotd.component";
import {NavComponent} from "./nav/nav.component";
import {NewlistingComponent} from "./newlisting/newlisting.component";
import {UserlistingComponent} from "./userlisting/userlisting.component";

const routes: Routes = [
      {path:"register",component:UserComponent},
      {path:"browse",component:BrowseComponent},
      {path:"listings", component: ListingsComponent},
      {path:"listing", component: ListingComponent},
      {path: "browse", component: BrowseComponent},
      {path: "lotd", component: LotdComponent},
      {path:"nav", component: NavComponent},
      {path: "newlisting", component: NewlistingComponent},
      {path: "userlisting", component: UserlistingComponent},
      {path:"**",redirectTo:"register"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
