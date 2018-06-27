import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the Slides page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html',
})
export class Slides {

  slides = [
  {
    title: "Welcome to HoT Steps!",
    description: "Our <b>Annual Competition</b> to kick start spring with some exercise.",
    image: "assets/imgs/foot.png",
  },
  {
    title: "Teams",
    description: "This is a <b>Team Competion</b> for teams of 4 participants to see who can take the most steps for the month of <b>September</b> and become the winners of the HoT Steps Trophy.",
    image: "assets/imgs/foot.png",
  },
  {
    title: "Rules",
    description: "<ul> <li><b>Act with Integrity</b> - make sure you are accurate with your step counts </li> <li><b>Operate as One</b> - support your team and work together </li> <li><b>No Bullshit</b> - say no more!!! </li> </ul>",
    image: "assets/imgs/foot.png",
  }
];

  constructor(public navCtrl: NavController) {
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Slides');
  }

}
