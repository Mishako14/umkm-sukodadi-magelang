  "use client";

  import { useEffect, useState } from "react";
  import { ArrowLeft, Globe, Save } from "lucide-react";
  import Link from "next/link";

  import {
    WebsiteSettings,
    getWebsiteSettings,
    saveWebsiteSettings,
  } from "@/lib/websiteSettings";

  export default function SettingsPage() {
    const [settings, setSettings] = useState<WebsiteSettings>({
      siteName: "",
      tagline: "",
      heroTitle: "",
      heroSubtitle: "",
      footer: "",
    });
    useEffect(() => {
      async function loadSettings() {
        const data = await getWebsiteSettings();
        setSettings(data);
      }
    
      loadSettings();
    }, []);
    return (
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="mx-auto max-w-5xl">

          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Pengaturan Website
              </h1>
              <p className="mt-1 text-gray-500">
                Kelola identitas dan informasi website UMKM Desa Sukodadi.
              </p>
            </div>

            <Link
              href="/admin/dashboard"
              className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 shadow hover:bg-gray-50"
            >
              <ArrowLeft size={18} />
              Dashboard
            </Link>
          </div>

          {/* Card */}
          <div className="rounded-2xl bg-white p-8 shadow">

            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-xl bg-green-100 p-3 text-green-700">
                <Globe />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  Informasi Website
                </h2>
                <p className="text-sm text-gray-500">
                  Informasi dasar yang ditampilkan pada website.
                </p>
              </div>
            </div>

            <div className="grid gap-6">

              <div>
                <label className="mb-2 block font-medium">
                  Nama Website
                </label>
                <input
    value={settings.siteName}
    onChange={(e) =>
      setSettings({
        ...settings,
        siteName: e.target.value,
      })
    }
    className="w-full rounded-lg border p-3"
  />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Tagline
                </label>
                <input
  value={settings.tagline}
  onChange={(e) =>
    setSettings({
      ...settings,
      tagline: e.target.value,
    })
  }
  className="w-full rounded-lg border p-3"
/>
              </div>

              <div>
  <label className="mb-2 block font-medium">
    Hero Title
  </label>

  <input
    value={settings.heroTitle}
    onChange={(e) =>
      setSettings({
        ...settings,
        heroTitle: e.target.value,
      })
    }
    className="w-full rounded-lg border p-3"
  />
</div>

<div>
  <label className="mb-2 block font-medium">
    Hero Subtitle
  </label>

  <textarea
    rows={4}
    value={settings.heroSubtitle}
    onChange={(e) =>
      setSettings({
        ...settings,
        heroSubtitle: e.target.value,
      })
    }
    className="w-full rounded-lg border p-3"
  />
</div>

              <div>
                <label className="mb-2 block font-medium">
                  Footer
                </label>

                <input
  value={settings.footer}
  onChange={(e) =>
    setSettings({
      ...settings,
      footer: e.target.value,
    })
  }
  className="w-full rounded-lg border p-3"
/>
              </div>

            </div>

            <div className="mt-8 flex justify-end">
            <button
    onClick={async () => {
      await saveWebsiteSettings(settings);
      alert("Berhasil disimpan!");
    }}
    className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700"
  >
    <Save size={18} />
    Simpan Perubahan
  </button>

            </div>

          </div>

        </div>
      </main>
    );
  }