import { participantTemplate, successTemplate } from './Templates.js';

document.addEventListener("DOMContentLoaded", () => {

    let participantCount = 1;
    const addButton = document.getElementById("add");
    const participantsFieldset = document.querySelector(".participants");
    const form = document.querySelector("form");
    const summary = document.getElementById("summary");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const totalFee = addFees();
        const adultName = document.getElementById("adult_name").value;
        form.style.display = "none";
        summary.innerHTML = successTemplate({ name: adultName, participants: participantCount, fee: totalFee });
    });

    addButton.addEventListener("click", () => {
        participantCount++;
        const newParticipantHTML = participantTemplate(participantCount);
        addButton.insertAdjacentHTML("beforebegin", newParticipantHTML);
        addColumn(participantCount);
    });
    function addFees() {
        let feeElements = document.querySelectorAll("[id^=fee]");
        feeElements = [...feeElements];
        return feeElements.reduce((sum, input) => sum + (parseFloat(input.value) || 0), 0);
    }
    function addColumn(count) {
        if (count === 2) {
            participantsFieldset.style.display = "grid";
            participantsFieldset.style.gridTemplateColumns = "1fr 1fr";
            participantsFieldset.style.gap = "20px";
            addButton.style.gridColumn = "span 2";
        }
    }
});
