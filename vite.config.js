import {
  defineConfig
} from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolioreact/', // Zorg ervoor dat dit overeenkomt met de naam van je repository
});