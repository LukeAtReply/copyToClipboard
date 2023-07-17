import { LightningElement, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CopyToClipboardField extends LightningElement {
    valueToCopy = 'This is a payment link';
    click;
    @api outputValue3;
    @api input = 'Copy to clipboard';

    handleCopy(){ 
        navigator.clipboard.writeText(this.valueToCopy);
        this.showNotification();
    }

    showNotification() {
        console.log('showNotification');
        const evt = new ShowToastEvent({
            title: 'Copied to clipboard',
            message: 'Now copied',
            variant: 'success',
        });
        this.dispatchEvent(evt);
        console.log('showNotification');
    }
}