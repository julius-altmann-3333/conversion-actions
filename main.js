        function showIframe() {
            const select = document.getElementById("landingPageSelect");
            const selectedValue = select.value;
            const selectedText = select.options[select.selectedIndex].text;
            const iframeContainer = document.getElementById("iframeContainer");
            const iframeDisplay = document.getElementById("iframeDisplay");

            if (selectedValue) {
                document.getElementById("selectedOption").textContent = selectedText;
                iframeDisplay.src = selectedValue; // Set iframe src to the selected HTML file
                iframeContainer.style.display = "block";
            } else {
                iframeContainer.style.display = "none";
            }
        }
