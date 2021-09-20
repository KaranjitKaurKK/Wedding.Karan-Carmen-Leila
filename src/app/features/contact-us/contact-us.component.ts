import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

 states: string[]= [ "Afghanistan",  "Albania" ,  "Algeria",  "Andorra" ,  "Angola" ,  "Antigua e Barbuda",  "Arabia Saudita" ,
   "Argentina" ,  "Armenia" ,  "Australia",  "Austria",  "Azerbaigian" , "Bahamas","Bahrein","Bangladesh","Barbados","Belarus",
   "Belgio","Belize ","Benin","Bermuda","Bhutan","Bielorussia","Birmania","Bolivia","Bosnia-Erzegovina","Botswana","Brasile",
   "Bretagna","Brunei","Bulgaria","Burkina Faso","Burundi","Cambogia","Cameroun","Canada","Capo Verde","Cayman","Ciad","Cile",
   "Cina","Cipro", "Città del Vaticano","Colombia","Comore","Corea del Nord","Corea del Sud","Costa d'Avorio","Costarica","Croazia",
   "Cuba","Danimarca","Dominica","Ecuador","Egitto","El Salvador","Emirati Arabi Uniti","Eritrea","Estonia","Etiopia","Figi","Filippine",
   "Finlandia","Francia","Gabon","Gambia","Georgia","Germania","Ghana","Giappone","Gibilterra","Gibuti","Giordania","Grecia","Grenada",
   "Groenlandia","Guadalupa","Guatemala","Guinea","Guinea Equatoriale","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong","India",
   "Indonesia","Iran","Iraq","Irlanda","Islanda","Isole Vergini","Isole Vergini Britanniche","Israele","Italia","Jamaica","Kazakhstan",
   "Kenya","Kirghizstan","Kiribati","Kuwait","Laos","Lapponia","Lesotho","Lettonia","Libano","Liberia","Libia","Liechtenstein","Lituania",
   "Lussemburgo","Macedonia","Madagascar","Madeira","Malawi","Maldive","Malesia","Mali","Malta","Marocco","Marshall Islands","Martinica",
   "Mauritania","Mauritius","Messico","Micronesia","Moldavia","Mongolia","Montenegro","Montserrat","Mozambico","Namibia","Nauru",
   "Nepal","Nicaragua","Niger","Nigeria","Norvegia","Nuova Caledonia","Nuova Zelanda","Olanda","Oman","Pakistan","Palau","Palestina",
   "Panama","Papua Nuova Guinea","Paraguay","Perù","Polinesia Francese","Polonia","Portogallo","Portorico","Principato di Monaco",
   "Qatar","Regno Unito","Rep. Ceca","Rep. Centrafricana","Rep. Del Congo","Rep. Dominicana","Romania","Russia","Rwanda",
   "Saint Kitts e Nevis","Saint Lucia","Saint Vincent e Grenadine","Isole Salomone","Samoa", "San Marino","Santa Sede (Stato della Città del Vaticano)",
   "São Tomé e Príncipe Repubblica democratica di São Tomé Príncipe","Senegal" ,"Serbia","Seicelle","Sierra Leone" ,"Singapore","Siria" ,
   "Slovacchia" ,"Slovenia","Somalia" ,"Spagna" ,"Sri Lanka","Repubblica democratica socialista di Sri Lanka","Stati Uniti","Sudafrica",
   "Sudan","Sudan del Sud","Suriname" ,"Svezia" ,"Svizzera" ,"Tagikistan","Taiwan (Taipei cinese)","Tanzania" ,"Thailandia","Timor-Leste",
   "Togo","Tonga","Trinidad e Tobago" ,"Tunisia ","Turchia","Turkmenistan" ,"Tuvalu","Ucraina" ,"Uganda","Ungheria" ,"Uruguay",
   "Uzbekistan","Vanuatu" ,"Venezuela" ,"Vietnam","Yemen" ,"Zambia","Zimbabwe"];
   
  constructor(private router: Router) { }

  ngOnInit(): void {   
  }
 
  goToThankYouPage(){
    window.location.href = 'localhost:4200/contact-us/thank-you-page';
    this.router.navigate(['contact-us/thank-you-page']);
  }
}
