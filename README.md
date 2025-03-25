# How to use

*Instructions intended for someone with a solid understanding of basic web programming concepts.*

## 1. Get Your JotForm Details

First, you need these details from your existing JotForm implementation:

- **Form ID**: Look at your current JotForm embed code - it's typically in the iframe src URL as `form.jotform.com/XXXXXXXXXX`
- **iframe ID**: Usually something like `JotFormIFrame-XXXXXXXXXX`
- **Form height**: Check your current iframe height value (or set to around 500-600px)

## 2. Create the HTML Container

Replace your current JotForm iframe with this container:

```html
<div id="form-container">
    <div class="form-loading">Loading form...</div>
</div>
```

## 3. Add the Defer Loading Script

Create or add the following code to your script file:

```javascript
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const formContainer = document.getElementById('form-container');
        if (formContainer) {
            const formIframe = document.createElement('iframe');
            
            // Your JotForm details go here
            formIframe.id = 'JotFormIFrame-XXXXXXXXXX'; // Replace with your iframe ID
            formIframe.title = 'Your Form Title';
            formIframe.allowTransparency = true;
            formIframe.allow = 'geolocation; microphone; camera; fullscreen';
            formIframe.src = 'https://form.jotform.com/XXXXXXXXXX'; // Replace with your form ID
            
            formIframe.style.width = '100%';
            formIframe.style.height = '539px'; // Adjust as needed
            formIframe.style.border = 'none';
            formIframe.style.overflow = 'visible'; // Prevents double scrollbars
            
            formContainer.innerHTML = '';
            formContainer.appendChild(formIframe);
        }
    }, 2000); // 2-second delay
});
```

## 4. Add Some CSS (optional, sort of)

```css
.form-container {
    overflow: hidden !important; /* Prevents double scrollbars */
}

.form-loading {
    text-align: center;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 4px;
    font-size: 16px;
}
```

## 5. Link the Script

Add this before your closing `</body>` tag:

```html
<script defer src="path/to/form-defer.js"></script>
```

Thats it. This should slightly improve initial page load performance.
