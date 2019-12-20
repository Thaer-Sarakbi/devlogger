import { log } from './../components/models/log';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: log[];

  constructor() { 
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date ('12/26/2017 12:54:23')},
      {id: '2', text: 'Added Bootstrap', date: new Date ('12/27/2017 9:00:45')},
      {id: '3', text: 'Added logs component', date: new Date ('12/27/2017 12:00:23')}
    ];
  }

  getLogs(){
    return this.logs
  }
  
  private logSource = new BehaviorSubject<log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();

  setFormLog(log: log){
    this.logSource.next(log)
  }

  addLog(log: log){
    this.logs.unshift(log)
  }

  updateLog(log: log){
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    })
    this.logs.unshift(log)
  }

  deleteLog(log: log){
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    })
  }
}