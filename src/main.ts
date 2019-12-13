import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import cssVars from 'css-vars-ponyfill';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));


  cssVars({
    // Only styles from CodePen's CSS panel
    // include: 'style:not([data-ignore])',
    include: 'style',
    // Treat all browsers as legacy
    onlyLegacy: false,
    watch: true,
    // DEMO: Toggles to see results
    // ----------------------------
    // preserveStatic: false,
    // preserveVars: true,
    // updateURLs: false,
    // variables: { '--color': 'purple' },
    // ----------------------------
    
    // Display transformed CSS
    onComplete: function(cssText, styleNodes, cssVariables) {
      console.log(cssText);
      var codeElm = document.querySelector('code');
      
      // Format CSS (external library)
      // cssText = css_beautify(cssText);
      
      // Update <code> tag with CSS result
      codeElm.textContent = cssText;
    }
  });
  