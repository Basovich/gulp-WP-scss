// assets
import './assets/polyffils/polyfills-closest';
import './assets/polyffils/polyfills-customevent';
import './assets/libs/animation_stopper.min.js';
import 'core-js/stable/dom-collections/for-each';

// main function
import {test} from './components/function';


// Init Functions
window.addEventListener('load', onLoadMain);

function onLoadMain() {
    initAnimationStopper();
    console.log(test());
}