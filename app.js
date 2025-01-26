// 1. Real-Time Threat Detection (IT Security)
const threatList = document.getElementById("threats");
const alertBox = document.getElementById("alert-box");

const threats = [
    { type: "Brute Force", source: "IP: 192.168.1.101", timestamp: "12:05 PM" },
    { type: "SQL Injection", source: "IP: 192.168.1.105", timestamp: "12:10 PM" },
    { type: "DDoS Attack", source: "IP: 203.0.113.45", timestamp: "12:15 PM" },
    { type: "Malware Detected", source: "IP: 198.51.100.78", timestamp: "12:20 PM" }
];

function updateThreats() {
    threatList.innerHTML = "";
    threats.forEach(threat => {
        const listItem = document.createElement("li");
        listItem.textContent = `${threat.type} from ${threat.source} at ${threat.timestamp}`;
        threatList.appendChild(listItem);
    });
}

function triggerAlert(message) {
    alertBox.textContent = message;
    alertBox.style.display = "block";
}

setInterval(() => {
    updateThreats();
}, 5000);

setTimeout(() => {
    triggerAlert("Critical DDoS attack detected! Immediate action required.");
}, 10000);

// 2. Web 3.0 Decentralized Identity Management
document.getElementById("generate-qr").addEventListener("click", generateQRCode);

function generateQRCode() {
    const userId = `user:${Math.floor(Math.random() * 100000)}`;
    const qrData = `https://web3-identity.com/verify/${userId}`;

    QRCode.toCanvas(document.getElementById('qr-code'), qrData, function (error) {
        if (error) console.error(error);
        else {
            document.getElementById('status').textContent = "QR Code generated. Please scan it to verify your identity.";
        }
    });
}

// 3. Phishing Detection
document.getElementById('check-website').addEventListener('click', checkPhishing);

function checkPhishing() {
    let phishingDetected = false;
    const statusElement = document.getElementById('status-phishing');

    const suspiciousLinks = Array.from(document.querySelectorAll('a')).filter(link => {
        return link.href.includes('suspiciousdomain.com') || link.href.includes('redirect.com');
    });

    if (suspiciousLinks.length > 0) {
        phishingDetected = true;
        statusElement.textContent = "Warning! Phishing attempt detected.";
        statusElement.style.color = "red";
    } else {
        statusElement.textContent = "No phishing attempts detected.";
        statusElement.style.color = "green";
    }

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        const action = form.getAttribute('action');
        if (!action || action.includes('login')) {
            const inputFields = form.querySelectorAll('input');
            inputFields.forEach(input => {
                if (input.type === 'password' || input.name.includes('login')) {
                    phishingDetected = true;
                    statusElement.textContent = "Warning! Phishing login form detected.";
                    statusElement.style.color = "red";
                }
            });
        }
    });
}
