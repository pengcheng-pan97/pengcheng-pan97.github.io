function updateCountdown(id, targetDateString) {
  const target = new Date(targetDateString).getTime();
  const now = new Date().getTime();
  const diff = target - now;
  const el = document.getElementById(id);

  if (!el) return;

  if (diff <= 0) {
    el.textContent = "Closed / passed";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  el.textContent = `${days} days ${hours} hours ${minutes} min left`;
}

function refreshCountdowns() {
  updateCountdown("neurips-countdown", "2026-05-15T13:00:00+09:00");
  updateCountdown("eccv-countdown", "2026-03-30T23:59:00+09:00");
  updateCountdown("next-countdown", "2026-09-01T00:00:00+09:00");
}

refreshCountdowns();
setInterval(refreshCountdowns, 60000);
