   
    function showPlatformNotification() {
        const userAgent = navigator.userAgent;
    
        if (userAgent.indexOf('Windows') !== -1) {
            document.getElementById('windows-notification').style.display = 'flex';
        } else if (userAgent.indexOf('Mac') !== -1 && userAgent.indexOf('iPhone') === -1) {
            document.getElementById('mac-notification').style.display = 'flex';
        } else if (userAgent.indexOf('iPhone') !== -1) {
            document.getElementById('iphone-notification').style.display = 'flex';
        } else if (userAgent.indexOf('Android') !== -1) {
            document.getElementById('android-notification').style.display = 'flex';
        }
    }
    

    showPlatformNotification();

    setTimeout(function() {
        showCookieNotice();
      }, 1000);
      
      
        function hasAcceptedCookies() {
          return document.cookie.split(';').some((item) => item.trim().startsWith('cookieAccepted='));
        }
      
        function showCookieNotice() {
          if (!hasAcceptedCookies()) {
            document.getElementById('cookie-card').style.display = 'block';
          }
        }
      
        function acceptCookies() {
          document.getElementById('cookie-card').style.display = 'none'; 
      
          document.cookie = 'cookieAccepted=true; max-age=31536000'; 
        }
      
      
        document.getElementById('accept-cookies').addEventListener('click', acceptCookies);
      
      
        setTimeout(showCookieNotice, 1000);
      
        document.cookie = "username=JohnDoe; path=/; secure; HttpOnly";