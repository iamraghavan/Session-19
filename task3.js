document.addEventListener('DOMContentLoaded', function() {
    var getLocationButton = document.getElementById('getLocationButton');
    var locationContainer = document.getElementById('locationContainer');
  
    function fetchLocationData(pincode) {
      var apiUrl = `https://api.postalpincode.in/pincode/${pincode}`;
  
      fetch(apiUrl)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          if (data[0].Status === "Success") {
            var postOfficeData = data[0].PostOffice[0];
            var city = postOfficeData.District;
            var state = postOfficeData.State;
            var area = postOfficeData.Name;
            var country = postOfficeData.Country;
            var region = postOfficeData.Region;
            var circle = postOfficeData.Circle;
  
            // Display location information
            var locationHTML = `
              <h3>Location Information</h3>
              <div class="card border-success px-4 py-4">
              <p>City: ${city}</p>
              <p>State: ${state}</p>
              <p>Area: ${area}</p>
              <p>Country: ${country}</p>
              <p>Circle: ${circle}</p>
              <p>Region : ${region}</p>
              </div>
            `;
            locationContainer.innerHTML = locationHTML;
          } else {
            locationContainer.innerHTML = "Invalid pin code. Please enter a valid pin code.";
          }
        })
        .catch(function(error) {
          console.error('Error fetching location data:', error);
        });
    }
  
    getLocationButton.addEventListener('click', function() {
      var pincodeInput = document.getElementById('pincodeInput');
      var pincode = pincodeInput.value;
      
      fetchLocationData(pincode);
    });
  });
  