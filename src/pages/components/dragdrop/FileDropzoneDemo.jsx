import React, { useState } from 'react';
import {
  UploadCloud,
  FileText,
  FileImage,
  FileSpreadsheet,
  FileArchive,
  CheckCircle2,
  Trash2,
  RotateCcw,
  Sparkles,
  AlertCircle,
  File,
  Plus
} from 'lucide-react';

const SAMPLE_FILES = [
  {
    id: 'f-1',
    name: 'Q3_Financial_Ledger.csv',
    size: '1.4 MB',
    type: 'csv',
    progress: 100,
    status: 'completed',
    date: 'Just now',
  },
  {
    id: 'f-2',
    name: 'System_Architecture_Diagram.png',
    size: '3.8 MB',
    type: 'image',
    progress: 100,
    status: 'completed',
    date: '2 mins ago',
  },
  {
    id: 'f-3',
    name: 'Component_Design_Tokens.pdf',
    size: '850 KB',
    type: 'pdf',
    progress: 100,
    status: 'completed',
    date: '5 mins ago',
  },
];

export default function FileDropzoneDemo() {
  const [files, setFiles] = useState(SAMPLE_FILES);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploading, setUploading] = useState(false);

  // Drag over dropzone
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  // Drag leave dropzone
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  // Drop files from desktop or another source
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const dropped = e.dataTransfer.files;
    if (dropped && dropped.length > 0) {
      const newFilesList = Array.from(dropped).map((file, idx) => {
        const sizeMb = (file.size / (1024 * 1024)).toFixed(1);
        const sizeStr = sizeMb < 0.1 ? `${Math.round(file.size / 1024)} KB` : `${sizeMb} MB`;
        let fType = 'file';
        if (file.type.includes('image')) fType = 'image';
        else if (file.type.includes('pdf')) fType = 'pdf';
        else if (file.type.includes('csv') || file.name.endsWith('.csv')) fType = 'csv';

        return {
          id: `file-${Date.now()}-${idx}`,
          name: file.name,
          size: sizeStr,
          type: fType,
          progress: 100,
          status: 'completed',
          date: 'Just now',
        };
      });

      setFiles((prev) => [...newFilesList, ...prev]);
    }
  };

  // Add simulated sample file
  const addSampleFile = (name, size, type) => {
    const newFile = {
      id: `sample-${Date.now()}`,
      name,
      size,
      type,
      progress: 0,
      status: 'uploading',
      date: 'Just now',
    };

    setFiles((prev) => [newFile, ...prev]);

    // Simulate upload progress
    setTimeout(() => {
      setFiles((prev) =>
        prev.map((f) => (f.id === newFile.id ? { ...f, progress: 100, status: 'completed' } : f))
      );
    }, 800);
  };

  const removeFile = (id) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
  };

  const clearAllFiles = () => {
    setFiles([]);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'image':
        return <FileImage className="w-5 h-5 text-emerald-500" />;
      case 'pdf':
        return <FileText className="w-5 h-5 text-rose-500" />;
      case 'csv':
        return <FileSpreadsheet className="w-5 h-5 text-blue-500" />;
      default:
        return <File className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              File Dropzone & Upload Drag & Drop
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              Desktop File Dropping
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Drag files directly from your desktop or use the quick sample buttons below. Supports live drop target pulse and upload progress.
          </p>
        </div>

        {/* Clear All action */}
        {files.length > 0 && (
          <button
            onClick={clearAllFiles}
            className="flex items-center gap-1.5 px-3 py-2 bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 text-xs font-bold rounded-xl shadow-sm transition"
          >
            <Trash2 className="w-3.5 h-3.5 text-rose-500" />
            <span>Clear All ({files.length})</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Drag & Drop Zone */}
        <div className="lg:col-span-6 space-y-4">
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center transition-all flex flex-col items-center justify-center cursor-pointer min-h-[300px] ${
              isDragOver
                ? 'border-indigo-600 bg-indigo-50/70 scale-[1.02] shadow-xl ring-4 ring-indigo-500/20'
                : 'border-slate-300 hover:border-indigo-400 bg-white hover:bg-slate-50/50'
            }`}
          >
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-transform ${
                isDragOver ? 'bg-indigo-600 text-white scale-110' : 'bg-indigo-50 text-indigo-600'
              }`}
            >
              <UploadCloud className="w-8 h-8" />
            </div>

            <h3 className="font-bold text-slate-900 text-base mt-4">
              {isDragOver ? 'Release to upload files!' : 'Drag & drop files here'}
            </h3>
            <p className="text-slate-500 text-xs mt-1 max-w-sm">
              Supports PNG, JPG, PDF, CSV, ZIP documents up to 50MB. Drag files directly from your operating system folder.
            </p>

            <div className="mt-5 flex items-center gap-2 text-[10px] text-slate-400 font-mono">
              <span className="px-2 py-0.5 rounded bg-slate-100">Drag Event Active</span>
              <span>•</span>
              <span className="px-2 py-0.5 rounded bg-slate-100">Client FileReader</span>
            </div>
          </div>

          {/* Quick Sample File Droppers */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200">
            <div className="text-xs font-bold text-slate-700 mb-2 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
              Quickly simulate dropping sample files:
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => addSampleFile('Security_Audit_Report.pdf', '2.1 MB', 'pdf')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition"
              >
                <Plus className="w-3 h-3" /> + Audit.pdf
              </button>
              <button
                onClick={() => addSampleFile('Analytics_Dataset.csv', '5.4 MB', 'csv')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-200 transition"
              >
                <Plus className="w-3 h-3" /> + Data.csv
              </button>
              <button
                onClick={() => addSampleFile('Hero_Dashboard_Mockup.png', '4.2 MB', 'image')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition"
              >
                <Plus className="w-3 h-3" /> + Banner.png
              </button>
            </div>
          </div>
        </div>

        {/* Right: Uploaded / Dropped Files Stream */}
        <div className="lg:col-span-6 bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-slate-900 text-sm">
                Uploaded Files Ledger
              </h3>
              <span className="text-[10px] font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-full">
                {files.length} items
              </span>
            </div>
            <span className="text-[11px] text-slate-400">Real-time status</span>
          </div>

          {files.length === 0 ? (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <UploadCloud className="w-10 h-10 mx-auto opacity-40" />
              <p className="text-xs">No files dropped yet.</p>
              <p className="text-[11px] text-slate-400">Drag and drop files into the left box.</p>
            </div>
          ) : (
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3 animate-sub-slide"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-sm shrink-0">
                      {getFileIcon(file.type)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-bold text-slate-800 text-xs truncate">
                        {file.name}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                        <span>{file.size}</span>
                        <span>•</span>
                        <span>{file.date}</span>
                        {file.status === 'completed' && (
                          <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                            <CheckCircle2 className="w-3 h-3" /> Ready
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFile(file.id)}
                    className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-white rounded-lg transition"
                    title="Remove file"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
