const CATCH_STORAGE_KEY = "bayanisla-catch-records-v1";
const SAFETY_STORAGE_KEY = "bayanisla-safety-checklist-v1";

const catchForm = document.querySelector("#catch-form");
const catchTableBody = document.querySelector("#catch-table-body");
const emptyState = document.querySelector("#empty-state");
const safetyItems = Array.from(document.querySelectorAll(".safety-checkbox"));
const toast = document.querySelector("#toast");
let toastTimeout;
let catchRecords = [];

function showToast(message) {
  window.clearTimeout(toastTimeout);
  toast.textContent = message;
  toast.classList.add("toast-visible");
  toastTimeout = window.setTimeout(() => toast.classList.remove("toast-visible"), 3500);
}

function readStoredArray(key, isValid) {
  const stored = window.localStorage.getItem(key);
  if (stored === null) return [];

  const value = JSON.parse(stored);
  if (!Array.isArray(value) || !value.every(isValid)) {
    throw new Error(`Saved data for ${key} is not in the expected format.`);
  }
  return value;
}

function isCatchRecord(value) {
  return (
    value !== null &&
    typeof value === "object" &&
    typeof value.species === "string" &&
    typeof value.weight === "number" &&
    Number.isFinite(value.weight) &&
    value.weight > 0 &&
    typeof value.date === "string" &&
    /^\d{4}-\d{2}-\d{2}$/.test(value.date)
  );
}

function getLocalDateString(date = new Date()) {
  const offset = date.getTimezoneOffset();
  return new Date(date.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

const catchDateInput = document.querySelector("#catch-date");
catchDateInput.value = getLocalDateString();
catchDateInput.max = getLocalDateString();

function renderCatchRecord(record) {
  const row = document.createElement("tr");
  const speciesCell = document.createElement("td");
  speciesCell.textContent = record.species;
  const dateCell = document.createElement("td");
  const date = new Date(`${record.date}T00:00:00`);
  dateCell.textContent = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
  const weightCell = document.createElement("td");
  weightCell.className = "numeric";
  weightCell.textContent = `${record.weight.toFixed(1)} kg`;
  row.append(speciesCell, dateCell, weightCell);
  return row;
}

function renderCatchRecords() {
  catchTableBody.replaceChildren(...catchRecords.map(renderCatchRecord));
  emptyState.hidden = catchRecords.length > 0;
  document.querySelector("#record-count").textContent =
    `${catchRecords.length} ${catchRecords.length === 1 ? "record" : "records"}`;
  const totalWeight = catchRecords.reduce((sum, record) => sum + record.weight, 0);
  document.querySelector("#catch-total").textContent =
    `${totalWeight.toLocaleString(undefined, { maximumFractionDigits: 1 })} kg`;
}

function loadCatchRecords() {
  try {
    catchRecords = readStoredArray(CATCH_STORAGE_KEY, isCatchRecord);
    renderCatchRecords();
  } catch (error) {
    console.error("Unable to load BayanIsla catch records.", error);
    showToast("Saved catch records could not be loaded. You can still add a new record.");
  }
}

function updateChecklistProgress() {
  const completed = safetyItems.filter((item) => item.checked).length;
  const total = safetyItems.length;
  const percentage = total === 0 ? 0 : (completed / total) * 100;

  document.querySelector("#progress-count").textContent = `${completed} of ${total} ready`;
  document.querySelector("#progress-fill").style.width = `${percentage}%`;
  const progress = document.querySelector("#progress-track");
  progress.setAttribute("aria-valuenow", String(completed));
  progress.setAttribute("aria-valuetext", `${completed} of ${total} items checked`);
  document.querySelector("#progress-message").textContent =
    completed === total
      ? "All checked. Keep following official local advisories."
      : completed === 0
        ? "Take a moment to check each item."
        : `${total - completed} ${total - completed === 1 ? "item" : "items"} left to check.`;

  try {
    window.localStorage.setItem(
      SAFETY_STORAGE_KEY,
      JSON.stringify(safetyItems.map((item) => item.checked)),
    );
  } catch (error) {
    console.error("Unable to save the BayanIsla safety checklist.", error);
    showToast("Checklist updated, but couldn't be saved in this browser.");
  }
}

function loadSafetyChecklist() {
  try {
    const savedItems = readStoredArray(SAFETY_STORAGE_KEY, (value) => typeof value === "boolean");
    if (savedItems.length !== 0 && savedItems.length !== safetyItems.length) {
      throw new Error("Saved checklist has a different number of items.");
    }
    safetyItems.forEach((item, index) => {
      item.checked = savedItems[index] === true;
    });
  } catch (error) {
    console.error("Unable to load the BayanIsla safety checklist.", error);
    showToast("The saved checklist couldn't be loaded. It has been reset.");
  }
  updateChecklistProgress();
}

safetyItems.forEach((item) => item.addEventListener("change", updateChecklistProgress));

document.querySelector("#reset-checklist").addEventListener("click", () => {
  safetyItems.forEach((item) => {
    item.checked = false;
  });
  updateChecklistProgress();
  showToast("Safety checklist reset.");
});

catchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!catchForm.reportValidity()) return;

  const values = new FormData(catchForm);
  const weight = Number(values.get("weight"));
  const species = String(values.get("species") || "").trim();
  const date = String(values.get("date") || "");
  if (!species || !Number.isFinite(weight) || weight <= 0 || !date) {
    showToast("Enter a species, a positive catch weight, and the date caught.");
    return;
  }
  if (date > getLocalDateString()) {
    catchDateInput.setCustomValidity("Choose today or an earlier catch date.");
    catchDateInput.reportValidity();
    catchDateInput.setCustomValidity("");
    return;
  }

  const record = { species, weight, date };
  catchRecords.unshift(record);
  renderCatchRecords();
  catchForm.reset();
  catchDateInput.value = getLocalDateString();

  try {
    window.localStorage.setItem(CATCH_STORAGE_KEY, JSON.stringify(catchRecords));
    showToast("Catch recorded on this device.");
  } catch (error) {
    console.error("Unable to save the BayanIsla catch records.", error);
    showToast("Catch added for this visit, but couldn't be saved in this browser.");
  }
});

loadCatchRecords();
loadSafetyChecklist();
