const toastContainer = document.getElementById("toast-container");

function showNotification(type) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  // Icons for notifications using Font Awesome
  const iconMap = {
    success: '<i class="fa-solid fa-check"></i>',
    info: '<i class="fa-solid fa-circle-info"></i>',
    warning: '<i class="fa-solid fa-triangle-exclamation"></i>',
    error: '<i class="fa-solid fa-circle-xmark"></i>',
  };

  // Content of the toast
  toast.innerHTML = `
    <span class="icon">${iconMap[type]}</span>
    <span>${type.charAt(0).toUpperCase() + type.slice(1)} toast notification</span>
    <button class="close-btn" onclick="dismissToast(this)">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  // Append to container
  toastContainer.appendChild(toast);

  // Auto-dismiss after 4 seconds
  setTimeout(() => {
    if (toastContainer.contains(toast)) {
      toast.remove();
    }
  }, 4000);
}

// Dismiss toast manually
function dismissToast(button) {
  const toast = button.parentElement;
  toast.remove();
}
