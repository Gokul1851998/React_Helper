import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Sliders,
  MoreVertical,
  Trash2,
  Copy,
  Edit3,
  ExternalLink,
} from 'lucide-react';

export default function RadixInputsDemo() {
  const [selectedTheme, setSelectedTheme] = useState('tokyo-night');
  const [selectedFont, setSelectedFont] = useState('jetbrains');

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900">Radix UI Select & Dropdown</h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200">
              @radix-ui/react-select & dropdown
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Custom styled Radix UI Select and Dropdown Menu primitives with keyboard navigation and ARIA semantics.
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm max-w-xl mx-auto space-y-8">
        {/* Radix Select Section */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            IDE Syntax Highlighting Theme (Radix Select)
          </label>

          <Select.Root value={selectedTheme} onValueChange={setSelectedTheme}>
            <Select.Trigger className="inline-flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
              <Select.Value placeholder="Select a theme..." />
              <Select.Icon>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </Select.Icon>
            </Select.Trigger>

            <Select.Portal>
              <Select.Content className="overflow-hidden bg-white rounded-2xl shadow-xl border border-slate-200 z-50 p-1 animate-scaleIn">
                <Select.ScrollUpButton className="flex items-center justify-center h-6 bg-white text-slate-400">
                  <ChevronUp className="w-4 h-4" />
                </Select.ScrollUpButton>

                <Select.Viewport className="p-1">
                  <Select.Group>
                    <Select.Label className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase">
                      Dark Themes
                    </Select.Label>
                    <Select.Item
                      value="tokyo-night"
                      className="relative flex items-center px-8 py-2 text-sm text-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer focus:outline-none focus:bg-indigo-50 select-none"
                    >
                      <Select.ItemText>Tokyo Night Storm</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                        <Check className="w-4 h-4 text-indigo-600" />
                      </Select.ItemIndicator>
                    </Select.Item>

                    <Select.Item
                      value="catppuccin-mocha"
                      className="relative flex items-center px-8 py-2 text-sm text-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer focus:outline-none focus:bg-indigo-50 select-none"
                    >
                      <Select.ItemText>Catppuccin Mocha</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                        <Check className="w-4 h-4 text-indigo-600" />
                      </Select.ItemIndicator>
                    </Select.Item>

                    <Select.Item
                      value="dracula-pro"
                      className="relative flex items-center px-8 py-2 text-sm text-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer focus:outline-none focus:bg-indigo-50 select-none"
                    >
                      <Select.ItemText>Dracula Pro</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                        <Check className="w-4 h-4 text-indigo-600" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  </Select.Group>

                  <Select.Separator className="h-px bg-slate-100 my-1" />

                  <Select.Group>
                    <Select.Label className="px-3 py-1.5 text-xs font-bold text-slate-400 uppercase">
                      Light Themes
                    </Select.Label>
                    <Select.Item
                      value="github-light"
                      className="relative flex items-center px-8 py-2 text-sm text-slate-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer focus:outline-none focus:bg-indigo-50 select-none"
                    >
                      <Select.ItemText>GitHub Light High Contrast</Select.ItemText>
                      <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
                        <Check className="w-4 h-4 text-indigo-600" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  </Select.Group>
                </Select.Viewport>

                <Select.ScrollDownButton className="flex items-center justify-center h-6 bg-white text-slate-400">
                  <ChevronDown className="w-4 h-4" />
                </Select.ScrollDownButton>
              </Select.Content>
            </Select.Portal>
          </Select.Root>

          <p className="text-xs text-slate-400 mt-2">
            Active Choice: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono">{selectedTheme}</code>
          </p>
        </div>

        {/* Radix Dropdown Menu Section */}
        <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-sm font-bold text-slate-800">Radix Context Dropdown</div>
            <div className="text-xs text-slate-500">Accessible menu triggers with keyboard shortcuts</div>
          </div>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-600 transition focus:outline-none">
                <MoreVertical className="w-5 h-5" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content className="min-w-[200px] bg-white rounded-2xl p-1.5 shadow-xl border border-slate-200 z-50 animate-scaleIn">
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 rounded-xl hover:bg-slate-100 cursor-pointer focus:outline-none">
                  <Edit3 className="w-4 h-4 text-slate-400" /> Edit Settings
                </DropdownMenu.Item>
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 rounded-xl hover:bg-slate-100 cursor-pointer focus:outline-none">
                  <Copy className="w-4 h-4 text-slate-400" /> Duplicate Config
                </DropdownMenu.Item>
                <DropdownMenu.Separator className="h-px bg-slate-100 my-1" />
                <DropdownMenu.Item className="flex items-center gap-2 px-3 py-2 text-sm text-rose-600 rounded-xl hover:bg-rose-50 cursor-pointer focus:outline-none">
                  <Trash2 className="w-4 h-4 text-rose-500" /> Purge Cache
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </div>
    </div>
  );
}
