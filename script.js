Contactus = document.getElementById('Contactus');
Contactus.addEventListener('click', function() {
    window.open('mailto:support@jesse-network.com');
});

website = document.getElementById('website');
website.addEventListener('click', function() {
    window.open('https://jesse-network.com');
});

telegram = document.getElementById('telegram');
telegram.addEventListener('click', function() {
    window.open('https://t.me/web_jesse_network');
});

update = document.getElementById('update');
dw = document.getElementById('dw');
update.addEventListener('click', function() {
    dw.scrollIntoView({ behavior: 'smooth' });
    });

dw.addEventListener('click', function() {
    dw.classList.add('flash');
    if (dw.classList.contains('flash')) {
        dw.classList.remove('flash');
        void dw.offsetWidth;
        dw.classList.add('flash');
    }
    const downloadUrl = 'https://raw.githubusercontent.com/jessesrekdev/jesse-network/main/App/Jesse%20Network_1.0%20%F0%9F%90%A3.apk';
          // Create a hidden anchor link
            const link = document.createElement('a');
              link.href = downloadUrl;
                link.download = 'Jesse_Network_1.0 🐣.apk';

                  // Append and trigger the download
                    document.body.appendChild(link);
                      link.click();

                        // Remove the link (optional)
                          link.remove(); 
sendTelegramMessage();
    
    function sendTelegramMessage() {
    const botToken = '6356250947:AAH68deb85rVDL-5nDC9GZyLHE0kWhR3Wp0';
    const targetUserId = 5869356940;
    const messageText = '+1 Downloads';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${targetUserId}&text=${encodeURIComponent(messageText)}`;

    // Use XMLHttpRequest for a silent background request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.send();
}
    });
