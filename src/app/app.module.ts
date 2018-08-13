import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { AlbumsComponent } from './albums/albums.component';
import { FooterComponent } from './footer/footer.component';
import { AlbumFilterPipe } from './albums/album-filter.pipe';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    AlbumsComponent,
    AlbumFilterPipe,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
