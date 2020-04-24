import { Application } from "@pixi/app"
import { Sprite } from "@pixi/sprite"

export const createApp = () => {
    // Manage Pixis.js app
    const app = new Application({
        // App with width and height of the page
        width: window.innerWidth,
        height: window.innerHeight,
        resolution: window.devicePixelRatio // For good rendering on mobiles
    })

    // Load the logo
    app.loader.add('logo', './assets/logo.png')
    app.loader.load(() => {
        const sprite = Sprite.from('logo')
        sprite.anchor.set(0.5) // We want to rotate our sprite relative to the center, so 0.5
        app.stage.addChild(sprite)

        // Position the sprite at the center of the stage
        sprite.x = app.screen.width * 0.5
        sprite.y = app.screen.height * 0.5

        // Put the rotating function into the update loop
        app.ticker.add(delta => {
            sprite.rotation += 0.02 * delta
        })
    })

    return app;
}
