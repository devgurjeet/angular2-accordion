import { Component } from '@angular/core';

@Component({
    selector: 'gs-content',
    template: `<div class="panel panel-default">
						<div class="panel-heading" (click)="toggle()">
							<ng-content select="span.header"></ng-content>
							<i class="glyphicon pull-right"
								[ngClass]="{'glyphicon-chevron-down': !close,
											'glyphicon-chevron-up': close
											}"
							></i>
						</div>
						<div class="panel-body" *ngIf="close">
							<ng-content select="div.body"></ng-content>
						</div>
					</div>`,
	styles: [`.panel-heading{cursor:pointer}`]				
})
export class ContentComponent { 
	close = false;	
	toggle(){
		this.close = !this.close;
		console.log("I am clicked.");
	}

}
