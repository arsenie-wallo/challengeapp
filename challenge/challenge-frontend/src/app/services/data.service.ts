import { Injectable } from '@angular/core';

export interface Department {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean,
  age: 21;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public departments: Department[] = [
    {
      fromName: 'Matt Chorsey',
      subject: 'New event: Trip to Vegas',
      date: '9:32 AM',
      id: 0,
      read: false,
      age: 21
    },
    {
      fromName: 'Lauren Ruthford',
      subject: 'Long time no chat',
      date: '6:12 AM',
      id: 1,
      read: false,
      age: 21
    },
    {
      fromName: 'Jordan Firth',
      subject: 'Report Results',
      date: '4:55 AM',
      id: 2,
      read: false,
      age: 21
    },
    {
      fromName: 'Bill Thomas',
      subject: 'The situation',
      date: 'Yesterday',
      id: 3,
      read: false,
      age: 21
    },
    {
      fromName: 'Joanne Pollan',
      subject: 'Updated invitation: Swim lessons',
      date: 'Yesterday',
      id: 4,
      read: false,
      age: 21
    },
    {
      fromName: 'Andrea Cornerston',
      subject: 'Last minute ask',
      date: 'Yesterday',
      id: 5,
      read: false,
      age: 21
    },
    {
      fromName: 'Moe Chamont',
      subject: 'Family Calendar - Version 1',
      date: 'Last Week',
      id: 6,
      read: false,
      age: 21
    },
    {
      fromName: 'Kelly Richardson',
      subject: 'Placeholder Headhots',
      date: 'Last Week',
      id: 7,
      read: false,
      age: 21
    }
  ];

  constructor() { }

  public getdepartments(): Department[] {
    return this.departments;
  }

  public getdepartmentsById(id: number): Department {
    return this.departments[id];
  }
}
