/* =========================================================
   Group 5 — shared page behaviour
   - highlights the current page in the navigation
   - live search / type filter for tables (IOC matrix, ATT&CK table)
   - phase filter for the incident timeline
   - copy-to-clipboard for indicator values
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Active navigation link
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav a").forEach((a) => {
    if (a.dataset.page === page) a.classList.add("active");
  });

  // 2. Table search + optional type filter
  document.querySelectorAll("[data-table-filter]").forEach((toolbar) => {
    const table = document.getElementById(toolbar.dataset.tableFilter);
    if (!table) return;
    const search = toolbar.querySelector("input[type=search]");
    const select = toolbar.querySelector("select");
    const counter = toolbar.querySelector(".count");
    const rows = Array.from(table.querySelectorAll("tbody tr"));

    const apply = () => {
      const q = (search ? search.value : "").trim().toLowerCase();
      const type = select ? select.value : "";
      let shown = 0;
      rows.forEach((row) => {
        const textOk = !q || row.textContent.toLowerCase().includes(q);
        const typeOk = !type || row.dataset.type === type;
        const visible = textOk && typeOk;
        row.style.display = visible ? "" : "none";
        if (visible) shown++;
      });
      if (counter) counter.textContent = `${shown} of ${rows.length} shown`;
    };

    if (search) search.addEventListener("input", apply);
    if (select) select.addEventListener("change", apply);
    apply();
  });

  // 3. Timeline phase filter
  const tlButtons = document.querySelectorAll("[data-tl-filter]");
  tlButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tlButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const kind = btn.dataset.tlFilter;
      document.querySelectorAll(".tl-item").forEach((item) => {
        item.classList.toggle("hidden", kind !== "all" && !item.classList.contains(kind));
      });
    });
  });

  // 4. Copy indicator values
  document.querySelectorAll(".btn-copy").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.dataset.copy;
      try {
        await navigator.clipboard.writeText(value);
        btn.textContent = "copied";
      } catch (e) {
        btn.textContent = "select & copy";
      }
      setTimeout(() => (btn.textContent = "copy"), 1400);
    });
  });
});
