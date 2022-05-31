import React, { useCallback, useEffect, useState } from "react";

import { Router } from "./src/routes/Router";

import { AuthProvider } from "./src/services/Auth"

const App = () => {
  return (
    <AuthProvider>
      <Router/>
    </AuthProvider>
  );
};

export default App;