import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component {
  constructor(private routes: Router) {

  }
  ngOnInit() {

  }
  famous = [
    {
      src: '../assets/images/durga.jpg',
      alt: 'item1',
      title: 'Durga Matha Temple',
      desc: 'Kanaka Durga Temple, also known as Sri Kanaka Durgamma Devasthanam is a Hindu temple dedicated to Goddess Kanaka Durga.',
      button: 'Readmore'
    },
    {
      src: '../assets/images/bhavani.jpg',
      alt: 'item2',
      title: 'Bhavani Islands',
      desc: 'Bhavani Island situated in the midst of the Krishna River, at Vijayawada. It is located at the upstream of Prakasam Barrage ',
      button: 'Readmore'
    },
    {
      src: '../assets/images/krish.jpg',
      alt: 'Item3',
      title: 'Krishna River',
      desc: 'The Krishna River is a river in the Deccan plateau and is the third-longest river in India, after the Ganges and Godavari. ',
      button: 'Readmore'
    },
    {
      src: '../assets/images/h5.jpg',
      alt: 'Item4',
      title: 'Easteren Ghats',
      desc: 'Ghats mountain range runs along the River Godavari (Western Godavari) and is located in Rajahmundry, Andhra Pradesh.',
      button: 'Readmore' 
    }
  ]
    restaurants = [
    {
      src: '../assets/images/rest.jpg',
      alt: 'item1',
      title: 'United Kitches',
      desc: 'United Telugu Kitchen is located near to the Main Railway Station central located and its just on the Bank of River Godavari and is a three star property',
      button: 'Viewdetails'
    },
    {
      src: '../assets/images/rk.jpg',
      alt: 'item2',
      title: 'RK Foodie',
      desc: 'The hotel is near main road but away from noise and crowd as it is on a lane.It is a good modern hotel with affordable tariff.',
      button: 'Viewdetails'
    },
    {
      src: '../assets/images/bez.jpg',
      alt: 'Item3',
      title: 'Hotel Bez ',
      desc: ' Located about 1 km from P.V. Narasimha Rao Park and 2 km from Rajahmundry Railway Station,provides guests with free Wi-Fi connectivity',
      button: 'Viewdetails'
    },
    {
      src: '../assets/images/Eat.jpg',
      alt: 'Item4',
      title: 'Anand Tel',
      desc: ' et on the banks of the Godavari river, this low-key hotel is a 9-minute walk from Godavari train station and it was an peaseful environment.',
      button: 'Viewdetails' 
    }
  ]
  doctors = [
    {
      src: '../assets/images/doc3.jpg',
      alt: 'item1',
      title: 'Dr. Voodi Santosh',
      desc: 'MDS Orthodontics and Dento Facial Orthopedics, MBA Hosipital Adminstration, Fellow of Academy of General Education (FAGE), BDS',
      button: 'Equire now'
    },
    {
      src: '../assets/images/doc2.jpg',
      alt: 'item2',
      title: 'Dr. T.Kalyani',
      desc: 'Homeopathy Doctor 27Years Experience.Cardiothoracic And Vascular Surgeon MBBS | MCh - Cardio Thoracic and Vascular Surgery.',
      button: 'Equire now'
    },
    {
      src: '../assets/images/doc.jpg',
      alt: 'item2',
      title: 'Dr. Narendranadh Meda',
      desc: 'Vascular Surgeon 17 Years Exp. MBBS, DNB ( Peripheral Vascular Surgery), MS - General Surgery & Vascular Surgeon MBBS ',
      button: 'Equire now'
    }
  ]
  guides = [
    {
      src: '../assets/images/t.jpg',
      alt: 'item1',
      title: 'Mis. Madhumadi',
      desc: 'I am a very good English speaker. I was very passionate about travelling and guiding. I have many best concepts to travel with thrills you and have very good information about places and good time. ',
      button: 'Book Guide'
    },
    {
      src: '../assets/images/tt.jpg',
      alt: 'item2',
      title: 'Mr. Surya Kumar',
      desc: 'I Love Travelling!I am from Andhrapradesh!Economy is my first concern. I can assist tourists/travellers in getting good food, accomdation and travel things in good price.I am a very good English .',
      button: 'Book Guide'
    },
    {
      src: '../assets/images/ttt.jpg',
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
