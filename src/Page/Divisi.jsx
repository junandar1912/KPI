// src/pages/Divisi.jsx
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import HeaderMenu from '../Components/Menu/HeaderMenu';
import NavMenu from '../Components/Menu/NavMenu';
import TombolMenu from '../Components/Menu/TombolMenu';
import DaftarDivisi from '../Components/KolomTable-data/DaftarDIvisi';
import Divisi from '../Components/FormPenambahan/Divisi.jsx';


const API_BASE = import.meta.env?.VITE_API_BASE_URL ?? 'http://localhost:3000';
const ENDPOINT = `${API_BASE}/api/divisions`;

const DasbordDivisi = () => {
  // Sidebar
  const [isiSidebarTerlihat, setSidebarTidakterlihat] = useState(false);
  const [MarginSidebar, setMarginSidebar] = useState(false);

  // Judul fix
  const activeJudul = 'Daftar Divisi';

  // Form tambah divisi
  const [hiddenForm, setHiddenForm] = useState(true);
  const [formData, setFormData] = useState({ name: '', description: '', weight: '' });

  // Data divisi
  const [divisions, setDivisions] = useState([]);

  // Status loading & error
  const [loading, setLoading] = useState(false);
  const [networkErr, setNetworkErr] = useState('');
  const [apiErrors, setApiErrors] = useState(null);

  // Header Authorization
  const authHeaders = useMemo(
    () => ({
      Authorization: `Bearer ${localStorage.getItem('token') ?? ''}`,
      'Content-Type': 'application/json',
    }),
    []
  );

  // Toggle sidebar
  const TombolSidebar = useCallback(() => {
    setSidebarTidakterlihat((s) => !s);
    setMarginSidebar((s) => !s);
  }, []);

  // Toggle form
  const SpanForm = useCallback(() => {
    setHiddenForm((s) => !s);
  }, []);

  // Ambil semua divisi dari API
  const fetchDivisions = useCallback(async () => {
    setLoading(true);
    setNetworkErr('');
    setApiErrors(null);

    try {
      const res = await fetch(ENDPOINT, { headers: authHeaders });
      const json = await res.json();

      if (json?.status === 'success') {
        setDivisions(json.data.divisions ?? []);
      } else {
        setApiErrors(json?.errors ?? { unknown: ['Unexpected API response'] });
      }
    } catch {
      setNetworkErr('Network error: gagal memuat data');
    } finally {
      setLoading(false);
    }
  }, [authHeaders]);

  useEffect(() => {
    fetchDivisions();
  }, [fetchDivisions]);

  // Handler input form
  const handleChange = (e) =>{ 
  const { name, value } = e.target;
  setFormData((d) => ({ ...d, [name]: value }));
};
  // Reset form
  const resetForm = () => setFormData({ name: '', description: '', weight: '' });

  // Submit form tambah divisi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiErrors(null);
    setNetworkErr('');

    if (!formData.name || formData.name.trim().length < 2) {
      setApiErrors({ name: ['Form tidak boleh kosong'] });
      return;
    }

    const payload = {
      name: formData.name.trim(),
      description: formData.description?.trim() || undefined,
      weight: formData.weight ? Number(formData.weight) : undefined,
    };

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: authHeaders,
        body: JSON.stringify(payload),
      });
      const json = await res.json();

      if (json?.status === 'success') {
        resetForm();
        setHiddenForm(true);
        await fetchDivisions(); // refresh data
      } else {
        setApiErrors(json?.errors ?? { unknown: ['Gagal membuat divisi'] });
      }
    } catch {
      setNetworkErr('Network error: gagal mengirim data');
    }
  };

  return (
    <div className="flex flex-col gap-8 min-h-screen w-full bg-[#FAFAFA]">
      <HeaderMenu
        activeJudul={activeJudul}
        TombolSidebar={TombolSidebar}
        isiSidebarTerlihat={isiSidebarTerlihat}
        MarginSidebar={MarginSidebar}
      />

      <main className={`flex flex-col gap-8 p-11 min-h-screen ${MarginSidebar ? 'ml-56' : 'ml-0'}`}>
        {/* Judul dan tombol tambah */}
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold font-public-sans">Daftar Divisi</h1>
            <p className="font-public-sans font-extralight text-lg">
              Mengelola dan melihat informasi divisi di seluruh perusahaan
            </p>
          </div>
          <TombolMenu FormData={SpanForm} />
        </header>

        <NavMenu />

        {/* Loading & Error */}
        {loading && <div>Loading…</div>}
        {networkErr && (
          <div className="text-red-600 text-sm border border-red-200 bg-red-50 px-3 py-2 rounded">
            {networkErr}
          </div>
        )}
        {apiErrors && (
          <div className="text-orange-700 text-sm border border-orange-200 bg-orange-50 px-3 py-2 rounded">
            {Object.entries(apiErrors)
              .map(([k, v]) => `${k}: ${(v ?? []).join(', ')}`)
              .join(' | ')}
          </div>
        )}

        {/* Tabel daftar divisi */}
        <DaftarDivisi data={divisions} />

        {/* Form tambah divisi */}
        <Divisi
          MunculForm={hiddenForm}
          FungsiSpan={SpanForm}
          HandleOnSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      </main>
    </div>
  );
};

export default DasbordDivisi;
