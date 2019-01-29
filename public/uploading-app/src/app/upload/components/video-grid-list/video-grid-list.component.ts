import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

import { Video } from '@app/upload/models/interfaces/video.interface';


@Component({
  selector    : 'app-video-grid-list',
  templateUrl : './video-grid-list.component.html',
  styleUrls   : ['./video-grid-list.component.scss']
})
export class VideoGridListComponent implements OnInit {
  
  isWebLandscape       : Observable<BreakpointState>;
  isWebPortrait        : Observable<BreakpointState>;
  isTabletLandscape    : Observable<BreakpointState>;
  isTabletPortrait     : Observable<BreakpointState>;
  isHandsetLandscape   : Observable<BreakpointState>;
  isHandsetPortrait    : Observable<BreakpointState>;
  isMaxWidth599Screen  : Observable<BreakpointState>;
  isMaxWidth425Screen  : Observable<BreakpointState>;
  
  rowHeight : string;
  gridColumn: number;
  
  videos: Video[] = this.route.snapshot.data.videos;

  constructor(private route: ActivatedRoute,
              private breakpointObserver: BreakpointObserver) {}
              
  ngOnInit(): void {
    this.initializeBreakpointObservers();
  }
  
  initializeBreakpointObservers(): void {
    const observe = breakpoint => this.breakpointObserver.observe(breakpoint);
    
    this.isWebLandscape      = observe(Breakpoints.WebLandscape);
    this.isWebPortrait       = observe(Breakpoints.WebPortrait);
    this.isTabletLandscape   = observe(Breakpoints.TabletLandscape);
    this.isTabletPortrait    = observe(Breakpoints.TabletPortrait);
    this.isHandsetLandscape  = observe(Breakpoints.HandsetLandscape);
    this.isHandsetPortrait   = observe(Breakpoints.HandsetPortrait);
    this.isMaxWidth599Screen = observe('(max-width: 599px)');
    this.isMaxWidth425Screen = observe('(max-width: 425px)');
    
    this.observeBreakpoints();
  }
  
  observeBreakpoints(): void {
    const matches            = breakpoints => breakpoints.map(({ matches }) => matches);
    
    const combineBreakpoints = [
      this.isWebLandscape,
      this.isWebPortrait,
      this.isTabletLandscape,
      this.isTabletPortrait,
      this.isHandsetLandscape,
      this.isHandsetPortrait,
      this.isMaxWidth599Screen,
      this.isMaxWidth425Screen
    ];
    
    combineLatest(...combineBreakpoints)
      .pipe(map(breakpoints => matches(breakpoints)))
      .subscribe(([ webL, webP, tabletL, tabletP, handsetL, handsetP, s599, s425 ]) => {
        this.gridColumn = webL || tabletL ? 4 : webP || handsetL ? 3 : tabletP ? 2 : 1;
        this.rowHeight  = s425 ? '1:0.7' : s599 ? '1:0.6' : '1:0.8';
      });
    
  }
  
}
