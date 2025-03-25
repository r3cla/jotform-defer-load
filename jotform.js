/**
 * r3cla's Deferred JotForm Loader v1.0
 * Delays loading the JotForm iframe until after the page loads to improve webpage performance.
 */


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
   // Defer form loading with a short delay
   // You can adjust the delay time (in milliseconds) based on your needs
   setTimeout(function() {
       // IMPORTANT: This ID must match your HTML container element ID
       const formContainer = document.getElementById('form-container');
       
       if (formContainer) {
           const formIframe = document.createElement('iframe');
           
           // ===== FORM CONFIGURATION START =====
           // REPLACE THIS SECTION with your specific form details
           
           // Set iframe attributes
           formIframe.id = 'YourFormIframeID';
           formIframe.title = 'Your Form Title';
           formIframe.allowTransparency = true;
           formIframe.allow = 'geolocation; microphone; camera; fullscreen';
           formIframe.src = 'https://form.jotform.com/your-form-id';
           
           // Set iframe styling - adjust these values as needed
           formIframe.style.width = '100%';
           formIframe.style.height = '500px'; 
           formIframe.style.border = 'none';
           formIframe.style.overflow = 'visible'; 
           
           // ===== FORM CONFIGURATION END =====
           
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

/**
* IMPORTANT: In your HTML, you need:
* 1. A container div with the ID matching the one in this script:
*    <div id="form-container">
*        <div class="form-loading">Loading form...</div>
*    </div>
* 
* 2. Add this script at the bottom of your HTML before the closing body tag:
*    <script defer src="path/to/this/script.js"></script>
*/
