import React, { useCallback, useEffect, useMemo, useState } from 'react';
import HeaderMenu from '../Components/Menu/HeaderMenu';
import NavMenu from '../Components/Menu/NavMenu';
import TombolMenu from '../Components/Menu/TombolMenu';
import DaftarKaryawan from '../Components/KolomTable-data/DaftarKaryawan';
import Karyawan from '../Components/FormPenambahan/Karyawan.jsx';

const API_BASE = import.meta.env?.VITE_API_BASE_URL ?? 'http://localhost:3000';
const ENDPOINT = `${API_BASE}/api/employees`;

const DasbordKaryawan = () => {
  // Sidebar
  const [isiSidebarTerlihat, setSidebarTidakterlihat] = useState(false);
  const [MarginSidebar, setMarginSidebar] = useState(false);

  // Judul
  const activeJudul = 'Daftar Karyawan';

  

  // Form tambah karyawan
  const [hiddenForm, setHiddenForm] = useState(true);
  const [formData, setFormData] = useState({
    idUser: '',
    email: '',
    description: '',
    position: '',
    joinDate: '',
  });

  // Data karyawan
  const [employees, setEmployees] = useState([]);

  // Filter state
  const [filters, setFilters] = useState({
    urutan: '',
    name: '',
    jabatan: '',
    month: '',
  });

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

 
  // Ambil semua karyawan dari API
  const fetchEmployees = useCallback(async () => {
    setLoading(true);
    setNetworkErr('');
    setApiErrors(null);

    try {
      const res = await fetch(ENDPOINT, { headers: authHeaders });
      const json = await res.json();

      if (json?.status === 'success') {
        setEmployees(json.data.employees ?? []);
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
    fetchEmployees();
  }, [fetchEmployees]);

  // Handler input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((d) => ({ ...d, [name]: value }));
  };

  // Reset form
  const resetForm = () =>
    setFormData({ idUser: '', email: '', description: '', joinDate: '' });

  // Reset filter
  const handleResetFilters = useCallback(() => {
    setFilters({ id: '', name: '', jabatan: '', month: '' });
  }, []);

  // Filtered data
  const filteredEmployees = useMemo(() => {
    const q = (filters.urutan || '').trim().toLowerCase();
    const namaSel = (filters.name || '').toLowerCase();
    const jabSel = (filters.jabatan || '').toLowerCase();
    const blnSel = (filters.month || '').toLowerCase();

    return employees.filter((e) => {
      const idUser = String(e?.idUser ?? '').toLowerCase();
      const name = String(e?.name ?? '').toLowerCase();
      const description = String(e?.description ?? '').toLowerCase();
      const joinDate = String(e?.joinDate ?? '').toLowerCase();

      const matchQ =
        !q ||
        idUser.includes(q) ||
        name.includes(q) ||
        description.includes(q) ||
        joinDate.includes(q);

      const matchNama = !namaSel || idUser.includes(namaSel);
      const matchJabatan = !jabSel || description.includes(jabSel);
      const matchMonth = !blnSel || joinDate.includes(blnSel);

      return matchQ && matchNama && matchJabatan && matchMonth;
    });
  }, [employees, filters]);

  // Submit form tambah karyawan
  const handleSubmit = async (e) => {
    e.preventDefault();
    setApiErrors(null);
    setNetworkErr('');

    if (!formData.name || formData.name.trim().length < 2) {
      setApiErrors({ name: ['Nama tidak boleh kosong'] });
      return;
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email?.trim(),
      jabatan: formData.jabatan?.trim(),
      divisionId: formData.divisionId ? Number(formData.divisionId) : undefined,
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
        await fetchEmployees();
      } else {
        setApiErrors(json?.errors ?? { unknown: ['Gagal membuat karyawan'] });
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

      <main
        className={`flex flex-col gap-8 p-11 min-h-screen ${
          MarginSidebar ? 'ml-56' : 'ml-0'
        }`}
      >
        <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold font-public-sans">
              Daftar Karyawan
            </h1>
            <p className="font-public-sans font-extralight text-lg">
              Mengelola dan melihat informasi karyawan di seluruh perusahaan
            </p>
          </div>

          <div className="flex flex-row gap-3">
            <TombolMenu FormData={SpanForm} />
          </div>
        </header>

        <NavMenu
          filters={filters}
          onChange={setFilters}
          onReset={handleResetFilters}
        />

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

        <DaftarKaryawan data={filteredEmployees} />

        <Karyawan
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

export default DasbordKaryawan;
