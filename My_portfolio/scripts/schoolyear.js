document.addEventListener('DOMContentLoaded', function () {
    const startDate = new Date('September 2, 2024');
    const endDate = new Date("June 30, 2025");

    const updateProgressBar = () => {
        const now = new Date();
        console.log(now);
        const totalDuration = endDate - startDate;
        const timeElapsed = now - startDate;
        const progressPercentage = Math.min((timeElapsed / totalDuration) * 100, 100);

        document.getElementById('progressIndicator').style.width = `${progressPercentage}%`;
        console.log(progressPercentage);
    };

    updateProgressBar();
    setInterval(updateProgressBar, 86400000); 
});