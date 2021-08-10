import { NgModule } from '@angular/core';

import { ItemCountComponent } from './pagination/item-count.component';
import { SharedLibsModule } from './shared-lib.modules';

@NgModule({
  imports: [SharedLibsModule],
  declarations: [
    ItemCountComponent,
  ],
  exports: [
    SharedLibsModule,
    ItemCountComponent,
  ],
})
export class SharedModule {}