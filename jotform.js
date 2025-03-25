/**
 * r3cla's Deferred JotForm Loader v1.0
 * Delays loading the JotForm iframe until after the page loads to improve initial page performance.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

    setTimeout(function() {
        const formContainer = document.getElementById('quote-form-container');
        if (formContainer) {
            const formIframe = document.createElement('iframe');
            
            // Attributes
            formIframe.id = 'JotFormIFrame-';
            formIframe.title = '';
            formIframe.allowTransparency = true;
            formIframe.allow = 'geolocation; microphone; camera; fullscreen';
            formIframe.src = '';
            
            // iframe styling
            formIframe.style.width = '100%';
            formIframe.style.height = '539px';
            formIframe.style.border = 'none';
            formIframe.style.overflow = 'visible';
            
            // Clear the container and add the iframe
            formContainer.innerHTML = '';
            formContainer.appendChild(formIframe);
            
            // Add event listener for iframe load completion
            formIframe.addEventListener('load', function() {
                console.log('JotForm loaded successfully');
            });
        } else {
            console.warn('Form container not found in the DOM');
        }
    }, 2000); // Adjustable delay in ms
});
