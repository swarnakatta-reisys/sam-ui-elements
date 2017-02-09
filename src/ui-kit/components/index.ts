import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamFormControlsModule } from '../form-controls';
import { SamDirectivesModule } from '../directives';

import { AccordionsModule } from './accordion';
import { SamAlertComponent } from './alert';
import { SamAlphabetSelectorComponent } from './alphabet-selector';
import { SamBannerComponent } from './banner';
import { SamHeaderComponent } from './header';
import { SamLabelComponent } from './label';
import { SamModalComponent } from './modal';
import { SamMultiSelectDropdownComponent } from './multiselect-dropdown';
import { SamPaginationComponent } from './pagination';
import { SamPointOfContactComponent } from './point-of-contact';
import { SamSidenavModule } from './sidenav';
import { SamTabsComponent,SamTabComponent } from './tabs';
import { SamWrapperModule } from '../wrappers';

@NgModule({
  imports: [ 
    CommonModule,
    SamFormControlsModule,
    SamDirectivesModule,
    AccordionsModule,
    SamSidenavModule,
    SamWrapperModule 
  ],
  declarations: [
    SamAlertComponent,
    SamAlphabetSelectorComponent,
    SamBannerComponent,
    SamHeaderComponent,
    SamLabelComponent,
    SamModalComponent,
    SamMultiSelectDropdownComponent,
    SamPaginationComponent,
    SamPointOfContactComponent,
    SamTabsComponent,
    SamTabComponent,
  ],
  exports: [
    SamAlertComponent,
    SamAlphabetSelectorComponent,
    SamBannerComponent,
    SamHeaderComponent,
    SamLabelComponent,
    SamModalComponent,
    SamMultiSelectDropdownComponent,
    SamPaginationComponent,
    SamPointOfContactComponent,
    SamSidenavModule,
    SamTabsComponent,
    SamTabComponent,
    AccordionsModule
  ]
})
export class SamComponentsModule {}