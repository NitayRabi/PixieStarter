

// Sprite is our image on the stage
import { registerPlugins } from './plugins';
import { createApp } from './app';


const bootstrap = () => {
    
    registerPlugins();
    const app = createApp();
    document.body.appendChild(app.view) // Create Canvas tag in the body
    
}
bootstrap();
