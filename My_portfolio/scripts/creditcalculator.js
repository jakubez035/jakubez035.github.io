const totalCreditsText = document.getElementById("total-credits").innerText; // Get the inner text of the span
        const totalCredits = parseFloat(totalCreditsText); // Convert the text to a number
        const totalCreditsProgressBar = Math.min((totalCredits / 60) * 100, 100); // Calculate the progress percentage

        document.getElementById('total-credits-progress-bar').style.width = `${totalCreditsProgressBar}%`; // Update the progress bar width