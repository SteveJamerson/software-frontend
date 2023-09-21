import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from './button';
import { IconModule } from './icon';
import { LoadingModule } from './loading';
import { TextFieldModule } from './textfield';

const modules = [ButtonModule, IconModule, LoadingModule, TextFieldModule];

@NgModule({
    imports: [CommonModule, ...modules],
    exports: [...modules],
})
export class AtomsModule {}
