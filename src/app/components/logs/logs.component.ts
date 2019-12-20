import { LogService } from './../../services/log.service';
import { log } from './../models/log';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  /* 
  logs: {
    id: string,
    text: string,
    date: any
  }[];
 
  constructor() { }

  ngOnInit() {
    this.logs = [
      {id: '1', text: 'Generated components', date: new Date ('12/26/2017 12:54:23')},
      {id: '2', text: 'Added Bootstrap', date: new Date ('12/27/2017 9:00:45')},
      {id: '3', text: 'Added logs component', date: new Date ('12/27/2017 12:00:23')}
    ]
  }
*/
logs: log[];

constructor(private logService: LogService) { }

ngOnInit() {
  this.logs = this.logService.getLogs()
}

onSelect(log: log){
  console.log(log)
 this.logService.setFormLog(log)
}

onDelete(log: log){
  if(confirm('Are you Sure')){
    this.logService.deleteLog(log)
  }
}

}
