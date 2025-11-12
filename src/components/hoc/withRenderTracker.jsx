import { useRef } from 'react';

function withRenderTracker(WrappedComponent) {
  return (props) => {
    const renderCount = useRef(0);
    renderCount.current += 1;

    console.log(
      `Компонент ${WrappedComponent.name} рендерился ${renderCount.current} раз`
    );
    return <WrappedComponent {...props} />;
  };
}

export default withRenderTracker;
