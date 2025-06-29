/**
 * r3cla's Deferred JotForm Loader v1.0
 * Delays loading the JotForm iframe until after the page loads to improve webpage performance.
 */

document.addEventListener('DOMContentLoaded', function() {
   // Defer form loading with a short delay
   setTimeout(function() {
       // IMPORTANT: This ID must match your HTML container element ID
       const formContainer = document.getElementById('form-container');
       
       if (formContainer) {
           const formIframe = document.createElement('iframe');
           
           // Form Config --
           formIframe.id = 'YourFormIframeID';
           formIframe.title = 'Your Form Title';
           formIframe.allowTransparency = true;
           formIframe.allow = 'geolocation; microphone; camera; fullscreen';
           formIframe.src = 'https://form.jotform.com/your-form-id';
           
           formIframe.style.width = '100%';
           formIframe.style.height = '500px'; 
           formIframe.style.border = 'none';
           formIframe.style.overflow = 'visible'; 
          
          // Form Config End --
           
           
           // Clear any loading message in the container
           formContainer.innerHTML = '';
           
           // Add the iframe to the container
           formContainer.appendChild(formIframe);
           
           formIframe.addEventListener('load', function() {
               console.log('Form loaded successfully');
               
               // Optional: Auto-adjust iframe height to fit content (may not work with all form providers)
               /*
               try {
                   setTimeout(function() {
                       formIframe.style.height = (formIframe.contentWindow.document.body.scrollHeight + 20) + 'px';
                   }, 1000);
               } catch(e) {
                   console.log('Could not auto-adjust iframe height');
               }
               */
           });
       } else {
           console.warn('Form container element not found in the DOM');
       }
   }, 2000); // 2-second delay - adjust as needed
});
