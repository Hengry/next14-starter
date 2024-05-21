'use client';
import React from 'react';
import {
  UIEvent,
  PhotoEditorSDKUI,
  Tool,
  ImageFormat,
  ExportFormat,
} from 'photoeditorsdk';

import TestButton from '@/components/TestButton';
import useCounterStore from '@/store/counterStore';

export default function Home() {
  const counts = useCounterStore((state) => state.counts);

  const initEditor = React.useCallback(async () => {
    const editor = await PhotoEditorSDKUI.init({
      container: '#editor',
      image: 'https://i.imgur.com/LvTDRcJ.jpeg', // Image url or Image path relative to assets folder
      // Please replace this with your license: https://img.ly/dashboard
      license: '',
      // tools: [Tool.BRUSH],
      export: {
        image: {
          enableDownload: false,
          format: ImageFormat.JPEG,
          exportType: ExportFormat.BLOB,
        },
      },
    });
    console.log('PhotoEditorSDK for Web is ready!');
    // editor.export({
    //   format: ImageFormat.JPEG, // `image/png` or `image/jpeg`
    //   exportType: ExportFormat.BLOB, // `image`, `data-url` or `blob`
    //   quality: 0.9, // 0.1 - 1.0, defines the quality of jpeg images
    //   enableDownload: false, // boolean, enable or disable the automatic file download
    //   preventExportEvent: true, // boolean, enable or disable the UIEvent.EXPORT which is called on every export
    // });
    editor.on(UIEvent.EXPORT, (imageSrc) => {
      console.log('Exported ', imageSrc);
      editor.close();
    });
  }, []);

  React.useEffect(() => {
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
