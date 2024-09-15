// import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import { ProductsProvider } from './context/ProductContexts';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { ProductCategoryProvider } from './context/ProductCategoryProvider';
import { LoaderProvider } from './context/LoaderContext';
import { FooterProvider } from './context/FooterContext';
import { ThemeProvider } from './context/ThemeProvider';

createRoot(document.getElementById('root') as HTMLElement).render(
   <ThemeProvider>
  <FavoritesProvider>
    <ProductsProvider>
      <CartProvider>
        <ProductCategoryProvider>
        <LoaderProvider>
          <FooterProvider>
             <Root />
          </FooterProvider>
        </LoaderProvider>
        </ProductCategoryProvider>
      </CartProvider>
    </ProductsProvider>
  </FavoritesProvider>
 </ThemeProvider> ,
);
