document.addEventListener('DOMContentLoaded', function () {
    const startDate = new Date('September 2, 2024');
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 36 * 7); 

    const updateProgressBar = () => {
        const now = new Date();
        const totalDuration = endDate - startDate;
        const timeElapsed = now - startDate;
        const progressPercentage = Math.min((timeElapsed / totalDuration) * 100, 100);

        document.getElementById('progressIndicator').style.width = `${progressPercentage}%`;
    };

    updateProgressBar();
    setInterval(updateProgressBar, 86400000); 
});