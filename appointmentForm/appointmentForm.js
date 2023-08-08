import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import Appointment_Date__c from '@salesforce/schema/Appointment_Detail__c.Appointment_Date__c';
import Appointment_Time__c from '@salesforce/schema/Appointment_Detail__c.Appointment_Time__c';
import Contact__c from '@salesforce/schema/Appointment_Detail__c.Contact__c';
import Subject__c from '@salesforce/schema/Appointment_Detail__c.Subject__c';
import Description__c from '@salesforce/schema/Appointment_Detail__c.Description__c';


export default class AppointmentForm extends LightningElement {
    appointmentdateField = Appointment_Date__c;
    appointmenttimeField = Appointment_Time__c;
    contactField = Contact__c;
    subjectField = Subject__c;
    descriptionField = Description__c;

    @api recordId;
    @api objectApiName;

    handleSuccess(event) {

        const evt = new ShowToastEvent({
            title: 'Success',
            message: 'Record created successfully',
            variant: 'Success',
          });
          this.dispatchEvent(evt);

    }
}