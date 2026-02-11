import { useEffect, useState } from "react";

function AutoSaveForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [debouncedData, setDebouncedData] = useState(formData);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  // 1️⃣ Debounce form changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedData(formData);
    }, 800); // auto-save delay

    return () => clearTimeout(timer);
  }, [formData]);

  // 2️⃣ Auto-save when debounced data changes
  useEffect(() => {
    if (!debouncedData.name && !debouncedData.email) return;

    async function saveData() {
      setSaving(true);
      setSaved(false);

      try {
        // fake API call
        await new Promise((res) => setTimeout(res, 1000));
        console.log("Saved:", debouncedData);
        setSaved(true);
      } catch (err) {
        console.error("Save failed");
      } finally {
        setSaving(false);
      }
    }

    saveData();
  }, [debouncedData]);

  return (
    <div>
      <h2>Auto-Save Form</h2>

      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({ ...formData, name: e.target.value })
        }
      />

      <br />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <p>
        {saving && "Saving..."}
        {!saving && saved && "✅ Saved"}
      </p>
    </div>
  );
}

export default AutoSaveForm;
