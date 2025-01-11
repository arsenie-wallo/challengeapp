// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class CardsService {
//   // Replace this URL with your API endpoint that serves cards data from MongoDB
//   private apiUrl = 'http://localhost:3000/api/cards'; 
// //   private mongoUri = 'mongodb+srv://arseniesarmiento:W1kyvk1qM56KF52J@challengecluster2024122.epffu.mongodb.net/wallopay-chc';

//   constructor(private http: HttpClient) {}

//   // Method to fetch cards data from the API
//   getCards(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
// }