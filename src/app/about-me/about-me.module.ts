import { NgModule } from '@angular/core';
import { AboutMeComponent } from './about-me.component';
import {AboutMeRoutingModule} from './about-me.routing.module';
import {AvatarModule} from 'primeng/avatar';
import {ImageModule} from "primeng/image";
import {PageTitleModule} from "../page-title/page-title.module";

@NgModule({
  declarations: [
    AboutMeComponent
  ],
  imports: [
    AboutMeRoutingModule,
    AvatarModule,
    ImageModule,
    PageTitleModule
  ],
  providers: [],
})
export class AboutMeModule {}
