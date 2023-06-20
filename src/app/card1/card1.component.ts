import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component {
  constructor(private routes: Router) {

  }
  ngOnInit() {

  }
  famous = [
    {
      src: '../assets/images/b1.jpg',
      alt: 'item1',
      title: 'Borra caves',
      desc: 'Located on the east coast of India, the Borra Caves are situated in the Ananthagiri hills of the Araku Valley in Visakhapatnam district. ',
      button: 'Readmore'
    },
    {
      src: '../assets/images/k1.jpeg',
      alt: 'item2',
      title: 'Kailasagiri',
      desc: 'Located in the scenic locales of Vizag, Kailash Giri is a beautiful hilltop park perched at a height of 360 ft. Sprawling over 100 acres of lush green land area.',
      button: 'Readmore'
    },
    {
      src: '../assets/images/r1.jpg',
      alt: 'Item3',
      title: 'Rushikonda beach',
      desc: 'The Rushikonda Beach is a stunning shore located on the coast of the Bay of Bengal, in the Indian state of Andhra Pradesh',
      button: 'Readmore'
    },
    {
      src: '../assets/images/s1.jpeg',
      alt: 'Item4',
      title: 'Submarine Museum',
      desc: 'Submarine Museum is located in the south-eastern state of India. The museum is inside an actual submarine,which was Indias 5th submarine. ',
      button: 'Readmore' 
    }
  ]
    restaurants = [
    {
      src: '../assets/images/re1.jpeg',
      alt: 'item1',
      title: 'Radisson Blu Resort',
      desc: 'Set close to Visakhapatnam Airport and Kailasagiri train station, Radisson Blu Resort boasts luxury accommodations. The property houses sophisticated ocean-view rooms, a posh ambiance, hot tubs, and beauty services.',
      button: 'Viewdetails'
    },
    {
      src: '../assets/images/re2.jpeg',
      alt: 'item2',
      title: 'Sri Raghavendra Inn',
      desc: 'Situated conveniently close to Visakhapatnam Airport and Railway Station, Sri Raghavendra Inn is an affordable accommodation. The hotel features well-maintained rooms, a homely ambiance, and helpful staff.',
      button: 'Viewdetails'
    },
    {
      src: '../assets/images/re3.jpeg',
      alt: 'Item3',
      title: 'Treebo Trend Seaesta',
      desc: 'Featuring 3-star accommodation, Treebo Trend Seaesta RK Beach is set in Visakhapatnam, 2.2 km from Ramakrishna Beach and 8.1 km from Indira Gandhi Zoological Park. This 3-star hotel offers room service, a 24-hour front desk and free WiFi.',
      button: 'Viewdetails'
    },
    {
      src: '../assets/images/re4.jpeg',
      alt: 'Item4',
      title: 'The Gateway Hotel',
      desc: 'Spices and History. Beaches and Business. Calicut has it all. The Gateway Hotel keeps you close to the city centre while providing a smart retreat. Step out into this historic city and when you were ready, back to modern comfort tucked away in lush greenery.',
      button: 'Viewdetails' 
    }
  ]
  doctors = [
    {
      src: '../assets/images/doc.jpg',
      alt: 'item1',
      title: 'Dr. Prasad Nallana',
      desc: '*Radiologist  *Interventional Radiologist   MBBS | DNB - Radio Diagnosis  20 years of experience',
      button: 'Equire now'
    },
    {
      src: '../assets/images/doc2.jpg',
      alt: 'item2',
      title: 'Dr. Jaideep Trivedi',
      desc: '*Cardiothoracic And Vascular Surgeon   MBBS | MS - General Surgery | MCh - Cardio Thoracic and Vascular Surgery',
      button: 'Equire now'
    },
    {
      src: '../assets/images/doc3.jpg',
      alt: 'item2',
      title: 'Dr. Satya kumari',
      desc: '16 years of experience  *Cardiologist   MBBS | MD - General Medicine | DM - Cardiology',
      button: 'Equire now'
    }
  ]
  guides = [
    {
      src: '../assets/images/ttt.jpg',
      alt: 'item1',
      title: 'Mis. Madhumadi',
      desc: 'I am a very good English speaker. I was very passionate about travelling and guiding. I have many best concepts to travel with thrills you and have very good information about places and good time fun time. ',
      button: 'Book Guide'
    },
    {
      src: '../assets/images/t.jpg',
      alt: 'item2',
      title: 'Mr. Surya Kumar',
      desc: 'I Love Travelling!I am from Andhrapradesh!Economy is my first concern. I can assist tourists/travellers in getting good food, accomdation and travel things in good price.I am a very good English speaker.',
      button: 'Book Guide'
    },
    {
      src: '../assets/images/tt.jpg',
      alt: 'item2',
      title: 'Mis. Sunethri',
      desc: 'I am born & brought up in Visakhapatnam, well versed with best. Beaches, Parks, Hill Stations, Meusems etc. I am confident with my communication skills.I am able to deal with all people nicely. ',
      button: 'Book Guide'
    }
  ]
  Onclick() {
    this.routes.navigateByUrl('p1')
  }
}

