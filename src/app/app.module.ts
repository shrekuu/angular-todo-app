import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { IconDefinition } from '@ant-design/icons-angular'
import { DeleteOutline } from '@ant-design/icons-angular/icons';
import { CheckOutline } from '@ant-design/icons-angular/icons';
import { CloseOutline } from '@ant-design/icons-angular/icons';
import { InfoCircleOutline } from '@ant-design/icons-angular/icons';
import { GithubOutline } from '@ant-design/icons-angular/icons';

import { NzMessageService } from 'ng-zorro-antd/message'

const icons: IconDefinition[] = [
  DeleteOutline,
  CheckOutline,
  CloseOutline,
  InfoCircleOutline,
  GithubOutline,
];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzInputModule,
    NzButtonModule,
    NzListModule,
    NzSpaceModule,
    NzDividerModule,
    NzCheckboxModule,
    NzIconModule.forRoot(icons),
    NzModalModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NzMessageService, useValue: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
