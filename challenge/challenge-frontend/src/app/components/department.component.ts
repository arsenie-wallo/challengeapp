
import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Platform, IonItem, IonLabel, IonNote, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { DepartmentApi } from '../services/data.service';
import { DepartmentInformation } from '../models/data';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, IonItem, IonLabel],
}) 
export class DepartmentComponent implements OnInit {
  private platform = inject(Platform);
  @Input() department?: DepartmentInformation;
  isIos() {
    return this.platform.is('ios')
  }
  constructor() {
    addIcons({ chevronForward });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
