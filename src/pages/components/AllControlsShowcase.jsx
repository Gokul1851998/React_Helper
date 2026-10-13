import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  Paper,
  Stack,
  Button,
  Chip
} from '@mui/material';
import {
  SlidersHorizontal,
  MousePointerClick,
  CheckSquare,
  CircleDot,
  ToggleLeft,
  ChevronDownSquare,
  Maximize2,
  FormInput,
  FolderTree,
  Sparkles,
  ArrowRight,
  Layers
} from 'lucide-react';

import AutocompleteDemo from './AutocompleteDemo';
import ButtonGroupDemo from './ButtonGroupDemo';
import CheckboxDemo from './CheckboxDemo';
import RadioDemo from './RadioDemo';
import SwitchDemo from './SwitchDemo';
import SelectDemo from './SelectDemo';
import SliderDemo from './SliderDemo';
import TextFieldDemo from './TextFieldDemo';
import AccordionDemo from './AccordionDemo';
import DrawerDemo from './DrawerDemo';

const CONTROLS_TABS = [
  { id: 'autocomplete', label: 'Autocomplete', icon: <SlidersHorizontal className="w-4 h-4" />, path: '/components/controls/autocomplete', desc: 'Auto-suggest dropdowns with single & multi selection' },
  { id: 'button-group', label: 'Button Group', icon: <MousePointerClick className="w-4 h-4" />, path: '/components/controls/button-group', desc: 'Grouped buttons, orientations, sizes & split variants' },
  { id: 'checkbox', label: 'Checkbox', icon: <CheckSquare className="w-4 h-4" />, path: '/components/controls/checkbox', desc: 'Checkboxes, custom icons, indeterminate states & colors' },
  { id: 'radio', label: 'Radio Button', icon: <CircleDot className="w-4 h-4" />, path: '/components/controls/radio', desc: 'Single-select radio groups, directions & validation' },
  { id: 'switch', label: 'Switches', icon: <ToggleLeft className="w-4 h-4" />, path: '/components/controls/switch', desc: 'Toggle switches, sizes, color palettes & states' },
  { id: 'select', label: 'Selection / Select', icon: <ChevronDownSquare className="w-4 h-4" />, path: '/components/controls/select', desc: 'Dropdown menus, multi-select chips, native & grouped' },
  { id: 'slider', label: 'Slider', icon: <SlidersHorizontal className="w-4 h-4" />, path: '/components/controls/slider', desc: 'Continuous, discrete, dual-thumb range & vertical sliders' },
  { id: 'text-field', label: 'Text Field', icon: <FormInput className="w-4 h-4" />, path: '/components/controls/text-field', desc: 'Outlined, filled, standard, validation errors & multiline' },
  { id: 'accordion', label: 'Accordion', icon: <Layers className="w-4 h-4" />, path: '/components/controls/accordion', desc: 'Collapsible drawers, controlled panels & custom icons' },
  { id: 'drawer', label: 'Drawer', icon: <Maximize2 className="w-4 h-4" />, path: '/components/controls/drawer', desc: 'Temporary 4-side slide-ins, persistent & filter sheets' },
];

export default function AllControlsShowcase() {
  const [activeTab, setActiveTab] = useState('autocomplete');
  const navigate = useNavigate();

  const currentTabObj = CONTROLS_TABS.find((t) => t.id === activeTab) || CONTROLS_TABS[0];

  const renderActiveControl = () => {
    switch (activeTab) {
      case 'autocomplete':
        return <AutocompleteDemo />;
      case 'button-group':
        return <ButtonGroupDemo />;
      case 'checkbox':
        return <CheckboxDemo />;
      case 'radio':
        return <RadioDemo />;
      case 'switch':
        return <SwitchDemo />;
      case 'select':
        return <SelectDemo />;
      case 'slider':
        return <SliderDemo />;
      case 'text-field':
        return <TextFieldDemo />;
      case 'accordion':
        return <AccordionDemo />;
      case 'drawer':
        return <DrawerDemo />;
      default:
        return <AutocompleteDemo />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              Core UI Controls Showcase (10 Types)
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 font-mono">
              Material UI Suite
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Different types and variants of Autocomplete, Button Groups, Checkboxes, Radio Buttons, Switches, Selection, Sliders, Text Fields, Accordions, and Drawers.
          </p>
        </div>

        <button
          onClick={() => navigate(currentTabObj.path)}
          className="flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-sm transition"
        >
          <span>Open Full Page View</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 10 Types Tab Selector */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
        {CONTROLS_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition ${
              activeTab === tab.id
                ? 'bg-slate-900 text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
            }`}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Selected Control Info Pill */}
      <div className="p-3 bg-indigo-50/70 border border-indigo-200/80 rounded-2xl flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="text-indigo-950 font-semibold">
            Viewing <strong>{currentTabObj.label}</strong>:
          </span>
          <span className="text-indigo-700">{currentTabObj.desc}</span>
        </div>
        <span className="text-[10px] font-mono text-indigo-600 bg-white px-2 py-0.5 rounded-md border border-indigo-200">
          Interactive Live Sandbox
        </span>
      </div>

      {/* Render Current Active Component Demo */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm animate-sub-slide">
        {renderActiveControl()}
      </div>
    </div>
  );
}
