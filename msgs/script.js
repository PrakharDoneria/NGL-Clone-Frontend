async function fetchMessages() {
    try {
      const response = await fetch('https://ngl-clone-backend-ochre.vercel.app/messages');
      const data = await response.json();
  
      if (data.success) {
        displayMessages(data.messages);
      } else {
        console.error("Error fetching messages");
      }
    } catch (error) {
      console.error("Error fetching messages", error);
    }
  }
  
  function displayMessages(messages) {
    const messagesList = document.getElementById('messages-list');
    messagesList.innerHTML = '';
  
    messages.sort((a, b) => b.id - a.id);
  
    messages.forEach((message) => {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message');
  
      messageElement.innerHTML = `
        <ul>
          <li><strong>Message:</strong> ${message.message}</li>
          <li><strong>IP:</strong> ${message.ip}</li>
          <li><strong>Device:</strong> ${message.device_type}</li>
          <li><strong>OS:</strong> ${message.os}</li>
          <li><strong>Browser:</strong> ${message.browser}</li>
          <li><strong>Screen Size:</strong> ${message.screen_size}</li>
          <li><strong>City:</strong> ${message.city}</li>
          <li><strong>Region:</strong> ${message.region}</li>
          <li><strong>ISP:</strong> ${message.isp_name}</li>
          <li><strong>Connection:</strong> ${message.connection_type}</li>
        </ul>
        <div class="actions">
          <button class="download-btn" onclick="downloadMessageAsImage(this)">Download Image</button>
          <button class="share-btn" onclick="shareOnInstagram(this)">Share on Instagram</button>
        </div>
      `;
      messagesList.appendChild(messageElement);
    });
  }
  
  function downloadMessageAsImage(button) {
    const messageElement = button.closest('.message');
    
    if (typeof html2canvas === 'undefined') {
      console.error('html2canvas is not loaded.');
      return;
    }
  
    html2canvas(messageElement, {
      allowTaint: true,
      useCORS: true,
      logging: true,
      scale: 2
    }).then((canvas) => {
      const imageUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = 'message.png';
      link.click();
    }).catch((error) => {
      console.error('Error capturing the message as an image:', error);
    });
  }
  
  function shareOnInstagram(button) {
    const messageElement = button.closest('.message');
    const messageText = messageElement.querySelector('ul li:first-child').textContent;
  
    const instagramShareURL = `https://www.instagram.com/create/story/?text=${encodeURIComponent(messageText)}`;
    
    window.open(instagramShareURL, '_blank');
  }
  
  window.onload = fetchMessages;
  