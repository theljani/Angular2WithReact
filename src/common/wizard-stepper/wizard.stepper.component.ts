import {Component, Input, OnInit} from '@angular/core';

import {Step} from './_entities/step';

@Component({
    selector: 'wizard-stepper',
    moduleId: module.id,
    templateUrl: '_templates/wizard.stepper.component.html',
    styleUrls: ['_styles/wizard.stepper.component.css']
})
export class WizardStepperComponent  implements OnInit {

    @Input() steps: Step[];
    @Input() activeStep: Step;

    setActiveStep(activeStep: Step): void {
        this.activeStep = activeStep;
    }

    getCellsWidth(): number {
        return Math.floor(100/(this.steps.length-1));
    }

    getStepStyle(step: Step): string {
        var className= 'step_inactive';

        if(step.state == 'active') {
            className = 'step_active';
        } else if(step.state == 'done') {
            className = 'step_done';
        }

        return className;
    }    

    ngOnInit(): void {
        //this.activeStep = this.steps[0];
    }
}