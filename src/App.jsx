import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { RegistrationProvider } from "./context/RegistrationContext.jsx";
import { AppShell } from "./components/AppShell.jsx";
import { StepLayout } from "./components/StepLayout.jsx";
import { SHOW_VISITOR_TYPE } from "./flow.js";

import Landing from "./pages/Landing.jsx";
import VisitorType from "./pages/VisitorType.jsx";
import PersonalData from "./pages/PersonalData.jsx";
import VisitDetail from "./pages/VisitDetail.jsx";
import Confirmation from "./pages/Confirmation.jsx";
import Ticket from "./pages/Ticket.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <RegistrationProvider>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Landing />} />
            <Route element={<StepLayout />}>
              {SHOW_VISITOR_TYPE && (
                <Route path="/type" element={<VisitorType />} />
              )}
              <Route path="/register" element={<PersonalData />} />
              <Route path="/visit" element={<VisitDetail />} />
              <Route path="/confirm" element={<Confirmation />} />
              <Route path="/ticket" element={<Ticket />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </RegistrationProvider>
    </BrowserRouter>
  );
}
