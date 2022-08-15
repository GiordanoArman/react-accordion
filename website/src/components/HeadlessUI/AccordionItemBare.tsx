import React from 'react';
import {
  useAccordionItem,
  useAccordionItemState
} from '@szhsin/react-accordion';
import ChevronDown from '@site/static/img/chevron-down.svg';
import styles from './styles.module.css';

const AccordionItem = ({
  header,
  children,
  itemKey,
  initialEntered
}: {
  header: React.ReactNode;
  children: React.ReactNode;
  itemKey?: string | number;
  initialEntered?: boolean;
}) => {
  const { itemRef, state, toggle } =
    useAccordionItemState<HTMLDivElement>({ itemKey, initialEntered });
  const { buttonProps, panelProps } = useAccordionItem({
    state,
    toggle
  });
  const { status, isMounted, isEnter } = state;

  return (
    <div className={styles.item} ref={itemRef}>
      {/* Choose a heading level that is appropriate for the information 
      architecture of your page */}
      {/* highlight-next-line */}
      <h3 style={{ margin: 0 }}>
        <button
          className={isEnter ? styles.buttonExpanded : styles.button}
          type="button"
          {...buttonProps}
        >
          {header}
          <ChevronDown className={styles.chevron} />
        </button>
      </h3>
      {isMounted && (
        <div
          className={styles.panel}
          style={{
            display: status === 'exited' ? 'none' : undefined
          }}
          {...panelProps}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
