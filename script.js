   
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
          } else if (userAgent.indexOf('CrOS') !== -1) {  
            document.getElementById('chromebook-notification').style.display = 'flex';
        } else if (userAgent.indexOf('Linux') !== -1 && userAgent.indexOf('Android') === -1) { 
            document.getElementById('linux-notification').style.display = 'flex';
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




function checkSpeed() {

  var testImageUrl = 'image2.jpg';
  var startTime, endTime;


  function speedTest() {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', testImageUrl, true);
      xhr.responseType = 'blob';
      
      xhr.onloadstart = function () {
          startTime = new Date().getTime();
      };

      xhr.onload = function () {
          endTime = new Date().getTime();
          var duration = (endTime - startTime) / 1000; // seconds
          var fileSize = xhr.response.size / 1024 / 1024; // MB
          var speedMbps = (fileSize * 8) / duration; // Mbps

        
          if (speedMbps < 5) {
              window.location.href = 'https://pbackuppass.github.io/Slow-Wifi';
          }
      };

      xhr.onerror = function () {
          window.location.href = 'https://backuppass.github.io/Site-Crashed';
      };

      xhr.send();
  }


  speedTest();
}


window.onload = function() {
  checkSpeed();
};
