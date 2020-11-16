import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  supplierList = [
    {
      supplierId: 1,
      supplierName: 'Siemens OY',
      supplierDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris efficitur eu mi elementum vestibulum. Proin luctus pulvinar sollicitudin. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
      supplierCategories: ["Low-Voltage", "Li-ion Batteries", "Smart controllers", "Batteries"]
    },
    {
      supplierId: 2,
      supplierName: 'EnergyKit',
      supplierDescription: 'Sed congue felis non libero ornare, vitae aliquam justo egestas. Nulla facilisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tortor sem, condimentum at turpis viverra, gravida consectetur nunc.',
      supplierCategories: ["Batteries"]
    },
    {
      supplierId: 3,
      supplierName: 'Dekomir',
      supplierDescription: 'Our company employs only top experts with university degrees. Our team has over 25 years combined experience, allowing us to solve even the most difficult problems and provide a full range of services, from design and installation to subsequent maintenance service.',
      supplierCategories: ["Frequency converters", "Power supply"]
    },
    {
      supplierId: 4,
      supplierName: 'VPT',
      supplierDescription: 'VPT, Inc. (VPT®) is a global leader in providing power conversion solutions for use in avionics, military, space, and industrial applications.VPT offers high reliability DC-DC converters, EMI filters, accessory power products, and custom engineering services for the rapid development of critical power systems.',
      supplierCategories: ["DC-DC Converters", "EMI filters", "Power products"]
    },
    {
      supplierId: 5,
      supplierName: 'Eurocircuits',
      supplierDescription: 'We produce prototype and small batch boards in our specialist factories in Germany and Hungary. As an additional service to our customers we manufacture medium-volumes from our wholly owned factory in India. Set up in Belgium in 1991, today we employ around 400 people in Belgium, Germany, Hungary and India, plus sales companies in France, Germany and Switzerland and sales offices in Italy and UK. We currently produce more than 100,000 orders per year for almost 20,000 users ordering for more than 12,000 active customers.',
      supplierCategories: ["PCB"]
    }
  ];

}
