import { Attribute, Directive, Input, ElementRef, Renderer, Renderer2 } from '@angular/core';
import { difference, pickBy } from 'lodash'

const elemSep = '__'
const modSep = '--'

function classNameFor(blockName: string, elemName?: string, modName?: string) {
  const parts = [blockName]
  if(elemName) {
    parts.push(elemSep, elemName)
  }

  if(modName) {
    parts.push(modSep, modName)
  }

  return parts.join('')
}

function modsFor(value) {
  const mods = typeof(value) === 'string' ? value.split(' ') : value
  if(Array.isArray(mods)) {
    return mods
  } else {
    return Object.keys(pickBy(mods))
  }
}

@Directive({
  selector: '[block]',
})
export class BlockDirective {

  @Input() mod: any

  private lastMods: string[] = []

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    @Attribute('block') public name: string,
  ) {
    this.renderer.addClass(this.element.nativeElement, classNameFor(this.name))
  }

  ngOnChanges() {
    const newMods = modsFor(this.mod)
    const remMods = difference(this.lastMods, newMods)
    remMods.forEach(mod => this.renderer.removeClass(this.element.nativeElement, classNameFor(this.name, null, mod)))
    newMods.forEach(mod => this.renderer.addClass(this.element.nativeElement, classNameFor(this.name, null, mod)))
    this.lastMods = newMods
  }
}

@Directive({
  selector: '[elem]',
})
export class ElemDirective {

  @Input() mod: string

  private lastMods: string[] = []

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    @Attribute('elem') public name: string,
    private block: BlockDirective,
  ) {
    this.renderer.addClass(this.element.nativeElement, classNameFor(this.block.name, this.name))
  }

  ngOnChanges() {
    const newMods = modsFor(this.mod)
    const remMods = difference(this.lastMods, newMods)
    remMods.forEach(mod => this.renderer.removeClass(this.element.nativeElement, classNameFor(this.block.name, this.name, mod)))
    newMods.forEach(mod => this.renderer.addClass(this.element.nativeElement, classNameFor(this.block.name, this.name, mod)))
    this.lastMods = newMods
  }
}

