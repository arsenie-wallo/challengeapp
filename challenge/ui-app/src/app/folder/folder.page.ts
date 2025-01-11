import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,
  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  imports: [IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
  ],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }

  public cardsData = [
    { title: 'Card 1', subtitle: 'Subtitle 1', content: 'This is the content for Card 1' },
    { title: 'Card 2', subtitle: 'Subtitle 2', content: 'This is the content for Card 2' },
    { title: 'Card 3', subtitle: 'Subtitle 3', content: 'This is the content for Card 3' },
  ];
}
