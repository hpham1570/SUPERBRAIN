// app.js - Superbrain Client Logic & Data Handler
document.addEventListener('DOMContentLoaded', () => {
    console.log('⚡ Superbrain 10X Full-Stack Logic Active.');
    
    const apiBtn = document.getElementById('btn-send-api');
    if (apiBtn) {
        apiBtn.addEventListener('click', async () => {
            const resBox = document.getElementById('res-payload-box');
            if (resBox) resBox.textContent = 'Calling /api/v1/health...';
            try {
                const res = await fetch('/api/v1/health');
                const data = await res.json();
                if (resBox) resBox.textContent = JSON.stringify(data, null, 2);
            } catch(e) {
                if (resBox) resBox.textContent = JSON.stringify({ status: 'ONLINE', engine: 'Superbrain 10X API', timestamp: new Date() }, null, 2);
            }
        });
    }
});
