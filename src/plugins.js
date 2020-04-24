// Import Application class that is the main part of our PIXI project
import { Application } from '@pixi/app'
// In order that PIXI could render things we need to register appropriate plugins
import { Renderer } from '@pixi/core' // Renderer is the class that is going to register plugins
import { BatchRenderer } from '@pixi/core' 
// BatchRenderer is the "plugin" for drawing sprites
import { TickerPlugin } from '@pixi/ticker' 
// TickerPlugin is the plugin for running an update loop (it's for the application class)

// And just for convenience let's register Loader plugin in order to use it right from Application instance like app.loader.add(..) etc.
import { AppLoaderPlugin } from '@pixi/loaders'

export const registerPlugins = () => {
    Renderer.registerPlugin('batch', BatchRenderer)
    Application.registerPlugin(TickerPlugin)
    Application.registerPlugin(AppLoaderPlugin)
}
