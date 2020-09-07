import { Injectable } from '@angular/core';

function getWindow(): any {
  if (!window) {
    throw(Error('window object doesn\'t exist'));
  }

  return window;
}

@Injectable()
export class WindowRefService {
  get nativeWindow(): Window {
    return getWindow();
  }
}
