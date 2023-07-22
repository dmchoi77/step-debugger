import { useState, useRef, useEffect, ReactElement } from 'react';

import mermaid from 'mermaid';
import { StepType } from '~/types/step.types';
import SvgDebug from '../svgs/Debug';
import { useAppContext } from '~/store/AppContext';

const mermaidCode = `
  graph TD
    A((pageA)) --> B((pageB))
    B((pageB)) --> C((pageC))
    C((pageC)) --> D((pageD))
    click A call debuggerCallback(pageA)
    click B call debuggerCallback(pageB)
    click C call debuggerCallback(pageC)
    click D call debuggerCallback(pageD)
`;

export enum RoutePath {
  Home = '/',
  PageA = '/pageA',
  PageB = '/pageB',
  PageC = '/pageC',
  PageD = '/pageD',
}

const StepDebugger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleNext } = useAppContext();

  const diagramRefs = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.debuggerCallback = (step: StepType) => handleNext(step);

    const renderChart = async (diagramId: string, mermaidCode: string) => {
      mermaid.initialize({
        startOnLoad: true,
        securityLevel: 'loose',
      });
      const { svg, bindFunctions } = await mermaid.render(diagramId, mermaidCode);

      const mermaidChartElement = diagramRefs?.current;
      if (mermaidChartElement) {
        mermaidChartElement.innerHTML = svg;
      }

      if (bindFunctions) {
        bindFunctions(mermaidChartElement as HTMLDivElement);
      }
    };

    renderChart('mermaid', mermaidCode);
  }, [isOpen]);

  return (
    <>
      <SvgDebug
        style={{
          cursor: 'pointer',
          padding: '10px',
          width: '70px',
          height: '70px',
          position: 'fixed',
          bottom: 0,
          right: 0,
          zIndex: '1302',
        }}
        onClick={() => setIsOpen((prev) => !prev)}
      />

      {isOpen && (
        <div
          style={{
            display: 'flex',
            position: 'fixed',
            top: 0,
            // width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            zIndex: '1301',
          }}
        >
          <div
            style={{
              top: 0,
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '600px',
              height: '100%',
              backgroundColor: '#00000045',
            }}
          >
            <div className='mermaid' ref={diagramRefs}></div>
          </div>
        </div>
      )}
    </>
  );
};
export default StepDebugger;
