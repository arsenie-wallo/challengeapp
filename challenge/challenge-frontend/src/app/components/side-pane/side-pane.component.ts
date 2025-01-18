import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {
  IonContent,
} from '@ionic/angular/standalone';



@Component({
  selector: 'app-side-pane',
  templateUrl: './side-pane.component.html',
  styleUrls: ['./side-pane.component.scss'],
  imports: [IonicModule, IonContent],
  standalone: true,
})
export class SidePaneComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hello from side')

  }

}
