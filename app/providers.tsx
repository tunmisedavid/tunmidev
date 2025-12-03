"use client";

// import { ThemeProvider } from "@/components/theme-Provider";
// const Providers = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <>
    
//       <ThemeProvider
      
//         attribute="class"
//         defaultTheme="system"
//         enableSystem
//         disableTransitionOnChange
//       >
//         {children}
//       </ThemeProvider>
//     </>
//   );
// };
// export default Providers;

import {Provider} from "react-redux"
import {store} from "../store/store"


export const Providers = ({children}: {children: React.ReactNode}) => {
  return <Provider store={store}>{children} </Provider> 
}
