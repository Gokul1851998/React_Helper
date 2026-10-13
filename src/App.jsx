import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LayoutProvider } from './context/LayoutContext';
import Login from './pages/Login';
import Home from './pages/Home';

// Table Demos
import MuiTableDemo from './pages/components/table/MuiTableDemo';
import AntdTableDemo from './pages/components/table/AntdTableDemo';
import TanstackVirtualTableDemo from './pages/components/table/TanstackVirtualTableDemo';
import DaisyuiTableDemo from './pages/components/table/DaisyuiTableDemo';

// Button Demos
import MuiButtonDemo from './pages/components/buttons/MuiButtonDemo';
import AntdButtonDemo from './pages/components/buttons/AntdButtonDemo';
import DaisyuiButtonDemo from './pages/components/buttons/DaisyuiButtonDemo';
import ModernButtonDemo from './pages/components/buttons/ModernButtonDemo';

// Accordion Demos
import MuiAccordionDemo from './pages/components/accordions/MuiAccordionDemo';
import AntdAccordionDemo from './pages/components/accordions/AntdAccordionDemo';
import DaisyuiAccordionDemo from './pages/components/accordions/DaisyuiAccordionDemo';
import RadixAccordionDemo from './pages/components/accordions/RadixAccordionDemo';

// Skeleton Demos
import MuiSkeletonDemo from './pages/components/skeletons/MuiSkeletonDemo';
import AntdSkeletonDemo from './pages/components/skeletons/AntdSkeletonDemo';
import DaisyuiSkeletonDemo from './pages/components/skeletons/DaisyuiSkeletonDemo';

// Avatar Demos
import MuiAvatarDemo from './pages/components/avatars/MuiAvatarDemo';
import AntdAvatarDemo from './pages/components/avatars/AntdAvatarDemo';
import DaisyuiAvatarDemo from './pages/components/avatars/DaisyuiAvatarDemo';

// Cards Demos
import MuiCardsDemo from './pages/components/cards/MuiCardsDemo';
import AntdCardsDemo from './pages/components/cards/AntdCardsDemo';
import DaisyuiCardsDemo from './pages/components/cards/DaisyuiCardsDemo';
import ModernCardsDemo from './pages/components/cards/ModernCardsDemo';

// Dialog Demos
import RadixDialogDemo from './pages/components/dialogs/RadixDialogDemo';
import HeadlessModalDemo from './pages/components/dialogs/HeadlessModalDemo';
import MuiDialogDemo from './pages/components/dialogs/MuiDialogDemo';
import AntdDialogDemo from './pages/components/dialogs/AntdDialogDemo';

// Input Demos
import ReactAriaFormDemo from './pages/components/inputs/ReactAriaFormDemo';
import MuiInputsDemo from './pages/components/inputs/MuiInputsDemo';
import AntdFormDemo from './pages/components/inputs/AntdFormDemo';
import RadixInputsDemo from './pages/components/inputs/RadixInputsDemo';

// Tabs & Navigation Demos
import HeadlessTabsDemo from './pages/components/tabs/HeadlessTabsDemo';
import RadixTabsDemo from './pages/components/tabs/RadixTabsDemo';
import AntdTabsDemo from './pages/components/tabs/AntdTabsDemo';
import MuiTabsDemo from './pages/components/tabs/MuiTabsDemo';

// Feedback Demos
import AntdFeedbackDemo from './pages/components/feedback/AntdFeedbackDemo';
import MuiFeedbackDemo from './pages/components/feedback/MuiFeedbackDemo';
import DaisyuiFeedbackDemo from './pages/components/feedback/DaisyuiFeedbackDemo';

// Drag and Drop Demos
import KanbanDragDropDemo from './pages/components/dragdrop/KanbanDragDropDemo';
import SortableListDragDropDemo from './pages/components/dragdrop/SortableListDragDropDemo';
import FileDropzoneDemo from './pages/components/dragdrop/FileDropzoneDemo';
import GridWidgetsDragDropDemo from './pages/components/dragdrop/GridWidgetsDragDropDemo';

// MDBootstrap Demos
import MdbAllComponentsDemo from './pages/components/mdbootstrap/MdbAllComponentsDemo';
import MdbButtonsDemo from './pages/components/mdbootstrap/MdbButtonsDemo';
import MdbCardsDemo from './pages/components/mdbootstrap/MdbCardsDemo';
import MdbFormsDemo from './pages/components/mdbootstrap/MdbFormsDemo';
import MdbTableDemo from './pages/components/mdbootstrap/MdbTableDemo';
import MdbAccordionDemo from './pages/components/mdbootstrap/MdbAccordionDemo';
import MdbModalsDemo from './pages/components/mdbootstrap/MdbModalsDemo';
import MdbNavigationDemo from './pages/components/mdbootstrap/MdbNavigationDemo';

// Core UI Controls Demos (10 Types)
import AllControlsShowcase from './pages/components/AllControlsShowcase';
import AutocompleteDemo from './pages/components/AutocompleteDemo';
import ButtonGroupDemo from './pages/components/ButtonGroupDemo';
import CheckboxDemo from './pages/components/CheckboxDemo';
import RadioDemo from './pages/components/RadioDemo';
import SwitchDemo from './pages/components/SwitchDemo';
import SelectDemo from './pages/components/SelectDemo';
import SliderDemo from './pages/components/SliderDemo';
import TextFieldDemo from './pages/components/TextFieldDemo';
import AccordionDemo from './pages/components/AccordionDemo';
import DrawerDemo from './pages/components/DrawerDemo';

// Charts and Tree Demos
import AllChartsDemo from './pages/components/charts/AllChartsDemo';
import AllTreeDemo from './pages/components/tree/AllTreeDemo';

// Advanced Widgets & Essential UI Elements Demos
import AdvancedAntdDemo from './pages/components/AdvancedAntdDemo';
import AllElementsShowcase from './pages/components/AllElementsShowcase';
import StepperDemo from './pages/components/StepperDemo';
import RatingDemo from './pages/components/RatingDemo';
import ChipDemo from './pages/components/ChipDemo';
import BadgeDemo from './pages/components/BadgeDemo';
import ProgressDemo from './pages/components/ProgressDemo';
import TooltipDemo from './pages/components/TooltipDemo';
import BreadcrumbsDemo from './pages/components/BreadcrumbsDemo';
import AlertDemo from './pages/components/AlertDemo';
import SnackbarDemo from './pages/components/SnackbarDemo';
import PaginationDemo from './pages/components/PaginationDemo';
import ListDemo from './pages/components/ListDemo';
import DividerDemo from './pages/components/DividerDemo';
import TypographyDemo from './pages/components/TypographyDemo';

// Layout wrapper for each demo component
const ComponentWrapper = ({ element }) => {
  return <Home>{element}</Home>;
};

export default function App() {
  return (
    <LayoutProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/components" element={<Home />} />

          {/* Advanced Widgets (AntD Suite) Route */}
          <Route path="/components/advanced/suite" element={<ComponentWrapper element={<AdvancedAntdDemo />} />} />

          {/* Essential UI Elements (13 Types) Routes */}
          <Route path="/components/elements/all" element={<ComponentWrapper element={<AllElementsShowcase />} />} />
          <Route path="/components/elements/stepper" element={<ComponentWrapper element={<StepperDemo />} />} />
          <Route path="/components/elements/rating" element={<ComponentWrapper element={<RatingDemo />} />} />
          <Route path="/components/elements/chip" element={<ComponentWrapper element={<ChipDemo />} />} />
          <Route path="/components/elements/badge" element={<ComponentWrapper element={<BadgeDemo />} />} />
          <Route path="/components/elements/progress" element={<ComponentWrapper element={<ProgressDemo />} />} />
          <Route path="/components/elements/tooltip" element={<ComponentWrapper element={<TooltipDemo />} />} />
          <Route path="/components/elements/breadcrumbs" element={<ComponentWrapper element={<BreadcrumbsDemo />} />} />
          <Route path="/components/elements/alert" element={<ComponentWrapper element={<AlertDemo />} />} />
          <Route path="/components/elements/snackbar" element={<ComponentWrapper element={<SnackbarDemo />} />} />
          <Route path="/components/elements/pagination" element={<ComponentWrapper element={<PaginationDemo />} />} />
          <Route path="/components/elements/list" element={<ComponentWrapper element={<ListDemo />} />} />
          <Route path="/components/elements/divider" element={<ComponentWrapper element={<DividerDemo />} />} />
          <Route path="/components/elements/typography" element={<ComponentWrapper element={<TypographyDemo />} />} />

          {/* Charts & Tree Routes */}
          <Route path="/components/charts/all" element={<ComponentWrapper element={<AllChartsDemo />} />} />
          <Route path="/components/tree/all" element={<ComponentWrapper element={<AllTreeDemo />} />} />

          {/* Core UI Controls (10 Types) Routes */}
          <Route path="/components/controls/all" element={<ComponentWrapper element={<AllControlsShowcase />} />} />
          <Route path="/components/controls/autocomplete" element={<ComponentWrapper element={<AutocompleteDemo />} />} />
          <Route path="/components/controls/button-group" element={<ComponentWrapper element={<ButtonGroupDemo />} />} />
          <Route path="/components/controls/checkbox" element={<ComponentWrapper element={<CheckboxDemo />} />} />
          <Route path="/components/controls/radio" element={<ComponentWrapper element={<RadioDemo />} />} />
          <Route path="/components/controls/switch" element={<ComponentWrapper element={<SwitchDemo />} />} />
          <Route path="/components/controls/select" element={<ComponentWrapper element={<SelectDemo />} />} />
          <Route path="/components/controls/slider" element={<ComponentWrapper element={<SliderDemo />} />} />
          <Route path="/components/controls/text-field" element={<ComponentWrapper element={<TextFieldDemo />} />} />
          <Route path="/components/controls/accordion" element={<ComponentWrapper element={<AccordionDemo />} />} />
          <Route path="/components/controls/drawer" element={<ComponentWrapper element={<DrawerDemo />} />} />

          {/* MDBootstrap Category Routes */}
          <Route path="/components/mdbootstrap/all" element={<ComponentWrapper element={<MdbAllComponentsDemo />} />} />
          <Route path="/components/mdbootstrap/buttons" element={<ComponentWrapper element={<MdbButtonsDemo />} />} />
          <Route path="/components/mdbootstrap/cards" element={<ComponentWrapper element={<MdbCardsDemo />} />} />
          <Route path="/components/mdbootstrap/forms" element={<ComponentWrapper element={<MdbFormsDemo />} />} />
          <Route path="/components/mdbootstrap/table" element={<ComponentWrapper element={<MdbTableDemo />} />} />
          <Route path="/components/mdbootstrap/accordion" element={<ComponentWrapper element={<MdbAccordionDemo />} />} />
          <Route path="/components/mdbootstrap/modals" element={<ComponentWrapper element={<MdbModalsDemo />} />} />
          <Route path="/components/mdbootstrap/navigation" element={<ComponentWrapper element={<MdbNavigationDemo />} />} />

          {/* Drag & Drop Category Routes */}
          <Route path="/components/dragdrop/kanban" element={<ComponentWrapper element={<KanbanDragDropDemo />} />} />
          <Route path="/components/dragdrop/sortable" element={<ComponentWrapper element={<SortableListDragDropDemo />} />} />
          <Route path="/components/dragdrop/file-dropzone" element={<ComponentWrapper element={<FileDropzoneDemo />} />} />
          <Route path="/components/dragdrop/grid-widgets" element={<ComponentWrapper element={<GridWidgetsDragDropDemo />} />} />

          {/* Table Category Routes */}
          <Route path="/components/table/mui" element={<ComponentWrapper element={<MuiTableDemo />} />} />
          <Route path="/components/table/antd" element={<ComponentWrapper element={<AntdTableDemo />} />} />
          <Route path="/components/table/tanstack-virtual" element={<ComponentWrapper element={<TanstackVirtualTableDemo />} />} />
          <Route path="/components/table/daisyui" element={<ComponentWrapper element={<DaisyuiTableDemo />} />} />

          {/* Button Category Routes */}
          <Route path="/components/button/mui" element={<ComponentWrapper element={<MuiButtonDemo />} />} />
          <Route path="/components/button/antd" element={<ComponentWrapper element={<AntdButtonDemo />} />} />
          <Route path="/components/button/daisyui" element={<ComponentWrapper element={<DaisyuiButtonDemo />} />} />
          <Route path="/components/button/modern" element={<ComponentWrapper element={<ModernButtonDemo />} />} />

          {/* Accordion Category Routes */}
          <Route path="/components/accordion/mui" element={<ComponentWrapper element={<MuiAccordionDemo />} />} />
          <Route path="/components/accordion/antd" element={<ComponentWrapper element={<AntdAccordionDemo />} />} />
          <Route path="/components/accordion/daisyui" element={<ComponentWrapper element={<DaisyuiAccordionDemo />} />} />
          <Route path="/components/accordion/radix" element={<ComponentWrapper element={<RadixAccordionDemo />} />} />

          {/* Skeleton Category Routes */}
          <Route path="/components/skeleton/mui" element={<ComponentWrapper element={<MuiSkeletonDemo />} />} />
          <Route path="/components/skeleton/antd" element={<ComponentWrapper element={<AntdSkeletonDemo />} />} />
          <Route path="/components/skeleton/daisyui" element={<ComponentWrapper element={<DaisyuiSkeletonDemo />} />} />

          {/* Avatar Category Routes */}
          <Route path="/components/avatar/mui" element={<ComponentWrapper element={<MuiAvatarDemo />} />} />
          <Route path="/components/avatar/antd" element={<ComponentWrapper element={<AntdAvatarDemo />} />} />
          <Route path="/components/avatar/daisyui" element={<ComponentWrapper element={<DaisyuiAvatarDemo />} />} />

          {/* Cards Category Routes */}
          <Route path="/components/card/mui" element={<ComponentWrapper element={<MuiCardsDemo />} />} />
          <Route path="/components/card/antd" element={<ComponentWrapper element={<AntdCardsDemo />} />} />
          <Route path="/components/card/daisyui" element={<ComponentWrapper element={<DaisyuiCardsDemo />} />} />
          <Route path="/components/card/modern" element={<ComponentWrapper element={<ModernCardsDemo />} />} />

          {/* Dialog Category Routes */}
          <Route path="/components/dialog/radix" element={<ComponentWrapper element={<RadixDialogDemo />} />} />
          <Route path="/components/dialog/headless" element={<ComponentWrapper element={<HeadlessModalDemo />} />} />
          <Route path="/components/dialog/mui" element={<ComponentWrapper element={<MuiDialogDemo />} />} />
          <Route path="/components/dialog/antd" element={<ComponentWrapper element={<AntdDialogDemo />} />} />

          {/* Input Category Routes */}
          <Route path="/components/input/react-aria" element={<ComponentWrapper element={<ReactAriaFormDemo />} />} />
          <Route path="/components/input/mui" element={<ComponentWrapper element={<MuiInputsDemo />} />} />
          <Route path="/components/input/antd" element={<ComponentWrapper element={<AntdFormDemo />} />} />
          <Route path="/components/input/radix" element={<ComponentWrapper element={<RadixInputsDemo />} />} />

          {/* Tabs Category Routes */}
          <Route path="/components/tabs/headless" element={<ComponentWrapper element={<HeadlessTabsDemo />} />} />
          <Route path="/components/tabs/radix" element={<ComponentWrapper element={<RadixTabsDemo />} />} />
          <Route path="/components/tabs/antd" element={<ComponentWrapper element={<AntdTabsDemo />} />} />
          <Route path="/components/tabs/mui" element={<ComponentWrapper element={<MuiTabsDemo />} />} />

          {/* Feedback Category Routes */}
          <Route path="/components/feedback/antd" element={<ComponentWrapper element={<AntdFeedbackDemo />} />} />
          <Route path="/components/feedback/mui" element={<ComponentWrapper element={<MuiFeedbackDemo />} />} />
          <Route path="/components/feedback/daisyui" element={<ComponentWrapper element={<DaisyuiFeedbackDemo />} />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </Router>
    </LayoutProvider>
  );
}
