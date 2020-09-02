import { Injectable } from '@angular/core';
import * as PIXI from 'pixi.js';

@Injectable()
export class SlotsService {
  // The application will create a renderer using WebGL, if possible,
  // with a fallback to a canvas render. It will also setup the ticker
  // and the root stage PIXI.Container
  private readonly app = new PIXI.Application();

  constructor() { }

  load(): HTMLCanvasElement {
    // load the texture we need
    this.app.loader.add('bunny', 'https://pixijs.io/examples/examples/assets/bunny.png').load((loader, resources) => {
      // This creates a texture from a 'bunny.png' image
      const bunny = new PIXI.Sprite(resources.bunny.texture);

      // Setup the position of the bunny
      bunny.x = this.app.renderer.width / 2;
      bunny.y = this.app.renderer.height / 2;

      // Rotate around the center
      bunny.anchor.x = 0.5;
      bunny.anchor.y = 0.5;

      // Add the bunny to the scene we are building
      this.app.stage.addChild(bunny);

      // Listen for frame updates
      this.app.ticker.add(() => {
          // each frame we spin the bunny around a bit
          bunny.rotation += 0.01;
      });
    });

    return this.app.view;
  }
}
