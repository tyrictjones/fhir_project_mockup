
    function showPDF() {
      document.getElementById('pdfModal').style.display = 'block';
    }

    function closePDF() {
      document.getElementById('pdfModal').style.display = 'none';
    }

    window.onclick = function(event) {
      const modal = document.getElementById('pdfModal');
      if (event.target === modal) {
        modal.style.display = "none";
      }
    }
    
    function showFHIR(patientName) {
    document.getElementById("fhirPatientName").textContent = patientName;
    document.getElementById("fhirModal").style.display = "block";
 		}

  function closeFHIR() {
    document.getElementById("fhirModal").style.display = "none";
  	}

  window.onclick = function(event) {
    const modal = document.getElementById("fhirModal");
    if (event.target === modal) {
      modal.style.display = "none";
   	}
  }
