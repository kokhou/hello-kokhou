import React from "react";

declare module '@mui/material/styles' {
    interface TypographyVariants {
        size1: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        size1?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        size1: true;
    }
}
