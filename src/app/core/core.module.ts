import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from './services/seo.service';
import { FlowbiteService } from './services/flowbite.service';

@NgModule({
  imports: [CommonModule],
  providers: [SeoService, FlowbiteService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}