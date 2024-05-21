'use client';
import { useEffect } from 'react';
import { UIEvent, PhotoEditorSDKUI, Tool } from 'photoeditorsdk';

import TestButton from '@/components/TestButton';
import useCounterStore from '@/store/counterStore';

const initEditor = async () => {
  const editor = await PhotoEditorSDKUI.init({
    container: '#editor',
    image: 'https://i.imgur.com/LvTDRcJ.jpeg', // Image url or Image path relative to assets folder
    // Please replace this with your license: https://img.ly/dashboard
    license: '',
    tools: [Tool.BRUSH],
  });
  console.log('PhotoEditorSDK for Web is ready!');
  editor.on(UIEvent.EXPORT, (imageSrc) => {
    console.log('Exported ', imageSrc);
  });
};

export default function Home() {
  const counts = useCounterStore((state) => state.counts);

  useEffect(() => {
    initEditor();
  });

  return (
    <main className='flex min-h-screen items-center justify-between p-24 h-screen w-screen'>
      <TestButton>test</TestButton>
      <div>{counts}</div>
      <div
        id='editor'
        className='bg-white flex-1 h-full relative'
        // style={{ position: 'relative', height: '800px', width: '600px' }}
      />
    </main>
  );
}
