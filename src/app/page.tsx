"use client";
import dynamic from 'next/dynamic'
import { Provider } from 'react-redux';
import store from '@feature/store';
import Index from './index';
export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Index />
      </Provider >
    </>
  )
}