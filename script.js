   
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
        } else {
          document.getElementById('unknown-notification').style.display = 'flex';
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


        let currentIndex = 0;
const images = [

    'image2.jpg',

];
const slideshow = document.getElementById('background-slideshow');

function changeBackground(index) {
    slideshow.style.backgroundImage = `url(${images[index]})`;
    currentIndex = index;
}

changeBackground(0);




document.addEventListener('DOMContentLoaded', function() {
  const helpButton = document.getElementById('helpButton');
  const helpBox = document.getElementById('helpBox');
  const closeButton = document.getElementById('closeButton');

  helpButton.addEventListener('click', function() {
      if (helpBox.style.display === 'block') {
          helpBox.style.display = 'none';
      } else {
          helpBox.style.display = 'block';
      }
  });

  closeButton.addEventListener('click', function() {
      helpBox.style.display = 'none';
  });
});
