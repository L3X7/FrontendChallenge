import { Component, OnInit } from '@angular/core';
import { ItunesApiService } from "../services/itunes-api.service"
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.less']
})
export class AlbumsComponent implements OnInit {

  public topAlbums: any;
  public apiData: any;
  public p: 1;
  public albumSelected: any;
  public searchTerm: string;
  
  constructor(
    private iTunesApiService: ItunesApiService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.getTopAlbums();
  }

  public getTopAlbums() {
    this.iTunesApiService.getTopAlbums().subscribe((data: Array<object>) => {
      
      this.apiData = data;
      this.topAlbums = this.apiData.feed.entry;

    })
  }

  open(content, data) {
    this.albumSelected = data;
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
  
}
