import { Component } from '@angular/core';
import { ContentComponent } from './panel/content.component';


@Component({
    selector: 'my-app',
    template: 	`	<h1>This is a demo App</h1>
    				<gs-content>    				
	    				<span class="header"> Demo Header </span>
	    				<div class="body"> Demo content </div>	    				
    				</gs-content>	
    				<gs-content>    				
	    				<span class="header"> Demo Header1 </span>
	    				<div class="body"> Demo content </div>	    				
    				</gs-content>	
    			`,
    directives: [ContentComponent]


})
export class AppComponent { }
