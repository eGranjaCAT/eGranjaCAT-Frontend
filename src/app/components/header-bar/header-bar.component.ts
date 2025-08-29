import { Component } from '@angular/core';
import { HlmMenu, HlmMenuGroup, HlmMenuItem, HlmMenuItemSubIndicator, HlmMenuLabel, HlmMenuSeparator, HlmMenuShortcut, HlmSubMenu } from '@spartan-ng/helm/menu';
import { BrnMenuTrigger } from '@spartan-ng/brain/menu';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSeparator } from '@spartan-ng/helm/separator';
import { BrnSeparator } from '@spartan-ng/brain/separator';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  standalone: true,
  imports: [
    HlmMenu,
    HlmMenuGroup,
    HlmMenuItem,
    BrnMenuTrigger,
    HlmMenuItem,
    HlmMenuLabel,
    HlmMenuSeparator,
    HlmMenuGroup,
    HlmButton,
    HlmSeparator,

  ],

})
export class HeaderBarComponent {

}
