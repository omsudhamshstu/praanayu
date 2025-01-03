document.addEventListener('DOMContentLoaded', function() {
    // Sample data for doctors and hospitals
    const doctors = [
        { id: 1, name: 'Dr. Pradeep reddy' },
        { id: 2, name: 'Dr. Vipin Goel' },
        { id: 3, name: 'Dr. Neelam V Ramana Reddy' },
        { id: 4, name: 'Dr. Jyothsna G' },
        { id: 5, name: 'Dr. Anurag Mishra' }
    ];

    const hospitals = [
        { id: 1, name: 'Hyderabad Multispeciality Hospital' },
        { id: 2, name: 'STAR Hospitals' },
        { id: 3, name: 'KIMS_STAR Hospital' },
        { id: 4, name: 'Apollo Hospitals' },
        { id: 5, name: 'Sunshine Hospitals' }
    ];

    // Populate doctor and hospital dropdowns
    const doctorSelect = document.getElementById('doctor');
    const hospitalSelect = document.getElementById('hospital');
    
    // Populate Doctor Dropdown
    doctors.forEach(doctor => {
        const option = document.createElement('option');
        option.value = doctor.id;
        option.textContent = doctor.name;
        doctorSelect.appendChild(option);
    });

    // Populate Hospital Dropdown
    hospitals.forEach(hospital => {
        const option = document.createElement('option');
        option.value = hospital.id;
        option.textContent = hospital.name;
        hospitalSelect.appendChild(option);
    });

    // Generate Token Number when Slot is Selected
    const slotSelect = document.getElementById('slot');
    const tokenNumberDisplay = document.getElementById('token-number');

    slotSelect.addEventListener('change', function() {
        if (this.value) {
            // Generate a random token number for each appointment
            const tokenNumber = Math.floor(Math.random() * 10000) + 1;
            tokenNumberDisplay.textContent = `Your Token Number: ${tokenNumber}`;
        } else {
            tokenNumberDisplay.textContent = '';
        }
    });
});
