"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var step_1 = require("./_entities/step");
var WizardStepperComponent = (function () {
    function WizardStepperComponent() {
    }
    WizardStepperComponent.prototype.setActiveStep = function (activeStep) {
        this.activeStep = activeStep;
    };
    WizardStepperComponent.prototype.getCellsWidth = function () {
        return Math.floor(100 / (this.steps.length - 1));
    };
    WizardStepperComponent.prototype.getStepStyle = function (step) {
        var className = 'step_inactive';
        if (step.state == 'active') {
            className = 'step_active';
        }
        else if (step.state == 'done') {
            className = 'step_done';
        }
        return className;
    };
    WizardStepperComponent.prototype.ngOnInit = function () {
        //this.activeStep = this.steps[0];
    };
    return WizardStepperComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], WizardStepperComponent.prototype, "steps", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", step_1.Step)
], WizardStepperComponent.prototype, "activeStep", void 0);
WizardStepperComponent = __decorate([
    core_1.Component({
        selector: 'wizard-stepper',
        moduleId: module.id,
        templateUrl: '_templates/wizard.stepper.component.html',
        styleUrls: ['_styles//wizard.stepper.component.css']
    })
], WizardStepperComponent);
exports.WizardStepperComponent = WizardStepperComponent;
//# sourceMappingURL=wizard.stepper.component.js.map