import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { DonarService } from './donar.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ContentComponent, FooterComponent, ParentComponent, ChildComponent
  ],
  imports: [
    BrowserModule,TableModule, HttpClientModule, FormsModule
  ],
  providers: [HttpClient, DonarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
