import React from 'react';
import {
  useAccordionItem,
  useHeightTransition,
  withAccordionItemState
} from '@szhsin/react-accordion';
import type {
  ItemStateProps,
  ItemStateOptions
} from '@szhsin/react-accordion';
import ChevronDown from '@site/static/img/chevron-down.svg';
import styles from './styles.module.css';

interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
}

const MemoItem = React.memo(
  ({
    itemRef,
    state,
    toggle,
    header,
    children
  }: ItemStateProps<HTMLDivElement> & Props) => {
    const { buttonProps, panelProps } = useAccordionItem({
      state,
      toggle
    });

    const [transitionStyle, panelRef] =
      useHeightTransition<HTMLDivElement>(state);

    const { status, isMounted, isEnter } = state;

    return (
      <div className={styles.item} ref={itemRef}>
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
            className={styles.content}
            style={{
              display: status === 'exited' ? 'none' : undefined,

              ...transitionStyle
            }}
          >
            <div
              className={styles.panel}
              ref={panelRef}
              {...panelProps}
            >
              {children}
            </div>
          </div>
        )}
      </div>
    );
  }
);

MemoItem.displayName = `AccordionItem`;
const AccordionItem = withAccordionItemState<
  ItemStateOptions & Props,
  HTMLDivElement
>(MemoItem);

export default AccordionItem;
