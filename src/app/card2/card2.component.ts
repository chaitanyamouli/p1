import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component {
  constructor(private routes: Router) {

  }
  ngOnInit() {

  }
  famous = [
    {
      src: '../assets/images/h2.jpg',
      alt: 'item1',
      title: 'Rajahmundry Godavari Bridge',
      desc: 'The Godavari Bridge or Kovvur–Rajahmundry Bridge is a truss bridge spanning the Godavari River in Rajahmundry,India.',
      button: 'Readmore'
    },
    {
      src: '../assets/images/h3.jpg',
      alt: 'item2',
      title: 'Maredumilli',
      desc: 'The Maredumilli Forests of East Godavari District are having rich biodiversity which forms part of the Eastern Ghats.',
      button: 'Readmore'
    },
    {
      src: '../assets/images/r1.jpg',
      alt: 'Item3',
      title: 'ISKCON Temple',
      desc: 'ISKCON Rajahmundry temple is built in two acres of land situated on the bank of sacred River Godavari..',
      button: 'Readmore'
    },
    {
      src: '../assets/images/h5.jpg',
      alt: 'Item4',
      title: 'Papikondalu ',
      desc: 'Papikondalu mountain range runs along the River Godavari (Western Godavari) and is located in Rajahmundry, .',
      button: 'Readmore' 
    }
  ]
    restaurants = [
    {
      src: '../assets/images/re1.jpeg',
      alt: 'item1',
      title: 'River Bay Resort',
      desc: 'Hotel River Bay is located near to the Main Railway Station central located and its just on the Bank of River Godavari and is a three star property',
      button: 'Viewdetails'
    },
    {
      src: '../assets/images/re2.jpeg',
      alt: 'item2',
      title: 'Hotel Jagadeeswari',
      desc: 'The hotel is near main road but away from noise and crowd as it is on a lane.It is a good modern hotel with affordable tariff.',
      button: 'Viewdetails'
    },
    {
      src: '../assets/images/re4.jpeg',
      alt: 'Item3',
      title: 'Hotel Jetty Grand ',
      desc: ' Located about 1 km from P.V. Narasimha Rao Park and 2 km from Rajahmundry Railway Station,provides guests with free Wi-Fi connectivity',
      button: 'Viewdetails'
    },
    {
      src: '../assets/images/re3.jpeg',
      alt: 'Item4',
      title: 'La Hospin Hotel',
      desc: ' et on the banks of the Godavari river, this low-key hotel is a 9-minute walk from Godavari train station.',
      button: 'Viewdetails' 
    }
  ]
  doctors = [
    {
      src: '../assets/images/doc.jpg',
      alt: 'item1',
      title: 'Dr. Voodi Santosh',
      desc: 'MDS Orthodontics and Dento Facial Orthopedics, MBA Hosipital Adminstration, Fellow of Academy of General Education (FAGE), BDS',
      button: 'Equire now'
    },
    {
      src: '../assets/images/doc2.jpg',
      alt: 'item2',
      title: 'Dr. T.Kirankumar',
      desc: 'Homeopathy Doctor 27Years Experience.',
      button: 'Equire now'
    },
    {
      src: '../assets/images/doc3.jpg',
      alt: 'item2',
      title: 'Dr. Narendranadh Meda',
      desc: 'Vascular Surgeon 17 Years Exp. MBBS, DNB ( Peripheral Vascular Surgery), MS - General Surgery',
      button: 'Equire now'
    }
  ]
  guides = [
    {
      src: '../assets/images/g1.jpeg',
      alt: 'item1',
      title: 'Mis. Madhumadi',
      desc: 'I am a very good English speaker. I was very passionate about travelling and guiding. I have many best concepts to travel with thrills you and have very good information about places and good time fun time. ',
      button: 'Book Guide'
    },
    {
      src: '../assets/images/g3.jpeg',
      alt: 'item2',
      title: 'Mr. Surya Kumar',
      desc: 'I Love Travelling!I am from Andhrapradesh!Economy is my first concern. I can assist tourists/travellers in getting good food, accomdation and travel things in good price.',
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
    this.routes.navigateByUrl('')
  }
}
